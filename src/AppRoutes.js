import React, { Component, Suspense, lazy } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

const GetStarted = lazy(() => import('./Compoenets/GetStarted')) 
const Home = lazy(() => import('./Compoenets/Home')) 
const HelpCenter = lazy(() => import('./Compoenets/HelpCenter')) 
const Contact = lazy(() => import('./Compoenets/Contact')) 
const PrivacyPolicy = lazy(() => import('./Compoenets/PrivacyPolicy')) 
const Apply = lazy(() => import('./Compoenets/Apply')) 



export class AppRoutes extends Component {
    render() {
        return (
            <Suspense fallback=''>
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/GetStarted"></Redirect>
                    </Route>
                    <Route exact path="/GetStarted" component={GetStarted} />
                    <Route exact path="/Home" component={Home}/>
                    <Route exact path="/HelpCenter" component={HelpCenter}/>
                    <Route exact path="/Contact" component={Contact}/>
                    <Route exact path="/PrivacyPolicy" component={PrivacyPolicy}/>
                    <Route exact path="/Apply" component={Apply}/>
                </Switch>
            </Suspense>
        )
    }
}

export default AppRoutes
