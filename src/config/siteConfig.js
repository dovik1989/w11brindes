/**
 * Configuração centralizada do site W11 Brindes.
 * Edite os campos abaixo com os dados oficiais quando disponíveis.
 * Não invente informações fictícias de telefone, e-mail, endereço ou garantias.
 */
export const siteConfig = {
  name: "W11 Brindes",
  tagline: "Sua marca, presente em todos os momentos.",
  subtitle: "Brindes personalizados para empresas e eventos.",
  
  // Caminhos oficiais de imagens
  images: {
    logo: "/images/w11/w11-logo-header.png",
    logoOriginal: "/images/w11/w11-logo-original.png",
    hero: "/images/w11/produtos/01-hero-w11-brindes.png",
    categories: {
      canecas: "/images/w11/produtos/02-categoria-canecas-copos.png",
      vestuario: "/images/w11/produtos/03-categoria-vestuario.png",
      papelaria: "/images/w11/produtos/04-categoria-papelaria.png",
      kits: "/images/w11/produtos/05-categoria-kits-eventos.png",
    },
    portfolio: [
      { id: 1, title: "Canecas e copos personalizados", image: "/images/w11/produtos/02-categoria-canecas-copos.png" },
      { id: 2, title: "Vestuário corporativo", image: "/images/w11/produtos/03-categoria-vestuario.png" },
      { id: 3, title: "Copos térmicos", image: "/images/w11/produtos/06-portfolio-copo-termico.png" },
      { id: 4, title: "Chaveiros personalizados", image: "/images/w11/produtos/07-portfolio-chaveiro.png" },
      { id: 5, title: "Papelaria e cadernos", image: "/images/w11/produtos/04-categoria-papelaria.png" },
      { id: 6, title: "Kits executivos e presentes", image: "/images/w11/produtos/05-categoria-kits-eventos.png" },
    ],
    about: "/images/w11/aperto-de-maos-sobre.png"
  },

  // Categorias de brindes
  categories: [
    {
      id: "canecas-copos",
      title: "Canecas e copos",
      description: "Canecas, copos e tumblers personalizados para o dia a dia.",
      items: ["Garrafas térmicas", "Copos térmicos", "Canecas cerâmica", "Squeezes"],
      image: "/images/w11/produtos/02-categoria-canecas-copos.png",
      alt: "Canecas e copos personalizados W11 Brindes"
    },
    {
      id: "vestuario",
      title: "Vestuário",
      description: "Camisetas, polos, jaquetas e outros itens de vestuário personalizados.",
      items: ["Camisetas", "Polos", "Bonés", "Ecobags"],
      image: "/images/w11/produtos/03-categoria-vestuario.png",
      alt: "Camisetas e vestuário corporativo personalizado W11 Brindes"
    },
    {
      id: "papelaria",
      title: "Papelaria",
      description: "Cadernos, planners, canetas e itens de escritório que mantêm sua marca presente.",
      items: ["Canetas metálicas", "Agendas", "Cadernos", "Planners"],
      image: "/images/w11/produtos/04-categoria-papelaria.png",
      alt: "Papelaria, cadernos e canetas personalizadas W11 Brindes"
    },
    {
      id: "kits-eventos",
      title: "Kits e eventos",
      description: "Kits corporativos e brindes para eventos, feiras e ações de marca.",
      items: ["Kits corporativos", "Chaveiros", "Brindes tecnológicos", "Kits boas-vindas"],
      image: "/images/w11/produtos/05-categoria-kits-eventos.png",
      alt: "Kits corporativos e brindes para eventos W11 Brindes"
    }
  ],

  // Navegação da página
  navLinks: [
    { label: "Início", href: "#hero" },
    { label: "Brindes", href: "#brindes" },
    { label: "Portfólio", href: "#portfolio" },
    { label: "Clientes", href: "#clientes" },
    { label: "Sobre", href: "#sobre" },
    { label: "Contato", href: "#orcamento" },
  ],

  // CTAs
  cta: {
    primary: "Solicitar orçamento",
    primaryHref: "#orcamento",
    secondary: "Ver portfólio",
    secondaryHref: "#portfolio",
  },

  // Dados de contato editáveis (placeholders neutros até fornecimento dos dados reais)
  contact: {
    whatsapp: "", // PREENCHER: ex. "(11) 99999-9999"
    whatsappUrl: "#orcamento", // PREENCHER: ex. "https://wa.me/5511999999999"
    email: "", // PREENCHER: ex. "contato@w11brindes.com.br"
    phone: "", // PREENCHER: ex. "(11) 0000-0000"
    address: "", // PREENCHER: ex. "Cidade/Estado"
    socials: {
      instagram: "#",
      linkedin: "#",
      youtube: "#"
    }
  },

  // Destaques da barra do hero
  heroFeatures: [
    { icon: "Gift", text: "Brindes personalizados" },
    { icon: "Users", text: "Empresas e eventos" },
    { icon: "Layers", text: "Várias categorias de produtos" },
    { icon: "PackageCheck", text: "Kits e presentes" }
  ]
};
