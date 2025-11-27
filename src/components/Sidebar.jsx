// src/components/Sidebar.jsx
import React from 'react';
import styled from 'styled-components';

const SidebarStyled = styled.aside`
    width: 250px;
    min-width: 250px;
    background-color: ${props => props.theme.bgSidebar};
    color: ${props => props.theme.textOnSidebar};
    padding: 20px 0;
    box-shadow: 4px 0 10px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: background-color 0.3s;
`;

const SidebarHeader = styled.header`
    text-align: center;
    padding: 10px 20px;
    margin-bottom: 20px;
    h1 {
        color: ${props => props.theme.textOnSidebar};
        font-size: 1.8em;
        margin: 0;
    }
`;

const NavList = styled.nav`
    flex-grow: 1;
`;

const NavItem = styled.div`
    padding: 12px 20px;
    margin: 5px 0;
    cursor: pointer;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 15px;

    background-color: ${props => props.active 
        ? props.theme.navActive 
        : 'transparent'
    };
    color: ${props => props.active 
        ? props.theme.bgSidebar 
        : props.theme.textOnSidebar
    };

    &:hover {
        background-color: ${props => props.active 
            ? props.theme.navActive 
            : props.theme.navHover
        };
        color: ${props => props.active 
            ? props.theme.bgSidebar 
            : props.theme.textOnSidebar
        };
    }
    
    transition: background-color 0.2s, color 0.2s;
`;

const Footer = styled.footer`
    padding: 20px;
    border-top: 1px solid ${props => props.theme.navHover};
    text-align: center;
`;

const ThemeToggle = styled.button`
    background: ${props => props.theme.primary};
    color: ${props => props.theme.textOnPrimary};
    border: none;
    padding: 10px 15px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1em;
    width: 100%;
    
    &:hover {
        opacity: 0.9;
    }
`;

// Dados de navegação
const TABS = [
    { id: 'imc', label: 'Calculadora IMC', icon: '⚖️' },
    { id: 'moedas', label: 'Conversor de Moedas', icon: '💵' },
    { id: 'senha', label: 'Gerador de Senha', icon: '🔐' },

    // --- NOVAS FERRAMENTAS (7) ---
    { id: 'metricas', label: 'Conversor de Métricas', icon: '📏' },
    { id: 'padrao', label: 'Calculadora Padrão', icon: '🧮' },
    { id: 'combustivel', label: 'Calc. de Combustível', icon: '⛽' },
    { id: 'juros', label: 'Juros Compostos', icon: '📈' },
    { id: 'data', label: 'Calc. de Data', icon: '📅' },
    { id: 'gorjeta', label: 'Calc. de Gorjeta', icon: '🧾' },
    { id: 'porcentagem', label: 'Calc. de Porcentagem', icon: '📊' },
];

export default function Sidebar({ activeTab, setActiveTab, toggleTheme, themeName }) {
    return (
        <SidebarStyled>
            <div>
                <SidebarHeader>
                    <h1>🛠️ Hub Tools</h1>
                </SidebarHeader>
                <NavList>
                    {TABS.map((tab) => (
                        <NavItem
                            key={tab.id}
                            active={activeTab === tab.id}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            {tab.icon} {tab.label}
                        </NavItem>
                    ))}
                </NavList>
            </div>
            <Footer>
                <ThemeToggle onClick={toggleTheme}>
                    {themeName === 'light' ? '🌙 Modo Escuro' : '☀️ Modo Claro'}
                </ThemeToggle>
            </Footer>
        </SidebarStyled>
    );
}