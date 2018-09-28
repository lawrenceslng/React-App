import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import Friends from "./friends.json";
console.log(Friends);

class App extends Component {
  constructor()
  {
    super();
    this.state = {
      data: Friends,
      clicked: [],
      score: 0
    }
    this.handleClick= this.handleClick.bind(this)
  }
  handleClick(e) {
    e.preventDefault();
    console.log(e.target.id);
    if(inArray(e.target.id,this.state.clicked))
    {
      console.log(this.state.score);
      this.state.score= 0;
      this.setState({
        data: Friends,
      clicked: [],
      score: 0
      })
    }
    else{
      //finish setState
      this.state.clicked.push(e.target.id);
      console.log(this.state.score);
      console.log(this.state.clicked);
      this.setState({
        data: Friends,
      clicked: this.state.clicked,
      score: this.state.score+1
      })
      
      
      
    }
    
  }

  render() {
    // shuffle here
    return (
      <div className="App">
        <header className="App-header">
          <span>Score: {this.state.score}</span> 
        </header>
        <div className="flex-container">
        {shuffle(this.state.data).map(datum => <Card id={datum.id} img={datum.image} click={this.handleClick}></Card>)}
        </div>
      </div>
    );
  }
}

function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
  }
  return a;
}

function inArray(clicked, arr){
  var count=arr.length;
  for(var i=0;i<count;i++)
  {
      if(arr[i]==clicked){
        console.log("clicked already");
        return true;
    }
  }

  return false;
}

export default App;
