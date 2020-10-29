<<<<<<< HEAD
import React, { Component } from 'react';

class ErrorBoundry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }
    componentDidCatch(error, info) {
        this.setState({ hasError: true })
    }

    render() {
        if(this.state.hasError) {
            return <h1>Ooops That's not good</h1>
        }
        return this.props.children;
    }
}


=======
import React, { Component } from 'react';

class ErrorBoundry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }
    componentDidCatch(error, info) {
        this.setState({ hasError: true })
    }

    render() {
        if(this.state.hasError) {
            return <h1>Ooops That's not good</h1>
        }
        return this.props.children;
    }
}


>>>>>>> 54b7c030acd6005cf60d91cf599a9889e288077a
export default ErrorBoundry;