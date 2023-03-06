/* eslint-disable arrow-body-style */
// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mangoescount: 0, bananascount: 0}

  onClickEatMango = () => {
    this.setState(prevState => {
      return {
        mangoescount: prevState.mangoescount + 1,
      }
    })
  }

  onClickEatBanana = () => {
    this.setState(prevState => {
      return {
        bananascount: prevState.bananascount + 1,
      }
    })
  }

  render() {
    const {mangoescount, bananascount} = this.state
    return (
      <div className="bg-container">
        <div className="inside-container">
          <h1 className="heading">
            Bob ate <span className="fruit-count">{mangoescount}</span> mangoes{' '}
            <span className="fruit-count">{bananascount}</span> bananas
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
