import styled from 'styled-components'

export const Wrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column; 
    margin: auto;
    justify-content: space-around;
    align-items: center;
    background-color: #f2f2f2;
    border-radius: 5px;
    box-shadow: 10px 0px 10px 8px #2f2f2f74; 
    width: 35%;
    padding: 20px 0px;
    gap: 20px;
`;

export const Title = styled.h2`
    font-size: 20px; 
    font-wight: bold;
`;

export const InputContent = styled.form`
    display: flex;
    flex-direction: column;
`;

export const Label = styled.label``;

export const Input = styled.input`
    outline: none;
    border-radius: 5px;
    padding: 5px 10px;
    font-size: 15px;
    border: 1px solid #ccc;
`;

export const Button = styled.button`
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: white;
    background-color: #1f0f4f;
`;