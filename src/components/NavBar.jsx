import React, { useState } from 'react';
import  '../style/NavBar.css';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { BsCartFill } from 'react-icons/bs';
import {auth} from '../firebase-config';
import {signInWithEmailAndPassword} from 'firebase/auth';
import { useNavigate } from "react-router-dom";
import { MDBContainer,MDBNavbar, MDBNavbarToggler, MDBIcon, MDBNavbarNav,MDBNavbarItem, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBCollapse} from 'mdb-react-ui-kit';

export default function NavBar() {
  const [showBasic, setShowBasic] = useState(false);
  const [loginEmail] = useState("");
  const [loginPassword] = useState("");
  const [user] =useState({});

  let navigate = useNavigate();

  const login = async()=> {
    try{
        const user =  await signInWithEmailAndPassword(auth,loginEmail,loginPassword);
        console.log(user);
        navigate('/');
    }catch(e){
        console.log(e.message);
    }
 }
  return (
    <>
   <MDBNavbar  className='bg-transparent' expand='lg' light >
      <MDBContainer fluid>
        <img className='' src="https://i.postimg.cc/kgD80F9V/IMG-8158-preview-rev-1-removebg-preview-1.png" alt="" style={{width:"120px"}} />

        <MDBNavbarToggler
        className='bg-dark'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            <MDBNavbarItem>
            <NavLink  className='text-black fs-5 nav-link active navList ' to='/'>Home</NavLink>

            </MDBNavbarItem>
            <MDBNavbarItem>
            <NavLink className='text-black fs-5 nav-link active navList ' to='/products'>Products</NavLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
            <NavLink className='text-black fs-5 nav-link active navList ' to='/contact'>Contact Us</NavLink>

            </MDBNavbarItem>
            <MDBNavbarItem>
            <NavLink className='text-black fs-5 nav-link active navList ' to='/faqs'>F.A.Q</NavLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
             <NavLink className='text-black fs-5 nav-link active ' to='/login'><Button className='bg-transparent border-3 me-2 border-bottom border text-black rounded  '> <FaUser/></Button></NavLink>
            <NavLink to='/cart'> <Button className='bg-transparent border-3 me-2 border-bottom border text-black rounded  navList' to><BsCartFill/></Button>  </NavLink>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar> 
     
    </> 
    
  )
}
