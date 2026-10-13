import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import Portfolio from './components/Portfolio';
import Clients from './components/Clients';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import QuoteForm from './components/QuoteForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#070A10] text-slate-100 flex flex-col font-sans selection:bg-[#FF6B00] selection:text-white">
      {/* 1. Header institucional */}
      <Header />

      {/* Conteúdo Principal */}
      <main className="flex-1">
        {/* 1. Hero com Imagem de Destaque e Barra de Benefícios */}
        <Hero />

        {/* 2. Categorias de Brindes */}
        <Categories />

        {/* 3. Portfólio de Produtos */}
        <Portfolio />

        {/* 4. Clientes e Parceiros */}
        <Clients />

        {/* 5. Sobre a W11 Brindes */}
        <About />

        {/* 6. Como Funciona (3 Passos) */}
        <HowItWorks />

        {/* 7. Formulário de Orçamento */}
        <QuoteForm />
      </main>

      {/* 8. Rodapé Institucional */}
      <Footer />
    </div>
  );
}
