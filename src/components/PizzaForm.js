import React from "react"

const PizzaForm = (props) => {

  return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" name='topping' className="form-control" placeholder="Pizza Topping" onChange={e=>props.change(e)} defaultValue={props.selectedPizza.topping}/>
        </div>
        <div className="col">
          <select defaultValue={props.selectedPizza.size} name='size' onChange={e=>props.change(e)} className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" type="radio" name="Vegetarian" onClick={e=>props.change(e)} checked={props.selectedPizza.vegetarian}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="Not Vegetarian" onClick={e=>props.change(e)} checked={!props.selectedPizza.vegetarian}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={(e)=>props.updatePizza(e)}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
