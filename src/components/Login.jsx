import React from "react";
import { useState } from "react";
import "../style/Login.css";
import {createUserWithEmailAndPassword,onAuthStateChanged,signOut,signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../firebase-config';
import { useNavigate } from "react-router-dom";
// import { RiLockPasswordFill } from 'react-icons/ri';
export default function Login() {
    let navigate = useNavigate();
 const [registerEmail,setRegisterEmail] = useState("");
 const [registerPassword,setRegisterPassword] = useState("");
 const [loginEmail,setLoginEmail] = useState("");
 const [loginPassword,setLoginPassword] = useState("");
const [user,setUser] =useState({});

onAuthStateChanged(auth,(currentUser)=>{
    setUser(currentUser);
})
// Reigster Func
 const register = async()=> {
    try{
        const user =  await createUserWithEmailAndPassword(auth,registerEmail,registerPassword);
        navigate('/');
        console.log(user);
    }catch(e){
        console.log(e.message);
    }

 };
 // Login Func
 const login = async()=> {
    try{
        const user =  await signInWithEmailAndPassword(auth,loginEmail,loginPassword);
        console.log(user);
        navigate('/');
    }catch(e){
        console.log(e.message);
    }
 }
// LogOut Func
 const logout = async ()=> {
    await signOut(auth);
 }
  return (
    <div>
      <div className="section">
        <div className="container">
          <div className="row full-height justify-content-center">
            <div className="col-12 text-center align-self-center py-5">
              <div className="section pb-5 pt-5 pt-sm-2 text-center">
                <h6 className="mb-0 pb-3">
                  <span>Log In </span>
                  <span>Sign Up</span>
                </h6>
                <input
                  className="checkbox"
                  type="checkbox"
                  id="reg-log"
                  name="reg-log"
                />
                <label for="reg-log"></label>
                <div className="card-3d-wrap mx-auto">
                  <div className="card-3d-wrapper">
                    <div className="card-front">
                      <div className="center-wrap">
                        <div className="section text-center">
                          <h4 className="mb-4 pb-3">Log In</h4>
                          <div className="form-group">
                            <input
                              type="email"
                              name="logemail"
                              className="form-style"
                              placeholder="Your Email"
                              onChange={(e)=>{setLoginEmail(e.target.value)}}

                              id="logemail"
                              autocomplete="off"
                            />
                            <i className="input-icon uil uil-at"></i>
                          </div>
                          <div className="form-group mt-2">
                            <input
                              type="password"
                              name="logpass"
                              className="form-style"
                              placeholder="Your Password"
                              onChange={(e)=>{setLoginPassword(e.target.value)}}

                              id="logpass"
                              autocomplete="off"
                            />
                            <i className="input-icon uil uil-lock-alt"></i>
                          </div>
                          <button className="btn border border-bottom border-2 border-dark mt-2" onClick={login}>Login</button>
                          <p>User logged in:{user?.email}  </p><br/>
                          {/* <p className="border border-danger">{localStorage?.getItem("name")} {localStorage?.getItem("email")}</p> */}
                          <button className="bg-danger btn border border-bottom border-2 border-dark" onClick={logout}>Sign out</button>
                        </div>
                      </div>
                    </div>
                    <div className="card-back">
                      <div className="center-wrap">
                        <div className="section text-center">
                          <h4 className="mb-4 pb-3">Sign Up</h4>
                          <div className="form-group mt-2">
                            <input
                              type="email"
                            //   name="logemail"
                              className="form-style"
                              placeholder="Your Email"
                              onChange={(e)=>{setRegisterEmail(e.target.value)}}
                            //   id="logemail"
                              autocomplete="off"
                            />
                            <i className="input-icon uil uil-at"></i>
                          </div>
                          <div className="form-group mt-2">
                         
                            <input
                              type="password"
                            //   name="logpass"
                              className="form-style"
                              placeholder="Your Password"
                              onChange={(e)=>{setRegisterPassword(e.target.value)}}

                            //   id="logpass"
                              autocomplete="off"
                            />
                            <p>at least 6 numbers</p>
                            <i className="input-icon uil uil-lock-alt "> </i>
                          </div>
                          {/* <button className="btn border border-bottom border-2 border-dark" onClick={signInWithGoogle}>SIGN WITH Google</button><br/> */}
                          
                          <button className="btn border border-bottom border-2 border-dark" onClick={register}>Sign Up</button>
                          {/* <a  href="#" className="btn mt-4">
                            submit
                          </a> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
