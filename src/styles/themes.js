// src/styles/themes.js

const common = {
    primary: '#007bff', // Azul Vibrante (Mantido)
    accent: '#00bcd4', // Ciano/Teal (Mantido)
    error: '#dc3545',
    success: '#2ecc71',
    warning: '#f1c40f',
    critical: '#e74c3c', 
    shadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
};

export const lightTheme = {
    name: 'light',
    ...common,
    bgPage: '#f4f7f6',
    bgSidebar: '#2c3e50',
    bgCard: '#ffffff',
    bgInput: '#ecf0f1', // Fundo para inputs e displays
    textPrimary: '#2c3e50',
    textSecondary: '#7f8c8d',
    textOnPrimary: '#ffffff',
    textOnSidebar: '#ecf0f1',
    border: '#dce1e3',
    historyBg: '#f8f8f8',
    navHover: '#34495e',
    navActive: common.accent,
};

// --- TEMA ESCURO SUAVIZADO (SOFT DARK) ---
export const darkTheme = {
    name: 'dark',
    ...common,
    // 1. Fundo da Página: De #121212 para um cinza escuro mais suave
    bgPage: '#1c1c1c', 
    
    // 2. Sidebar/Elemento de Fundo Principal: De #212121 para um tom sutilmente diferente
    bgSidebar: '#242424', 
    
    // 3. Cards/Superfícies: De #1e1e1e para um cinza médio
    bgCard: '#242424', 
    
    // 4. Inputs/Destacados: De #2a2a2a para um cinza mais claro para contraste suave
    bgInput: '#333333', 
    
    // 5. Cor da Borda: De #333333 para um cinza mais visível para separação
    border: '#444444', 
    
    // 6. Fundo de Histórico: De #252525 para um tom intermediário
    historyBg: '#2f2f2f', 
    
    // Cor do Texto Secundário: Mais brilhante para melhor leitura
    textSecondary: '#b8b8b8', 
    
    // Cor do Texto Primário: Mantido branco puro
    textPrimary: '#ffffff',
    
    // Cor de Sombra: Ajustada para um fundo mais claro
    shadow: '0 4px 12px rgba(0, 0, 0, 0.25)', 
    
    // Cores de Navegação (Mantidas, mas adaptadas ao novo fundo)
    textOnPrimary: '#1c1c1c', // Texto no botão primary deve ser escuro o suficiente
    textOnSidebar: '#ffffff',
    navHover: '#3a3a3a',
    navActive: common.accent,
};