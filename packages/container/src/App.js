import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import MarketingApp from './components/MarketingApp'
import Header from './components/Header'
import AuthApp from './components/AuthApp'

import {StylesProvider,createGenerateClassName} from '@material-ui/core/styles'
const generateClassName=createGenerateClassName({
    productionPrefix:'con'
})
export default ()=>{
    return(
        <StylesProvider generateClassName={generateClassName}>
        <BrowserRouter>
        <div>
            <Header/>
            <MarketingApp/>
            <AuthApp/>
        </div>
        </BrowserRouter>
        </StylesProvider>
    )
}