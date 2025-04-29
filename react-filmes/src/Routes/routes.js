import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/login/Login"
import CadastroFilme from "../pages/cadastroFilme/CadastroFilme"
import CadastroGenero from "../pages/cadastroGenero/CadastroGenero"

const Rotas = () => {
    return (
        <BrowserRouter> 
            <Routes>
                {/* hhtp://localhost:3000/ => Login */}
                <Route path="/" element={<Login/>} exact/>
                {/* hhtp://localhost:3000/CadastroFilme => Cadastro de Filmes */}
                <Route path= "/Filme" element={<CadastroFilme/>}/>
                {/* hhtp://localhost:3000/CadastroGenero => Cadastro de Genero */}
              <Route path= "/Genero" element={<CadastroGenero/>}/>
             </Routes>
        </BrowserRouter>
    )
}

export default Rotas;