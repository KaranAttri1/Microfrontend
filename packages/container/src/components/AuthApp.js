import {mount} from 'auth/AuthApp'
import React,{ useRef,useEffect } from 'react'
import {useHistory} from 'react-router-dom'

export default ({onSignIn})=>{
const ref=useRef(null)
const history=useHistory()
useEffect(()=>{
    const {onContainerChange}=mount(ref.current,{
        initialPath:history.location.pathname,
        onNavigate:({pathname:nextPathname})=>{
                                                const {pathname}=history.location
                                                if(pathname!==nextPathname){
                                                    history.push(nextPathname)
                                                }
        },
        onSignIn,
})
    history.listen(onContainerChange)

},[])
return <div ref={ref}></div>
}