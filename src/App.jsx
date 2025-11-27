// App.jsx
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './styles/themes'; 
import { GlobalStyle, DashboardLayout, MainContentArea } from './styles/GlobalStyles'; 
import Sidebar from './components/Sidebar';

// IMPORTAÇÕES DAS PÁGINAS (Ferramentas)
import IMCCalculator from './pages/IMCCalculator'; 
import CurrencyConverter from './pages/CurrencyConverter'; 
import PasswordGenerator from './pages/PasswordGenerator'; 

import MetricsConverter from './pages/MetricsConverter';
import StandardCalculator from './pages/StandardCalculator';
import FuelCalculator from './pages/FuelCalculator';
import CompoundInterest from './pages/CompoundInterest'; 
import DateCalculator from './pages/DateCalculator';
import TipCalculator from './pages/TipCalculator';
import PercentageCalculator from './pages/PercentageCalculator';

// Mapeamento de abas para componentes
const TAB_COMPONENTS = {
    'imc': IMCCalculator,
    'moedas': CurrencyConverter, 
    'senha': PasswordGenerator, 
    'metricas': MetricsConverter,
    'padrao': StandardCalculator,
    'combustivel': FuelCalculator,
    'juros': CompoundInterest,
    'data': DateCalculator,
    'gorjeta': TipCalculator,
    'porcentagem': PercentageCalculator,
};

export default function App() {
    // 1. Gerenciamento de Tema (Lê o tema salvo no localStorage)
    const [theme, setTheme] = useState(() => {
        const storedTheme = localStorage.getItem('app-theme');
        return storedTheme === 'dark' ? darkTheme : lightTheme;
    });

    const toggleTheme = () => {
        const newTheme = theme.name === 'light' ? darkTheme : lightTheme;
        setTheme(newTheme);
        localStorage.setItem('app-theme', newTheme.name);
    };

    // 2. Gerenciamento de Abas (Lê a aba ativa salva no localStorage)
    const [activeTab, setActiveTab] = useState(() => {
        return localStorage.getItem('active-tab') || 'imc';
    }); 
    
    // Salva a aba ativa sempre que ela muda
    React.useEffect(() => {
        localStorage.setItem('active-tab', activeTab);
    }, [activeTab]);


    const ActiveComponent = TAB_COMPONENTS[activeTab];

    return (
        <ThemeProvider theme={theme}>
            
            <GlobalStyle />
            
            <DashboardLayout>
                
                <Sidebar 
                    activeTab={activeTab} 
                    setActiveTab={setActiveTab} 
                    toggleTheme={toggleTheme}
                    themeName={theme.name}
                />
                
                <MainContentArea>
                    {/* Renderiza o componente ativo */}
                    {ActiveComponent ? <ActiveComponent /> : <h2>Ferramenta não encontrada.</h2>}
                </MainContentArea>
            </DashboardLayout>
        </ThemeProvider>
    );
}