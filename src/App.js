import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {

  constructor() {
    super()
    this.state = {
      pizzas: [],
      editPizza: {
        'id':'',
        'topping': '',
        'size': '',
        'vegetarian': true
      }
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/pizzas')
    .then(res => res.json())
    .then(data => {
      this.setState({
        pizzas: data
      })
    })
  }
  
  editPizza = (e) => {
    this.setState({
      editPizza:{
        'id':parseInt(e.target.id),
        'topping': e.target.parentElement.parentElement.children[0].innerText,
        'size': e.target.parentElement.parentElement.children[1].innerText,
        'vegetarian': e.target.parentElement.parentElement.children[2].innerText === 'true'?true:false
      }
    })
  }

  pizzaSubmit = (e) => {
    // debugger
    e.preventDefault()
    this.setState({
      editPizza:{
        'topping': e.target.parentElement.parentElement.children[0].children[0].value?e.target.parentElement.parentElement.children[0].children[0].value:e.target.parentElement.parentElement.children[0].children[0].placeholder,
        'size': e.target.parentElement.parentElement.children[1].children[0].value,
        'vegeterian': e.target.parentElement.parentElement.children[2].children[0].children[0].checked?true:false
      }    
    }, console.log(this.state.editPizza))
    // debugger
    let pizza = this.state.pizzas.find(pizza => pizza.id == parseInt(e.target.id))
    pizza.topping = e.target.parentElement.parentElement.children[0].children[0].value?e.target.parentElement.parentElement.children[0].children[0].value:e.target.parentElement.parentElement.children[0].children[0].placeholder
    pizza.size = e.target.parentElement.parentElement.children[1].children[0].value
    pizza.vegetarian = e.target.parentElement.parentElement.children[2].children[0].children[0].checked?true:false
    e.target.parentElement.parentElement.children[0].children[0].placeholder='Pizza Topping'
  }

  changeVeg = () => {
    this.setState({
      editPizza:{...this.state.editPizza,
        'vegetarian': !this.state.editPizza.vegetarian
      }
    })
  }


  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm editPizza={this.state.editPizza} pizzaSubmit={this.pizzaSubmit} changeVeg={this.changeVeg}/>
        <PizzaList pizzas={this.state.pizzas} editPizza={this.editPizza}/>
      </Fragment>
    );
  }
}

export default App;
