import React from "react";
import { useState } from "react";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import "./AddUser.css";

const AddUser = () => {
    const [uname, setUname] = useState('');
    const [uage, setUage] = useState('');

  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(uname, uage)
    setUage('')
    setUname('')
  };

const unameHandler = (event) =>{
    setUname(event.target.value)
}

const uageHandler = (event) =>{
    setUage(event.target.value)
}

  return (
    <Card className="input">
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" value={uname} onChange={unameHandler} />
        <label htmlFor="age">Age</label>
        <input id="age" type="number" value={uage} onChange={uageHandler} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
