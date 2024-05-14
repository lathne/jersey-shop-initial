// É a raiz, importa funções fundamentais do react para rodar a aplicação, como o react, o css

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'




/* 
Criando a raiz da aplicação, a função render pega o ID root do html e renderiza no browser o componente do arquivo App.jsx
*/
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
