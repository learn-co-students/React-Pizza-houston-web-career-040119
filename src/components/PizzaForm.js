import React from "react"

const PizzaForm = (props) => {
  return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" className="form-control" placeholder={props.editPizza.size?props.editPizza.topping:"Pizza Topping"} value={
                //Pizza Topping Should Go Here
                null
              }/>
        </div>
        <div className="col">
          <select className="form-control">
            <option value={props.editPizza.size?props.editPizza.size:null} selected>{props.editPizza.size?props.editPizza.size:null}</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Vegetarian" checked={props.editPizza.vegetarian==true?true:false} onChange={props.changeVeg}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Not Vegetarian" checked={props.editPizza.vegetarian==false?true:false} onChange={props.changeVeg}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" id={props.editPizza.id} onClick={(e) => props.pizzaSubmit(e)}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
