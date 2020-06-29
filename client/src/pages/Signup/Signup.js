import React, { Component } from 'react';
import Login from "../Login";
import "../Signup/style.css";



function Signup() {

  shoot() {
    alert("Great Shot!");
  }



  
    return(

        <div class="card ">
        <div class="card-body">
        
        <h5 class="card-title">Signup to InnerCircle</h5>
        <form>
          <div class="form-group">
            <label for="username"></label>
            <input
              type="usernameInput" class="form-control" id="username"  placeholder="Username" />
          </div>
          
          <div class="form-group">
            <label for="emailInput"></label>
            <input type="email" class="form-control" id="emailInput"  placeholder="Email" />
          </div>

          <div class="form-group">
            <label for="passwordInput"></label>
            <input type="password" class="form-control" id="passwordInput"  placeholder="Password" />
          </div>

          
          <div class="form-group">
            <label for="confirmInput"></label>
            <input type="confirm" class="form-control" id="confirmInput"  placeholder="Confirm Password" />
        
          </div>

          <button type="loginBttn" class="btn btn-primary btn-lg btn-block">
            SIGN UP
          </button>
        </form>
        <p class="account">Already have an account?<a href="#" onClick={this.shoot}>Login </a>.</p>
      </div>
      </div>


    )

}

export default Signup;