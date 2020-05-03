import React,{Component} from 'react';
import CardList from './CardList';
import {robots} from './robots';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
class App extends Component {
constructor() {
	super()
	this.state={
		robots:[],
		searhfield:''
	}
	
}
componentDidMount()
{
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response=> response.json())
  .then(users => this.setState({ robots:users}));
}
onSearchChange=(event) => 
{
 this.setState({searhfield:event.target.value})

}

	render()
	{
		const filteredRobots=this.state.robots.filter(robots => {
		return robots.name.toLowerCase().includes(this.state.searhfield.toLowerCase());
	})
		
		if(this.state.robots.length===0){
			return <h1>loading</h1>
	} else {
	return (
		<div className='tc'>
		<h1>Robot</h1>
		<SearchBox SearchChange={this.onSearchChange}/>
		<Scroll>
    <CardList robots={filteredRobots} />
    </Scroll>
    </div>
);
}
}
}

export default App;