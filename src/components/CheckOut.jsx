import React ,{useState}from 'react'
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import '../style/CheckOut.css'
import { useNavigate } from "react-router-dom";
import Alert from 'react-bootstrap/Alert';

export default function CheckOut() {
  const [number,setNumber]=useState("");
  const [name,setName]=useState("");
  const [expiry,setExpiry]=useState("");
  const [cvc,setCvc]=useState("");
  const [focus,setFocus]=useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // ...
}
  const successPayment = ()=>{
    if (!number || !name || !expiry || !cvc) {
      alert("pill all the fileds")
    }else{
      setTimeout(() => {
        alert("Sucsess Payment");
        navigate("/");
        window.location.reload(false);
      }, "2000");

    }

  }
  return (
    <div className='text-center all mt-2'>
    <Cards number={number}
    name={name}
    expiry={expiry}
    cvc={cvc}
    focused={focus}
    />
    <form onSubmit={handleSubmit}>
     <input className='mb-3 mt-2'
        type="tel" 
        name='number'
        required
        placeholder='card number'
        value={number}
        onChange={e => setNumber(e.target.value)}
        onFocus={e => setFocus(e.target.name)}
        /><br/>
       <input className='mb-3'
       type="text" 
        name='name'
        placeholder='name'
        required
        value={name}
        onChange={e => setName(e.target.value)}
        onFocus={e => setFocus(e.target.name)}
        /><br/>
        <input  className='mb-3'
        type="text" 
        name='expiry'
        required
        placeholder='MM/YY Expiry'
        value={expiry}
        onChange={e => setExpiry(e.target.value)}
        onFocus={e => setFocus(e.target.name)}
        /><br/>
        <input className='mb-3'
        type="tel" 
        name='CVC'
        placeholder='CVC'
        required
        value={cvc}
        onChange={e => setCvc(e.target.value)}
        onFocus={e => setFocus(e.target.name)} 
        /><br/>
        <input onClick={()=>successPayment()} type="submit"  value="click" />
    </form>
    </div>
  )
}
