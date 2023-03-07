/* eslint-disable arrow-body-style */
// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {key1: 0, key2: 0}

  onClickEatMango = () => {
    this.setState(prevState => {
      return {
        key1: prevState.key1 + 1,
      }
    })
  }

  onClickEatBanana = () => {
    this.setState(prevState => {
      return {
        key2: prevState.key2 + 1,
      }
    })
  }

  render() {
    const {key1, key2} = this.state
    return (
      <div className="bg-container">
        <div className="inside-container">
          <h1 className="heading">
            Bob ate <span className="fruit-count">{key1}</span> mangoes{' '}
            <span className="fruit-count">{key2}</span> bananas
          </h1>
          <div className="fruits-container">
            <div className="container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="fruit-img"
              />{' '}
              <br />
              <button
                type="button"
                className="eat-btn"
                onClick={this.onClickEatMango}
              >
                Eat Mango
              </button>
            </div>
            <div className="container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="fruit-img"
              />{' '}
              <br />
              <button
                type="button"
                className="eat-btn"
                onClick={this.onClickEatBanana}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
