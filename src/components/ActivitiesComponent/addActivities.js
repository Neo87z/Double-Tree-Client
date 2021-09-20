import React, { Component } from 'react';
import axios from 'axios';
import { Card, Icon, Image, Header, Button } from 'semantic-ui-react'
import { Multiselect } from 'multiselect-react-dropdown';
import { toast } from 'toast-notification-alert';
class AddVehicle extends Component {
    constructor(props) {
        super(props);
        var imageName = require('../../images/doubletree.png')
        this.onChangeFullName = this.onChangeFullName.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChnageAge = this.onChnageAge.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeSex = this.onChangeSex.bind(this);
        this.onSubmit = this.onSubmit.bind(this);



        this.state = {

            options: [],
            Full_Name: '',
            Email: '',
            Password: '',
            Age: '',
            Phone: '',
            Sex: '',
            categories: []

        };
    }

    onChangeFullName(e) {
        this.setState({
            Full_Name: e.target.value
        })
    }

    onChangePassword(e) {
        this.setState({
            Password: e.target.value
        })
    }

    onChangeEmail(e) {
        this.setState({
            Email: e.target.value
        })
    }

    onChnageAge(e) {
        this.setState({
            Age: e.target.value
        })
    }
    onChangePhone(e) {
        this.setState({
            Phone: e.target.value
        })
    }

    onChangeSex(e) {
        this.setState({
            Sex: e.target.value
        })
    }






    onSelect(selectedList, selectedItem) {
        this.setState({
            categories: selectedList
        })


    }

    onSubmit(e) {
        e.preventDefault();
        const User = {
            ActivityName: this.state.Full_Name,
            Location: this.state.Email,
            Price: this.state.Password,
            Max: this.state.Age,
        };
        console.log(User);
        axios.post('http://localhost:8089/admin/add_activity', User)
            .then(res => {
                if (res.data.Status == "Fail") {

                    toast.show({ title: 'Manager Creation Failed. Manager Already Exists', position: 'topcenter', type: 'info' })
                } else {
                    window.location = `/addActivites`
                }
            });


    }

    componentDidMount() {
        console.log("test")
        axios.get('http://localhost:8089/category/get_all_categories')
            .then(response => {
                this.setState({ options: response.data });
                console.log(response.data)
                console.log("test11")
            })
    }
    render() {
        return (
            <body>
                <div class="ui visible sidebar inverted vertical menu">
                    <a class="item">
                        <Image style={{ height: '200px' }} src="https://newsroom.hilton.com/assets/DBTR/images/logos/DoubleTree-Logo-White_HR.png" />

                    </a>
                    <a class="item">
                        Admin Menu
                        <a class="item" href="/viewRooms">
                            View All Rooms
                        </a>
                        <a class="item" href="/addRoom">
                            Add Rooms
                        </a>
                        <a class="item" href="/AddManager">
                            Add Manager
                        </a>
                        <a class="item" href="/ViewAlluser">
                            View Users
                        </a>
                        <a class="item" href="/viewReservation">
                            View Reservations
                        </a>
                        <a class="item" href="/addActivites">
                            Add Activities
                        </a>
                        <a class="item" href="/ManageActivities">
                            Manage Activities
                        </a>
                        <a class="item" href="/ViewRefund">
                            View Refunds
                        </a>
                        <a class="item" href="/ViewPayment">
                            View Payments
                        </a>

                    </a>
                    <a class="item" href="/ViewFeedBack">
                        Feedbacks
                    </a>
                    <a class="item" href="/login" >
                        Logout
                    </a>
                    <a class="item" href="/room">
                        Switch To User
                    </a>
                </div>
                <div class="pusher">
                    <div className="container">
                        <br></br>


                        <Header as='h2' icon textAlign='center'>
                            <Icon name='user' circular />
                            <Header.Content>Add Activities</Header.Content>
                        </Header>


                        <br></br>

                        <form onSubmit={this.onSubmit}>
                            <div className="mb-3">
                                <label>Activity Name: </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={this.state.Full_Name}
                                    onChange={this.onChangeFullName}

                                />
                            </div>
                            <div className="form-group">
                                <label>Location: </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={this.state.Email}
                                    onChange={this.onChangeEmail}

                                />
                            </div>
                            <div className="form-group">
                                <label>Price: </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={this.state.Password}
                                    onChange={this.onChangePassword}

                                />
                            </div>

                            <div className="form-group">
                                <label>Max Occupants: </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={this.state.Age}
                                    onChange={this.onChnageAge}

                                />
                            </div>


                            <br></br>
                            <center><Button.Group>
                                <Button href="/addActivites" type="reset">Reset</Button>
                                <Button.Or />
                                <Button type="submit" positive>Add Activity</Button>
                            </Button.Group></center>
                        </form>


                    </div>
                </div>
            </body>
        )
    }
}

export default AddVehicle;
