import React from 'react';

class SignupForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            password2: '',
            errored: false
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleErrors = this.handleErrors.bind(this);
    }

    handleErrors(field) {
        
        return this.props.errors.filter(error => error.includes(field))
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        let user = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2,
        }

        this.props.signup(user)
            .then(res => {
                if (typeof res === 'undefined') {
                    return this.setState({ errored: true })
                } else {
                    this.props.hideModal()
                }
            })
    }

    render() {
        return (
            <div id='signup'>
                <form>
                <input className='form-inputs'value={this.state.firstName}
                        onChange={this.update('firstName')}
                        type='text'
                        placeholder='First Name'
                />
                {this.state.errored ? (
                        <div className='errors'>{this.handleErrors('First')}</div>
                        ) : null
                    }
                <input className='form-inputs' value={this.state.lastName}
                        onChange={this.update('lastName')}
                        type='text'
                        placeholder='Last Name'
                />
                {this.state.errored ? (
                        <div className='errors'>{this.handleErrors('Last')}</div>
                        ) : null
                    }
                <input className='form-inputs' value={this.state.email}
                        onChange={this.update('email')}
                        type='text'
                        placeholder='Email'
                />
                {this.state.errored ? (
                        <div className='errors'>{this.handleErrors('Email')}</div>
                        ) : null
                    }
                {this.state.errored ? (
                        <div className='errors'>{this.handleErrors('A')}</div>
                        ) : null
                    }
                <input className='form-inputs' value={this.state.password}
                        onChange={this.update('password')}
                        type='password'
                        placeholder='Enter a password'
                />
                {this.state.errored ? (
                        <div className='errors' >{this.handleErrors('Password')}</div>
                        ) : null
                    }
                <input className='form-inputs' value={this.state.password2}
                        onChange={this.update('password2')}
                        type='password'
                        placeholder='Re-enter a password'
                />
                {this.state.errored ? (
                        <div className='errors' >{this.handleErrors('Confirm')}</div>
                        ) : null
                    }
                {this.state.errored ? (
                        <div className='errors'>{this.handleErrors('Passwords')}</div>
                        ) : null
                    }
                <button className='buttons' value='Sign Up' onClick={this.handleSubmit}>Sign Up</ button>
                <h5>Already have an account?</h5>
                <div onClick={() => this.props.openModal('Sign In')}> 
                    <h3>Sign In</h3>
                </div>
                </form>
            </div>
        )
    }
};

export default SignupForm;