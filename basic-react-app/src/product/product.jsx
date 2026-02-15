import Button from './button'
import './product.css'

function Product({title,price}){
    let options = ["durable","cost-effective","reusable"];
    let style = {backgroundColor : "pink" };
    let specificbgColor =  {backgroundColor : (price > 30000) ? "white" : "" , color:  (price > 30000) ?  "black" : ""};
    return (
        <div className="product" style={specificbgColor}> 
        <h2>{title}</h2>
        <p>Price: {price}</p>
        <p>{options.map((option)=>
            <li>{option}</li>
              )}</p>
        {(price > 30000) ? <p>Discount of 5%</p> : null }    
        <Button/>
        </div>
    )
}

export default Product ;