const API_URL = 'http://localhost:3333';

export const api = {
    createUser: async (name: string, email: string, password: string) => {
        const res = await fetch(`${API_URL}/sign`, {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({name, email, password})
        });

        return res.json();
    },

    login: async (email: string, password: string) => {
        const response = await fetch(`${API_URL}/user/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });
        
        if (!response.ok) {
            throw new Error(`Erro ao fazer login: ${response.status}`);
        }
        
        return response.json();
    }
} 