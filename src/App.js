import {Component} from 'react';
import './App.css';
import Text from './Components/Text/Text';
import Card from './ui/Card/Card';

class App extends Component{
  constructor(props){
    super(props);
    this.state= {
      timer: ''
    }
  }

  componentDidMount(){
    this.setState({
      timer: new Date().toLocaleTimeString()
    })
  }

  componentDidUpdate(){
    this.myTimerOut = setTimeout(() =>{
      this.setState({
        timer:new Date().toLocaleTimeString()
      })
    },1000)
  }

  componentWillUnmount(){
    clearTimeout(this.myTimerOut)
  }

  render(){
    return(
      <Card className = "container">
        <Text>
          {this.state.timer}
        </Text>
      </Card>
    )
  }

}

export default App

