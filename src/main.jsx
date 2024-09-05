import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GlobalStyle from './global-styled.js'
// Importando as dependências para criar as rotas
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Error from './routes/Error.jsx'
import Home from './routes/Home.jsx'
import Produtos from './routes/Produtos.jsx'
import Sobre from './routes/Sobre.jsx'
import Contato from './routes/Contato.jsx'


/* Criando a Função createBrowserRouter */

const router = createBrowserRouter([
  {
    // Criando as Rotas Pai
    path: '/',
    element: <App/>,
    errorElement: <Error/>,

    // Criando as rotas Filhas

    children:[
      {path: '/', element: <Home/>},
      {path:'/produtos', element: <Produtos/>},
      {path: '/sobre', element: <Sobre/>},
      {path: '/contato', element: <Contato/>},
    ]
  }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*CRIANDO O DESESTRUCT ROUTER PARA SER RENDERIZADO */}
    <RouterProvider router={router} />
    <GlobalStyle />
  </StrictMode>,
)
