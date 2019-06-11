import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {
  constructor() {
    super()
    this.state = {
      pizzas: [],
      currentPizza: null
    }
  }

  componentDidMount = () => {
    fetch('http://localhost:3000/pizzas')
    .then(res => res.json())
    .then(obj => {
      this.setState({
        pizzas: obj,
      })
    })
  }

  editPizza = (id) => {
    let thisPizza = this.state.pizzas.filter(pizza => pizza.id === id)
    this.setState({
      currentPizza: thisPizza[0]
    })
  }

  changeTopping = (e) => {
    let changedPizza = this.state.currentPizza
    changedPizza.topping = e.target.value
    this.setState({
      currentPizza: changedPizza
    })

  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm currentPizza={this.state.currentPizza} changeTopping={this.changeTopping}/>
        <PizzaList pizzas={this.state.pizzas} editPizza={this.editPizza}/>
      </Fragment>
    );
  }
}

export default App;
