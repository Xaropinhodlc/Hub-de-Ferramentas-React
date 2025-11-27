// src/hooks/useLocalStorage.js
import { useState, useEffect } from 'react';

// Função auxiliar para carregar o valor do localStorage de forma segura
function getStorageValue(key, defaultValue) {
    // Verifica se estamos no ambiente do navegador
    if (typeof window !== 'undefined') {
        const saved = localStorage.getItem(key);
        if (saved !== null) {
            try {
                // Tenta fazer o parse do JSON salvo
                return JSON.parse(saved);
            } catch (e) {
                console.error(`Erro ao carregar ou parsear a chave '${key}' do localStorage:`, e);
            }
        }
    }
    // Retorna o valor padrão se não estiver no navegador, se o item for nulo, ou se houver erro de parse
    return defaultValue;
}

export const useLocalStorage = (key, defaultValue) => {
    // 1. O estado agora é inicializado com a função getStorageValue.
    // Isso garante que ele só tenta ler o localStorage uma vez (no primeiro render).
    const [value, setValue] = useState(() => {
        return getStorageValue(key, defaultValue);
    });

    // 2. Efeito para salvar o valor no localStorage toda vez que 'value' for atualizado.
    useEffect(() => {
        if (typeof window !== 'undefined') {
            try {
                // Salva o novo valor serializado em JSON
                localStorage.setItem(key, JSON.stringify(value));
            } catch (e) {
                console.error(`Erro ao salvar a chave '${key}' no localStorage:`, e);
            }
        }
    }, [key, value]); // Dependências: salva sempre que a chave ou o valor mudarem

    return [value, setValue];
};