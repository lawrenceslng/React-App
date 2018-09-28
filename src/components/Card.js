import React, { Component } from 'react';
import "./Card.css";
// class Card extends Component {
//   render() {
//     return (
//     <p>hi</p>
//     );
//   }
class Card extends Component {
  constructor(){
    super()

    this.state = {

    }

    // this.handleInputOnChange = this.handleInputOnChange.bind(this)
  }

  // handleInputOnChange(event) {
  //   const value = event.target.value
  //   console.log(value)

  //   this.setState({
  //     input: value
  //   })

  //   console.log("state", this.state)
  // }

  // render() {

  //   return (
  //     <div>
  //        <div className="card" id={this.props.id} onClick={this.props.click}>
  //         <div className="img-container">
  //         <img
  //           src={this.props.img}

  //         />
  //       </div>
  //     </div>
  //     </div>)
  // }
  render() {

    return (
          <img
            src={this.props.img}
            id={this.props.id} onClick={this.props.click}
          />
 )
  }
}


export default Card;
