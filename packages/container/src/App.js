import React,{lazy,Suspense, useState,useEffect} from 'react'
import {Router,Switch,Route,Redirect} from 'react-router-dom'
import Header from './components/Header'
import Progess from './components/Progress'
import {StylesProvider,createGenerateClassName} from '@material-ui/core/styles'
import {createBrowserHistory} from 'history'
const generateClassName=createGenerateClassName({
    productionPrefix:'con'
})

const DashboardLazy = lazy(() => import('./components/DashboardApp'));
const AuthLazy=lazy(()=>import('./components/AuthApp'))
const MarketingLazy=lazy(()=>import('./components/MarketingApp'))

const history=createBrowserHistory();

export default ()=>{
    const [isSignedIn, setIsSignedIn]=useState(false)

    useEffect(()=>{
        if (isSignedIn) {
            history.push('/dashboard');
          }
    },[isSignedIn])
    return(
        <Router history={history}>
        <StylesProvider generateClassName={generateClassName}>
        <div>        
        <Header onSignOut={()=>setIsSignedIn(false)} isSignedIn={isSignedIn}/>
        <Suspense fallback={<Progess/>}>
        <Switch>
            <Route path="/auth" >
                <AuthLazy  onSignIn={()=>setIsSignedIn(true)}/>
            </Route>
            <Route path="/dashboard" >
                {!isSignedIn && <Redirect to="/"/>}
                <DashboardLazy />
            </Route>
            <Route path="/" >
                <MarketingLazy  />
            </Route>
        </Switch>
        </Suspense>
        </div>
        </StylesProvider>
        </Router>
    )
}