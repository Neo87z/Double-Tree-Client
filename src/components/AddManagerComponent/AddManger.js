import React, { Component } from 'react';
import axios from 'axios';
import { Card, Icon, Image, Header, Button } from 'semantic-ui-react'
import { Multiselect } from 'multiselect-react-dropdown';
import { toast } from 'toast-notification-alert';
class AddVehicle extends Component {
    constructor(props) {
        super(props);

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
            Manager_Name: this.state.Full_Name,
            LoginID: this.state.Email,
            Password: this.state.Password,
            Age: this.state.Age,
            Phone: this.state.Phone,
            Sex: this.state.Sex,
        };
        console.log(User);
        axios.post('https://doubletreeapi.herokuapp.com/admin/add_manager', User)
            .then(res => {
                if (res.data.Status == "Fail") {

                    toast.show({ title: 'Manager Creation Failed. Manager Already Exists', position: 'topcenter', type: 'info' })
                } else {
                    window.location = `/ManageActivities`
                }
            });


    }

    componentDidMount() {
        console.log("test")
        axios.get('https://doubletreeapi.herokuapp.com/category/get_all_categories')
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
                            <Header.Content>Add Manager</Header.Content>
                        </Header>


                        <br></br>

                        <form onSubmit={this.onSubmit}>
                            <div className="mb-3">
                                <label>Manager Name: </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={this.state.Full_Name}
                                    onChange={this.onChangeFullName}

                                />
                            </div>
                            <div className="form-group">
                                <label>LoginID: </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={this.state.Email}
                                    onChange={this.onChangeEmail}

                                />
                            </div>
                            <div className="form-group">
                                <label>Password: </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={this.state.Password}
                                    onChange={this.onChangePassword}

                                />
                            </div>

                            <div className="form-group">
                                <label>Age: </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={this.state.Age}
                                    onChange={this.onChnageAge}

                                />
                            </div>
                            <div className="form-group">
                                <label>Phone: </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={this.state.Phone}
                                    onChange={this.onChangePhone}

                                />
                            </div>
                            <div className="form-group">
                                <label>Sex: </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={this.state.Sex}
                                    onChange={this.onChangeSex}

                                />
                            </div>



                            <br></br>
                            <center><Button.Group>
                                <Button type="reset">Reset</Button>
                                <Button.Or />
                                <Button type="submit" positive>Add Manager</Button>
                            </Button.Group></center>
                        </form>


                    </div>
                </div>
            </body>
        )
    }
}

export default AddVehicle;