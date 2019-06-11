import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

const URL = 'http://localhost:3000/pizzas'

class App extends Component {

  constructor(){
    super()
    this.state = {
      pizzas: [],
      selectedPizza: {}
    }
  }

  editPizza = (e) => {
    let topping = e.target.parentElement.parentElement.children[0].innerText
    let selectedPizza = this.state.pizzas.find((pizza)=>{return pizza.topping === topping})
    console.log(selectedPizza)
    this.setState({
      selectedPizza: selectedPizza
    })
  }

  onChange = (e) => {
    let key
    let value
    switch(e.target.name) {
      case 'Vegetarian':
        key = 'vegetarian'
        value = true
        break;
      case 'Not Vegetarian':
        key = 'vegetarian'
        value = false
        break;
      default:
        key = e.target.name
        value = e.target.value
      }
    this.setState({
      selectedPizza:{
        ...this.state.selectedPizza,
        [key]: value
      }
    })
  }

  updatePizza = (e) => {
    let pizzas = this.state.pizzas.map((za) => {return za.id === this.state.selectedPizza.id ? this.state.selectedPizza : za})
    this.setState({
      pizzas:pizzas
    })
  }

  componentDidMount(){
    fetch(URL)
      .then(res=>res.json())
      .then(data=>{
        this.setState({
          pizzas: data
        })
      })
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm selectedPizza={this.state.selectedPizza} change={this.onChange} updatePizza={this.updatePizza}/>
        <PizzaList pizzas={this.state.pizzas} editPizza={this.editPizza} />
      </Fragment>
    );
  }
}

export default App;
