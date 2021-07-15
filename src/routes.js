import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Home from './Pages/Home'
import repositories from './Pages/Repositorios'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/repositories' component={repositories} />
            </Switch>
        </BrowserRouter>
    )
}