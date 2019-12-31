import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from '../pages/main/Home'
import Projects from '../pages/main/Projects'
import Freelance from '../pages/main/Freelance'
import Contact from '../pages/main/Contact'
const AppRouter = () => {
    return (
        <>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/projects' component={Projects}/>
            <Route exact path='/freelance' component={Freelance}/>
            <Route exact path='/contact' component={Contact}/>
            
          </Switch>  
        </>
    )
}

export default AppRouter
