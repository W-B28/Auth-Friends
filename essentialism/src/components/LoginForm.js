import React, { useState } from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';


import axios from 'axios';
import FriendsList from "./FriendsList";
import { axiosWithAuth } from '../utils/axiosWithAuth';

const FormInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const LoginForm = props => {

  const [credentials, setCredentials] = useState({

    email: '',
    password: ''

  });

// class Login extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       isLoading: false,
//       credentials: {
//         username: '',
//         password: ''
//       }
//     }
//   }

  const handleChange = event => {
          setCredentials( {
              ...credentials,
              [event.target.name]: event.target.value
          })
          // console.log(this.state.credentials)
      }

handleSubmit = event => {
    event.preventDefault();
    this.setState({...this.state, isLoading: true});
    axiosWithAuth().post('/api/login', this.state.credentials)
    .then(res => {
        console.log(res);
        window.localStorage.setItem('token', res.data.payload);
        this.setState({...this.state, isLoading: false});
        this.props.history.push('/protected')
    })
    .catch(err => console.log(err))
}


render(){
  return(
    <div>
      <form onSubmit={this.handleSubmit}>
        <input name="username" onChange={this.handleChange} />
        <input name="password" onChange={this.handleChange} />
        <button>Login</button>
      </form>
      {this.state.isLoading && <div> Logging In</div>}
    </div>

    )
  }
}

export default Login;
