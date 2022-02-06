import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { AuthRoute } from '../util/route_util'

import SignUpFormContainer from './session_form/signup_form_container'
import LoginFormContainer from './session_form/login_form_container'

const App = () => (
    <div>
        <Switch>
            <AuthRoute exact path='/login' component={LoginFormContainer} />
            <AuthRoute exact path='/signup' component={SignUpFormContainer} />
        </Switch>
    </div>
)

export default App