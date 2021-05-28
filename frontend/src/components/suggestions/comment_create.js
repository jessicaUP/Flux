import React from 'react';

class CreateComment extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            body: '',
            author: props.currentUser,
            suggestion: props.suggId,
            created: false
        }
        debugger
        this.handleClick = this.handleClick.bind(this);
        this.handleButton = this.handleButton.bind(this);
    }

    update(field) {
        return e => this.setState({ [field]: e.target.value })
    }

    handleButton(e) {
        e.preventDefault();
        this.props.openModal('Sign In')
    }

    handleClick(e) {
        e.preventDefault();
        let sugg = {
            body: this.state.body,
            author: this.state.author,
            suggestion: this.state.suggestion
        }
        debugger
        this.props.createComment(sugg, this.props.sugg._id)
        this.setState({
            body: '',
            author: this.props.currentUser,
            suggestion: this.props.suggId,
            created: true
        })
        
    }

    render() {

        let createButton;
        debugger
        if (!this.props.currentUser) {
            createButton = (
                <button value='Sign In'
                    onClick={this.handleButton}>
                    Post a comment
                </button>
            )
        } else {
            createButton = (
                <button value='Post'
                    onClick={this.handleClick}>
                    Post a comment
                </button>
            )
        }

        return (
            <div>
                <form>
                    <textarea
                        value={this.state.body}
                        placeholder='Body'
                        onChange={this.update('body')}
                        />
            
                    { createButton }
                </form>
            </div>
        )
    }
};

export default CreateComment;