import React, { Component } from 'react';
import CardList from '../Components/CardList';
// import { robots } from './robots';
import Searchbox from '../Components/Searchbox';
import Scroll from '../Components/Scroll';
import './App.css';
import ErrorBoundry from '../Components/ErrorBoundry';


class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/users')
        .then(response=> {
            return response.json();
        })
        .then(users=> {
            this.setState({ robots: users })
        })
        
    }

    onSearchChange = (event) => {
        this.setState( {searchfield: event.target.value} )
        
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        return(
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <Searchbox searchChange= { this.onSearchChange } />
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots} />
                    </ErrorBoundry>
                </Scroll>
                
             </div>
    );   
    }
    
}
  
export default App;