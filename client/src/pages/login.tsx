import React, { use } from 'react'
import { useState } from 'react'
import { api } from '../Api.ts'

import GlobalStyle from './global.ts'
import * as C from './components/styles/LoginStyles.ts'

const login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmmit = async () => {
        try {
            const data = await api.login(email, password);
            console.log('Login sucesso:', data);
            localStorage.setItem('token', data.token);
        } catch (error) {
            console.error('Erro no login:', error);
        }
    };

    return (
        <>
            <C.Wrapper>
                <C.Container>
                    <C.Title>Login</C.Title>
                    <C.InputContent>
                        <C.Label>Email</C.Label>
                        <C.Input value = {email} onChange={(e) => {setEmail(e.target.value)}}></C.Input>
                    </C.InputContent>

                    <C.InputContent>
                        <C.Label>Senha</C.Label>
                        <C.Input value = {password} onChange={(e) => {setPassword(e.target.value)}}></C.Input>
                    </C.InputContent>

                    <C.Button onClick={handleSubmmit}>ENTRAR</C.Button>
                </C.Container>
            </C.Wrapper>
            <GlobalStyle/>
        </>
    )
}

export default login