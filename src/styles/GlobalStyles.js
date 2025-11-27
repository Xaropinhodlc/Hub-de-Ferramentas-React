// src/styles/GlobalStyles.js
import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        /* Garante que o fundo da página não fique branco no modo dark */
        background-color: ${props => props.theme.bgPage};
        color: ${props => props.theme.textPrimary};
        font-family: 'Inter', sans-serif;
        transition: background-color 0.3s, color 0.3s;
    }

    h1, h2, h3 {
        color: ${props => props.theme.textPrimary};
        margin-bottom: 10px;
    }

    a {
        text-decoration: none;
        color: ${props => props.theme.primary};
    }
    
    /* --- BLOCO DE CORREÇÃO CRÍTICA PARA INPUTS --- */
    input[type="number"], 
    input[type="text"], 
    select {
        width: 100%;
        padding: 10px;
        border: 1px solid ${props => props.theme.border};
        border-radius: 4px;
        
        /* Fundo do campo: CORREÇÃO VISUAL PARA O MODO DARK */
        background-color: ${props => props.theme.bgInput};
        
        /* Cor do texto digitado: CORREÇÃO VISUAL PARA O MODO DARK */
        color: ${props => props.theme.textPrimary}; 
        
        font-size: 1em;
        transition: border-color 0.3s, background-color 0.3s, color 0.3s;

        /* Garante que as cores se mantenham quando o campo está focado */
        &:focus {
            border-color: ${props => props.theme.primary};
            outline: none;
            background-color: ${props => props.theme.bgInput};
            color: ${props => props.theme.textPrimary};
        }
        
        /* Estiliza o placeholder */
        &::placeholder {
            color: ${props => props.theme.textSecondary};
            opacity: 0.8; 
        }

        /* Oculta os botões (spinners) em inputs type="number" para melhor visual */
        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
    }
`;

// --- Componentes de Layout ---

export const DashboardLayout = styled.div`
    display: flex;
    min-height: 100vh;
`;

export const MainContentArea = styled.main`
    flex-grow: 1;
    padding: 30px;
    
    @media (max-width: 768px) {
        padding: 20px;
    }
`;