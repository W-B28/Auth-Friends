//This component is a form used for creating a new pair of login credentials for a user that does not have an account yet
//form should have validation visible to user

//Form inputs should include:
//username
//password
//submit button

//This component is a form used for creating new login credentials for
// a user who does not yet have an account.
//Form should have validation visible to user

//Form inputs should include:
//username
//password
//submit button

import React, { useState } from 'react';
import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const RegistrationForm = props => {


    console.log(props)

    const [credentials, setCredentials] = useState({
        username: '',
        password: '',

    });

    const handleChanges = event => {
        setCredentials( {
              ...credentials,
                [event.target.name]: event.target.value
              } )
          }

    const registerForApp = event => {
      event.preventDefault();
      axiosWithAuth()
        .post('https://bw-essentialism-1.herokuapp.com/api/auth/register', credentials)
        .then(res => {
          props.history.push("/login");
          })
        .catch(err => console.log(err));
    };

  return (
    <div>
     <h5>Register New User</h5>
        <form onSubmit={submitForm}>
            <div className="namestuff">
                <label htmlFor="username"> Username: </label>
                <div className="inputForm">
                    <input id='email' type='email' name='email' onChange={handleChanges} placeholder=' Use Your E-Mail for Username' value={credentials.username} required />
                </div>
            </div>

            <div className="namestuff">
                <label htmlFor="Password"> Password: </label>
                <div className="inputForm">
                    <input id='Password' name='password' type='password' onChange={handleChanges} placeholder=' Password' value={credentials.password} required />
                </div>
            </div>

            // <div className="namestuff">
            //     <label htmlFor="passwordConfirm"> Confirm  Password: </label>
            //     <div className="inputForm">
            //         <input id='passwordConfirm' name='passwordConfirm' type='password' onChange={handleChanges} placeholder=' Confirm Password' value={user.passwordConfirm} required />
            //     </div>
            // </div>

        <div className='buttonL'>
          <button type='submit'> Register </button>
        </div>
      </form>
    </div>
  );
}


export default RegistrationForm;
