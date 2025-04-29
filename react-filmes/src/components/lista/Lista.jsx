import "./Lista.css";
import Editar from "../../assets/img/pen-to-square-solid.svg"
import Excluir from "../../assets/img/trash-can-regular.svg"

const Lista = (props) => {
    return(
        <section className="layout_grid listagem">
            <h1>{props.tituloLista}</h1>
            <hr/>
            
            <div className="tabela">
                <table>
                    {/* cabecalho da tabela: */}
                    <thead>
                            {/* tr > table row */}
                        <tr className="table_cabecalho">
                            {/* th => table header */}
                            <th>Nome</th>
                            <th style={{display:props.visibilidade}}>Gênero</th>
                            <th>Editar</th>
                            <th>Excluir</th>      
                        </tr>
                    </thead>
                    {/* corpo da tabela */}
                    <tbody>
                      <tr className="item_lista">
                        <td data-cell="Nome">XXXXXXXXXXXX</td>
                        <td data-cell="Gênero"style={{display:props.visibilidade}}>Ação</td>
                        <td data-cell="Editar"><img src={Editar} alt="Caneta" /></td>
                        <td data-cell="Excluir"><img src={Excluir} alt="Lixeira" /></td>
                      </tr>
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default Lista;