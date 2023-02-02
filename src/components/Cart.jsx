import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import './Reducer';
import { NavLink } from "react-router-dom";
import '../style/Cart.css'
// import {
//   MDBBtn,
//   MDBCard,
//   MDBCardBody,
//   MDBCardImage,
//   MDBCol,
//   MDBContainer,
//   MDBIcon,
//   MDBInput,
//   MDBRow,
//   MDBTypography,
//   } from "mdb-react-ui-kit";
export default function Cart() {
 const cart = useSelector((state) => state);
//  console.log(cart);
 const dispatch = useDispatch();
 const addition = (acc, currentvalue) => {
return acc + currentvalue.price * currentvalue.quantity;
      };
  const total = cart.reduce(addition, 0);
  return (
    <div>
       <div className="wrapper">
        <h1>Shopping Cart</h1>
        <div className="project">
          <div className="shop">
           
          {cart.map((product,index) => { 
                return (
                  <div className="cartcad" key={index}>   
                        <div className="box">
              <img src={product.backimg}  />
              <div className="content">
                <h3>{product.name}</h3>
                <h5>size:{product.size}</h5>
                <p>Price: {product.price}₪</p>
                <p className="unit">Quantity: {product.quantity}</p>
                {/* <input name defaultValue={1} /> */}
                <p className="btn-area"><i aria-hidden="true" className="fa fa-trash" />
                <button  onClick={() => dispatch({ type: "REMOVE", payload: product })}>remove</button></p>
              </div>
            </div>

              <div>
              </div>
              
            </div>
          );
        })}
      
          </div>
          <div className="right-bar">
          
            <hr />
            <p>{total > 0  ?  <h4>Total:{total}        
             <NavLink to={'/checkout'} class="btn btn-outline-dark">
                    <button className="viewButton btn btn-outline-success">Check out</button>
                </NavLink> </h4> : <h2 className='text-center'>cart is empty </h2> }</p>
          </div>
        </div>
      </div>
 </div>
            
 
      )
}
