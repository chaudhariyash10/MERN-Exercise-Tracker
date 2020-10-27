import React from 'react';
import {BrowserRouter as Router, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./Components/NavBar.Component";
import ExercisesList from "./Components/ExerciseList.Component";
import EditExercise from "./Components/EditExercise.Component";
import CreateExercise from "./Components/CreateExercise.Component";
import CreateUser from "./Components/CreateUser.Component";

function App() {
  return (
    <Router>
      <div className="container">
        <NavBar />
        <br />
        <Route path="/" exact component={ExercisesList} />
        <Route path="/edit/:id" component={EditExercise} />
        <Route path="/create" component={CreateExercise} />
        <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
} 

export default App;
