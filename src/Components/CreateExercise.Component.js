import React, { Component } from "react";

export default class CreateExercise extends Component{

    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeDuration= this.onChangeDuration.bind(this);
        this.onSubmit= this.onSubmit.bind(this);

        this.state = {
            username: '',
            description: '',
            duration: 0,
            date: new Date(),
            users: []
        }
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }
    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }
    onChangeDuration(e) {
        this.setState({
            duration: e.target.value
        });
    }
    onChangeDate(Date) {
        this.setState({
            username:Date
        });
    }
    onSubmit(e) {
        e.preventDefault();

        const exercise = {
            username: this.state.username,
            description: this.state.username,
            date: this.state.date,
            duration: this.state.duration
        }

        console.log(exercise);
        window.location = '/'
    }
    render() {
        return (
            <div>
                <p>We are in CreateExercise!!</p>
            </div>
        )}
}