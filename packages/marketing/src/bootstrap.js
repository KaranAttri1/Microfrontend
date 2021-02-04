console.log("MARK")
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {createMemoryHistory} from 'history'
import {useHistory} from 'react-router-dom'

const mount = (el,{onNavigate}) =>{
    const history=createMemoryHistory()
    if(onNavigate){
    history.listen(onNavigate)
    }
ReactDOM.render(
    <App history={history}/>,el)
}
if(process.env.NODE_ENV=='development'){
    const devRoot=document.querySelector('#marketing-dev-root')
    if(devRoot){
        mount(devRoot)
    }
}
export {mount}