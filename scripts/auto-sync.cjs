const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const projectDir = path.resolve(__dirname, '..');
const gitExe = 'C:\\Users\\Ludovik\\AppData\\Local\\Programs\\Git\\cmd\\git.exe';

console.log(`[Auto-Sync] Monitorando alterações no repositório W11: ${projectDir}`);

let debounceTimer = null;
let isSyncing = false;

function runGit(args) {
  try {
    return execSync(`"${gitExe}" ${args}`, { cwd: projectDir, stdio: 'pipe' }).toString().trim();
  } catch (err) {
    return null;
  }
}

function syncNow() {
  if (isSyncing) return;
  isSyncing = true;

  try {
    // 1. Stage all changes
    execSync(`"${gitExe}" add -A`, { cwd: projectDir, stdio: 'pipe' });

    // 2. Check if there are changes
    const status = runGit('status --porcelain');
    if (!status) {
      console.log('[Auto-Sync] Nenhuma alteração pendente para commit.');
      isSyncing = false;
      return;
    }

    // 3. Commit
    const timestamp = new Date().toLocaleString('pt-BR');
    const commitMsg = `auto-sync: atualizacao do site (${timestamp})`;
    execSync(`"${gitExe}" commit -m "${commitMsg}"`, { cwd: projectDir, stdio: 'inherit' });
    console.log(`[Auto-Sync] Commit criado com sucesso: "${commitMsg}"`);

    // 4. Push to remote
    console.log('[Auto-Sync] Enviando alterações para https://github.com/dovik1989/W11brinders.git ...');
    try {
      execSync(`"${gitExe}" push origin main`, { cwd: projectDir, stdio: 'inherit' });
      console.log('[Auto-Sync] Push concluído com sucesso!');
    } catch (pushErr) {
      console.warn('[Auto-Sync] Não foi possível fazer push automático agora. Verifique a autenticação ou conexão com o GitHub.');
    }
  } catch (e) {
    console.error('[Auto-Sync] Erro durante o processo de sincronização:', e.message);
  } finally {
    isSyncing = false;
  }
}

// Watch directory for changes
const ignoredDirs = new Set(['.git', 'node_modules', 'dist']);

fs.watch(projectDir, { recursive: true }, (eventType, filename) => {
  if (!filename) return;

  const parts = filename.split(path.sep);
  if (parts.some(p => ignoredDirs.has(p))) return;

  console.log(`[Auto-Sync] Alteração detectada em: ${filename}`);

  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    syncNow();
  }, 3500); // aguarda 3.5s de inatividade para agrupar múltiplos arquivos
});

console.log('[Auto-Sync] Serviço de commit automático em execução.');

