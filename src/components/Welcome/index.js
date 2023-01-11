// Write your code here

import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {status: 'Subscribe'}

  statusChange = () => {
    const {status} = this.state
    if (status === 'Subscribe') {
      this.setState(() => ({status: 'Subscribed'}))
    } else {
      this.setState(() => ({status: 'Subscribe'}))
    }
  }

  render() {
    const {status} = this.state
    return (
      <div className="container">
        <h1>Welcome</h1>
        <p>Thank you! Happy Learning</p>
        <button className="btn-elem" type="button" onClick={this.statusChange}>
          {status}
        </button>
      </div>
    )
  }
}

export default Welcome
