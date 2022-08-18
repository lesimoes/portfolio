import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

html {
  scroll-behavior: smooth;
}
    * {
        text-decoration: none;
        line-height: 1.4;
        color: #f7fae6;
        font-family: 'Inter var', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
    Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    }


    strong {
        color: #D8DEE9;
        font-weight: 800;
    }

    em {
        font-style: normal;
        color: black;
        font-weight: 800;
        background-color: #A2C5D0;
        padding: 1px;
        border-radius: 8%;
    }

    form {
        display: flex;
        flex-direction: column;
        margin: 0;
        padding: 0;
    }
    body {
        background-color: #1e1e2e;
    }

    h1, h2, h3, h4, h5, h6, p {
        color: #8839ef;
    }

    .font-bits {
        font-family: 'Press Start 2P', cursive;
    }

    .primaryAccent {
        color: #f34dad;
    }

`;

export default GlobalStyle;
