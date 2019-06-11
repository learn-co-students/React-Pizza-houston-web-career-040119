import React from "react"

const Pizza = (props) => {
  return(
    <tr>
      <td>{props.pizza.topping}</td>
      <td>{props.pizza.size}</td>
      <td>{props.pizza.vegetarian ? "Yes" : "No" }</td>
      <td id={props.id}><button type="button" className="btn btn-primary" onClick={e=>props.editPizza(e)} >Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
