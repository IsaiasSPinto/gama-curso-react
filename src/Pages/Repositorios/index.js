import React, { useEffect, useState } from 'react'
import * as S from './styled'
import { useHistory } from 'react-router-dom'

function Repositories() {

    const [repositories, setRespositories] = useState([]);
    const history = useHistory()


    useEffect(() => {
        let repositoriesName = localStorage.getItem('repositoresName')
        if (repositoriesName !== null) {
            repositoriesName = JSON.parse(repositoriesName)
            setRespositories(repositoriesName)
            localStorage.clear()
        } else {
            history.push('/')
        }
    }, [])

    return (
        <>
            <S.Title>Repositorios</S.Title>
            <S.Container>
                <S.List>
                    {repositories.map(repository => {
                        return (
                            <S.ListItem>Repositório: {repository}</S.ListItem>
                        )
                    })
                    }
                </S.List>
                <S.LinkHome to="/">Voltar</S.LinkHome>
            </S.Container>
        </>
    )
}


export default Repositories;