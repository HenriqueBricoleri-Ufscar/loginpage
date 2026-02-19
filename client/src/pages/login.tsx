import { useState } from 'react'
import { api } from '../Api.ts'
import { replace, useNavigate } from 'react-router-dom'

import GlobalStyle from './global.ts'
import * as C from './components/styles/LoginStyles.ts'

const login = () => {
    const [email, setEmail] = useState('Teste123@gmail.com');
    const [password, setPassword] = useState('senhateste123');
    const navigate = useNavigate()

    const handleSubmmit = async () => {
        try {
            const data = await api.login(email, password);

            if(data.success){
                console.log('Login sucesso:', data);
                localStorage.setItem('token', data.token);
                localStorage.setItem('userData', JSON.stringify(data.data));

                navigate('home', {replace: true});

            } else {
                console.error('Erro ao logar');
            }

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