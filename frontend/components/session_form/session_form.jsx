import React from "react";

class SessionForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = props.defaultState
        this.handleSubmit = this.handleSubmit.bind(this)
        this.demoUser = this.demoUser.bind(this)
    }

    componentDidMount() {
        this.props.clearErrors()
    }

    handleSubmit(event) {
        event.preventDefault()
        const user = Object.assign({}, this.state)
        this.props.process(user)
    }

    update(field) {
        return event => this.setState({
            [field]: event.currentTarget.value
        })
    }

    demoUser(event) {
        event.preventDefault()
        const demo = {
            email: "demo@demo.com",
            password: "password123"
        }

        if (this.props.formType === "Login") {
            this.props.process(demo)
        }else {
            this.props.login(demo)
        }
    }

    render() {
        const { errors, formTitle, formType, switchText, switchLink } = this.props
        const { first_name, last_name, email, password } = this.state

        const name = (formType === "Sign Up" ? (
            <div className="session-name">
                <label className="session-input-box">
                    <input
                        className="session-input"
                        type="text"
                        placeholder="First name"
                        value={first_name}
                        onChange={this.update("first_name")}
                    />
                </label>
                <label className="session-input-box">
                    <input
                        className="session-input"
                        type="text"
                        placeholder="Last name"
                        value={last_name}
                        onChange={this.update("last_name")}
                    />
                </label>
            </div>
        ) : "")

        const renderError = (errors ? (
            errors.map((error, idx) => {
                if (error.includes("Password")) {
                    return <li className="session-error" key={idx}>{error}</li>
                }else if (error.includes("Email")){
                    return <li className="session-error" key={idx}>This email has already been used.</li>
                }
                
                if (formType === "Login") {
                    return <li className="session-error" key={idx}>{error}</li>
                }else {
                    return null
                }
            })
        ) : "")

        return(
            <div className="session-form-background">
                <div className="session-form">
                    <h1 className="session-title">{formTitle}</h1>
                    <form className="session-credentials" onSubmit={this.handleSubmit}>
                        {name}
                        <label className="session-input-box">
                            <input
                                className="session-input"
                                type="text"
                                placeholder="Email"
                                value={email}
                                onChange={this.update("email")}
                            />
                        </label>
                        <label className="session-input-box">
                            <input 
                                className="session-input"
                                placeholder="Password"
                                value={password}
                                onChange={this.update("password")}
                            />
                        </label>
                        {renderError}
                    <button className="session-submit">{formType}</button>
                    </form>
                    <p className="session-switch">{switchText} {switchLink}</p>
                    <p className="session-demo">
                        Want to explore without an account? Login as a&nbsp;
                        <span className="session-demo-button" onClick={this.demoUser}>demo user</span>
                    </p>
                </div>
            </div>
        )
    }
}

export default SessionForm