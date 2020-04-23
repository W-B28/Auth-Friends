import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';


class AddFriend extends React.Component {
  constructor(){
    super();
    this.state = { friend:
      { name:'',
        age:'',
        email:''
    }
  }
}

submitHandler = e => {
  e.preventDefault();
  axiosWithAuth()
  .post("/api/friends", this.state.friend, {
    headers:
    {
      authorization: window.localStorage.getItem('token')
    }
  })
  .then(res => console.log(res))
  .catch(err => console.log(err))
}

changeHandler = e => {
  console.log(this.state.friend)
  this.setState( {friend: {...this.state.friend, [e.target.name]: e.target.value}})
  console.log(this.state)
}




  render(){
  return(
    <div>
      <form onSubmit={this.submitHandler}>
        <input onChange={this.changeHandler} name="name" placeholder="name" />
        <input onChange={this.changeHandler} name="age" placeholder="age" />
        <input onChange={this.changeHandler} name="email" placeholder="email" />
        <button>Add Friend</button>
      </form>
    </div>
    )
  }
}

export default AddFriend;
