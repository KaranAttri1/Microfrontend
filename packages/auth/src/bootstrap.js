import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {createBrowserHistory,createMemoryHistory} from 'history'

const mount=(el,{onNavigate,defaultHistory,initialPath})=>{
    const history= defaultHistory || createMemoryHistory({
        initialEntries:[initialPath]
    });
    if(onNavigate){
        history.listen(onNavigate)
    }
ReactDOM.render(<App history={history}/>,el)

    return {
        onContainerChange:({pathname:nextPathname})=>{
            const pathname=history.location
            if(pathname!==nextPathname){
                history.push(nextPathname)
            }
            console.log("BBRRR")
        }
    }
}

if(process.env.NODE_ENV=='development'){
    const devRoot=document.querySelector('#auth-dev-root')
    if(devRoot){
        mount(devRoot,{defaultHistory:createBrowserHistory()})
    }
}
export {mount};