import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {

  constructor() {
    super();
    this.state = {
      data : [],
      formInfo: {id:null,topping: "", size: "", vegetarian: null}
    };
  }

  getPizzas = () => {
    fetch('http://localhost:3000/pizzas')
    .then(res=>res.json())
    .then( data => {
      this.setState( { data: data } )
    } );
  }

  handlePizzaClick = (pizza) => {
    this.setState({
      formInfo: {id:pizza.id,topping:pizza.topping,size:pizza.size,vegetarian:pizza.vegetarian}
    });
  }

  handleInputChange = (event) => {
    this.setState(
      {
        formInfo: {...this.state.formInfo, topping: event.target.value}
      }
    )
  }

  handleVegetarianClick = (event) => {
    this.setState({
      formInfo: {...this.state.formInfo, vegetarian: true}
    })
  }

  handleNotVegetarianClick = (event) => {
    this.setState({
      formInfo: {...this.state.formInfo, vegetarian: false}
    })
  }


  handleSelectChange = (event) => {
    this.setState(
      {
        formInfo: {...this.state.formInfo, size: event.target.value}
      }
    )
  }

  handleSubmit = () => {
    fetch(`http://localhost:3000/pizzas/${this.state.formInfo.id}`,
      { method: "PATCH",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify( {topping:this.state.formInfo.topping,
            size:this.state.formInfo.size,
            vegetarian: this.state.formInfo.vegetarian} ) }
    ).then(
      () => {
        var data = this.state.data;
        var pizza = data.find( pizza => {return pizza.id === this.state.formInfo.id} );
        pizza.topping = this.state.formInfo.topping;
        pizza.size = this.state.formInfo.size;
        pizza.vegetarian = this.state.formInfo.vegetarian;
        this.setState( { data: data } );

        this.getPizzas();
        this.setState({formInfo: {id:null,topping: "", size: "", vegetarian: null} });
      }
    )
  }

  componentDidMount() {
    this.getPizzas();
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm handleSubmit={this.handleSubmit} handleNotVegetarianClick={this.handleNotVegetarianClick} handleVegetarianClick={this.handleVegetarianClick} handleSelectChange={this.handleSelectChange} handleInputChange={this.handleInputChange} formInfo={this.state.formInfo}/>
        <PizzaList handlePizzaClick={this.handlePizzaClick} data={this.state.data} />
      </Fragment>
    );
  }
}

export default App;
