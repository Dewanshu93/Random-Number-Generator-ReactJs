// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state={randomNumber:0}
  generateRandomNumber=()=>{
    const randomNo= Math.ceil(Math.random()*100)
    this.setState((prevState)=>({randomNumber:randomNo}))
  }
  render() {
    const {randomNumber}=this.state
    return (
      <div className="backContainer">
        <div className="mainContainer">
          <h1 className="head1">Random Numbers</h1>
          <p className="para1">
            Generate a random number in the range of 0 to 100
          </p>
          <button className="btn1" type="button" onClick={this.generateRandomNumber}>
            Generate
          </button>
          <p className="head1">
            {randomNumber}
          </p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
