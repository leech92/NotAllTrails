import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { AuthRoute } from '../util/route_util'

import SignUpFormContainer from './session_form/signup_form_container'
import LoginFormContainer from './session_form/login_form_container'
import NavBarContainer from './nav_bar/nav_bar_container'
import SplashContainer from './splash/splash_container'
import Footer from './footer/footer'
import ParkContainer from './park/park_container'
import TrailContainer from './trail/trail_container'
import Modal from './modal/modal'

const App = () => (
    <div>
        <Modal />
        <NavBarContainer />
        <Switch>
            <AuthRoute exact path='/login' component={LoginFormContainer} />
            <AuthRoute exact path='/signup' component={SignUpFormContainer} />
            <Route path="/parks/:parkId" component={ParkContainer} />
            <Route path="/trails/:trailId" component={TrailContainer} />
            <Route exact path="/" component={SplashContainer} />
        </Switch>
        <Footer />
    </div>
)

export default App