// src/layouts/MainLayout.jsx
import { useState, useEffect } from 'react';
import { Outlet, NavLink } from 'react-router-dom'; 
// Importando os ícones da biblioteca lucide-react (instalamos no início)
import { 
    Calculator, Lock, DollarSign, Percent, Scale, 
    HeartHandshake, TrendingUp, Car, Menu, Sun, Moon 
} from 'lucide-react'; 

export default function MainLayout() {
  // Lógica de Estado para o Dark Mode (substitui a lógica JS document.getElementById('theme-toggle'))
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('theme') === 'dark'
  );
  // Estado para controlar a abertura da Sidebar (mobile)
  const [sidebarOpen, setSidebarOpen] = useState(false); 

  // Efeito que roda sempre que 'darkMode' muda, aplicando a classe no <body>
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // Função para fechar a sidebar após clicar no link (em mobile)
  const handleNavLinkClick = () => {
    if (window.innerWidth <= 768) {
      setSidebarOpen(false);
    }
  };

  return (
    // Usa 'className' e o estado 'sidebarOpen' para aplicar o CSS (off-canvas)
    <div className={`dashboard-layout ${sidebarOpen ? 'sidebar-open' : ''}`}>
        
      {/* Botão Hamburger para Mobile (usa a classe CSS .menu-toggle) */}
      <button 
        className="menu-toggle" 
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-label="Abrir menu lateral"
      >
        <Menu size={24} color="var(--text-on-sidebar)" />
      </button>

      <aside className="sidebar" id="sidebar">
        <header className="sidebar-header">
          <h1>Hub Tools</h1>
        </header>
        
        <div className="tabs-container">
          <nav className="sidebar-nav">
            {/* NavLink substitui as tags <a> ou <button> com data-tab */}
            <NavLink to="/calculadora" className="nav-link" onClick={handleNavLinkClick}>
              <Calculator size={18} /> Padrão
            </NavLink>
            
            <NavLink to="/porcentagem" className="nav-link" onClick={handleNavLinkClick}>
              <Percent size={18} /> Porcentagem
            </NavLink>
            
            <NavLink to="/moedas" className="nav-link" onClick={handleNavLinkClick}>
              <DollarSign size={18} /> Câmbio
            </NavLink>
            
            <NavLink to="/conversor" className="nav-link" onClick={handleNavLinkClick}>
              <Scale size={18} /> Conversor de Unidades
            </NavLink>
            
            <NavLink to="/imc" className="nav-link" onClick={handleNavLinkClick}>
              <HeartHandshake size={18} /> Calculadora IMC
            </NavLink>
            
            <NavLink to="/senhas" className="nav-link" onClick={handleNavLinkClick}>
              <Lock size={18} /> Gerador de Senhas
            </NavLink>

            <NavLink to="/gorjeta" className="nav-link" onClick={handleNavLinkClick}>
              <DollarSign size={18} /> Divisão/Gorjeta
            </NavLink>

            <NavLink to="/juros" className="nav-link" onClick={handleNavLinkClick}>
              <TrendingUp size={18} /> Juros Compostos
            </NavLink>

            <NavLink to="/combustivel" className="nav-link" onClick={handleNavLinkClick}>
              <Car size={18} /> Consumo Combustível
            </NavLink>
            
          </nav>
        </div>
      </aside>

      <main className="main-content-area">
        <header className="main-header">
          <h1>Meu Hub de Ferramentas</h1>
          <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)} title="Alternar tema">
            {/* Renderiza o ícone com base no estado 'darkMode' */}
            {darkMode ? <Moon size={24} /> : <Sun size={24} />}
          </button>
        </header>

        <section className="tool-section-wrapper">
          {/* O Outlet renderiza o conteúdo da rota ativa (os componentes de Página) */}
          <Outlet />
        </section>
      </main>
    </div>
  );
}