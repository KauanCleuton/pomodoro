import { styled } from "styled-components";


export const Container = styled.main`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: #fff;
    gap: 20px;
    .tela span {
        font-size: 80px;
    }
    .buttons {
        width: 300px;
        justify-content: space-between;
        display: flex;
        align-items: center;
        
        button {
        padding: 10px 20px ;
        border-radius: 8px;
        border: none;
        background-color: royalblue;
        font-size: 21px;
        color: #fff;
        cursor: pointer;
        }
        button:hover {
            background-color: #2D66D7;
        }
        button:disabled {
            background-color: lightblue;
    }
    }
    .defined {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;

        input {
            padding: 10px 20px;
            font-size: 18px;
            border: none;
            border-radius: 8px;
        }
        button {
            padding: 10px 20px ;
            border-radius: 8px;
            border: none;
            background-color: royalblue;
            font-size: 21px;
            color: #fff;
            cursor: pointer;
        }
    }

`