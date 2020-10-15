/*
    Arquivo que configura todas as rotas de componentes do usuário.

    Code by : Tiago Ribeiro Santos

    email : tiago.programador@hotmail.com

    Site : www.tiagoribeirosantos.6te.net

*/

import React from 'react';
import { BrowserRouter, Route, Switch, } from 'react-router-dom'; //Roteamento React-Dom

import Landing from './pages/Landing';
import Orfanatos from './pages/Orfanatos';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing}></Route>
                <Route path="/orfanatos" component={Orfanatos}></Route>
            </Switch>

        </BrowserRouter>

    );
}

export default Routes;