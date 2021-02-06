import React,{lazy,Suspense, useState} from 'react'
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
    const [isSignedIn, setIsSignedIn]=useState(false)
    return(
        <BrowserRouter>
        <StylesProvider generateClassName={generateClassName}>
        <div>        
        <Header onSignOut={()=>setIsSignedIn(false)} isSignedIn={isSignedIn}/>
        <Suspense fallback={<Progess/>}>
        <Switch>
            <Route path="/auth" >
                <AuthLazy  onSignIn={()=>setIsSignedIn(true)}/>
            </Route>
            <Route path="/" >
                <MarketingLazy  />
            </Route>
        </Switch>
        </Suspense>
        </div>
        </StylesProvider>
        </BrowserRouter>
    )
}