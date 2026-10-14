@echo off
setlocal
echo ===================================================
echo   Sincronizando W11 Brindes com GitHub
echo ===================================================
cd /d "%~dp0"

set "GIT=C:\Users\Ludovik\AppData\Local\Programs\Git\cmd\git.exe"

"%GIT%" add -A
"%GIT%" diff --cached --quiet
if %ERRORLEVEL% equ 0 (
    echo [INFO] Nenhuma alteracao pendente para commit.
) else (
    for /f "tokens=1-4 delims=/ " %%a in ('date /t') do set dt=%%a-%%b-%%c
    for /f "tokens=1-2 delims=: " %%a in ('time /t') do set tm=%%a:%%b
    "%GIT%" commit -m "auto-sync: atualizacao do site (%dt% %tm%)"
    echo [OK] Commit gerado com sucesso.
)

echo [INFO] Enviando para https://github.com/dovik1989/w11brindes.git ...
"%GIT%" push origin main
if %ERRORLEVEL% equ 0 (
    echo [OK] Repositorio sincronizado com sucesso!
) else (
    echo [AVISO] Falha ao enviar para o GitHub. Certifique-se de estar autenticado no GitHub.
)
echo ===================================================
pause

