import React from 'react';
import UserList from './components/UserList';
import UserAddForm from './components/UserAddForm';
import './App.css';
import PostList from "./components/PostList";
import validator from "validator";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      background: 'white',
      color: 'black',
      users: [],
      toggleUsers: true,
      togglePosts: false
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        data = data.filter(user => user.id < 4);
        data.forEach(user => {
          user.isGoldClient = false;
        });
        this.setState({users: data});
      })
  }

  changeColor(event) {
    this.setState({background: event.target.value});
  }
  changeTextColor(event) {
    this.setState({color: event.target.value});
  }
  getMaxId(users) {
    let maxId = 0;

    users.forEach(user => {
      if (user.id > maxId) {
        maxId = user.id;
      }
    });

    return maxId;
  }

  submitAddForm(event, name, email, isGoldClient, salary, img, color) {
    event.preventDefault();

    if (validator.isEmpty(name)) {
      return alert('Numele nu poate fi gol')
    }
    if (!validator.isEmail(email)){
      return alert('Introdu o adresa valida de email')
    }
    this.setState(prevState => {
      return {
        users: [
          ...prevState.users,
          {
            id: this.getMaxId(prevState.users) + 1,
            name,
            email,
            isGoldClient,
            salary,
            img,
          }
        ]
      }
    });
  }
  deleteUser = (id) =>{
    const filteredUsers = this.state.users.filter(function(user) {
      return user.id !== id
    })
    this.setState({users: filteredUsers})
  }



  render() {
    return(

      <div style={{background: this.state.background, color: this.state.color}}>
        <h3 className="d-flex justify-content-center mt-4">Admin panel - Proiectul 1</h3>
        <UserAddForm submitAddForm={(event, name, email, isGoldClient, salary, img) => this.submitAddForm(event, name, email, isGoldClient, salary, img)}/>


        <button className="btn btn-outline-dark mt-4" onClick={event => this.setState({toggleUsers: !this.state.toggleUsers})}>Afiseaza useri</button>
        {this.state.toggleUsers && <UserList users={this.state.users} deleteUser={this.deleteUser}/>}


        <button className="btn btn-outline-dark mt-4 mx-3" onClick={event => this.setState({togglePosts: !this.state.togglePosts})}>Afiseaza postari</button>

        {this.state.togglePosts &&  <PostList/>}


        <div className="d-flex mt-3">
          <h6>Schimba culoarea background-ului</h6>
          <input className="mx-3" type="color" onChange={(event) => this.changeColor(event)}/>
        </div>

        <div className="d-flex mt-3">
          <h6>Schimba culoarea intregului text</h6>
          <input className="mx-4" type="color" onChange={(event) => this.changeTextColor(event)}/>
        </div>

      </div>
    );
  }
}

export default App;
