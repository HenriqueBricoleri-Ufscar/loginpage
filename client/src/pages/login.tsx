import React, { use } from 'react'
import { useState } from 'react'
import { api } from '../Api.ts'

const login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const data = await api.login(email, password);
            console.log('Login sucesso:', data);
            localStorage.setItem('token', data.token);
        } catch (error) {
            console.error('Erro no login:', error);
        }
    };

    return (
        <div>
            <div>Login</div>
            <button onClick={handleLogin}>Sla</button>
        </div>
    )
}

export default login