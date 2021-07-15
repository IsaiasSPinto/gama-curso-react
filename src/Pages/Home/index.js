import axios from "axios";
import React, { useState } from "react";
import * as S from './styled'
import { useHistory } from "react-router-dom";

function Home(props) {
    const history = useHistory()
    const [usuario, setUsuario] = useState('')
    const [erro, SetErro] = useState(false)

    function handlePesquisa() {
        axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => {
            const repositories = response.data;
            const repositoresName = []
            repositories.map((repository) => {
                repositoresName.push(repository.name)
            })
            localStorage.setItem('repositoresName', JSON.stringify(repositoresName))
            SetErro(false)
            history.push('/repositories')
        })
            .catch(erro => {
                SetErro(true)
            })
    }
    return (
        <S.HomeContainer>
            <S.Content>
                <S.Input className="usuarioInput" placeholder="Usuário" value={usuario} onChange={e => setUsuario(e.target.value)} />
                <S.Button type="button" onClick={handlePesquisa}>Pesquisar</S.Button>
            </S.Content>

            {erro ? <S.ErrorMsg>Ocorreu um erro tente novamente</S.ErrorMsg> : ''}
        </S.HomeContainer>
    );
}

export default Home;
