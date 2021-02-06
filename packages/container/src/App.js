import React,{lazy,Suspense} from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
const MarketingLazy=lazy(()=>import('./components/MarketingApp'))
import Header from './components/Header'
const AuthLazy=lazy(()=>import('./components/AuthApp'))
import Progess from './components/Progress'
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
        <Suspense fallback={<Progess/>}>
        <Switch>
            <Route path="/auth" component={AuthLazy}></Route>
            <Route path="/" component={MarketingLazy}></Route>
        </Switch>
        </Suspense>
        </div>
        </StylesProvider>
        </BrowserRouter>
    )
}