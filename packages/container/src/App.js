import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import MarketingApp from './components/MarketingApp'
import Header from './components/Header'
import AuthApp from './components/AuthApp'

import {StylesProvider,createGenerateClassName} from '@material-ui/core/styles'
const generateClassName=createGenerateClassName({
    productionPrefix:'con'
})
export default ()=>{
    return(
        <BrowserRouter>
        <StylesProvider generateClassName={generateClassName}>
        <div>        
        <Header/>
        <Switch>
            <Route path="/auth" component={MarketingApp}></Route>
            <Route path="/" component={AuthApp}></Route>
        </Switch>
        </div>
        </StylesProvider>
        </BrowserRouter>
    )
}