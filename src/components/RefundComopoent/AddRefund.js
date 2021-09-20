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
            Room: this.state.Full_Name,
            PaymentDate: this.state.Email,
            Meesage: this.state.Password,

        };
        console.log(User);
        axios.post('http://localhost:8089/user/AddRefund', User)
            .then(res => {
                if (res.data.Status == "Fail") {

                    toast.show({ title: 'Manager Creation Failed. Manager Already Exists', position: 'topcenter', type: 'info' })
                } else {
                    window.location = `/AddRefund`
                }
            });


    }

    render() {
        return (
            <body>
                <div class="ui visible sidebar inverted vertical menu">
                    <a class="item">
                        <Image style={{ height: '200px' }} src="https://newsroom.hilton.com/assets/DBTR/images/logos/DoubleTree-Logo-White_HR.png" />

                    </a>
                    <a class="item">
                        Menu
                        <a class="item" href="/room">
                            Rooms
                        </a>
                        <a class="item" href="/reserve">
                            Make Reservations
                        </a>
                        <a class="item" href="/myReservations">
                            My Reservations
                        </a>
                        <a class="item" href="/ViewActivites">
                            View Activities
                        </a>
                        <a class="item" href="/AddRefund">
                            Refunds
                        </a>
                        <a class="item" href="/AddFeedBack">
                            Contact
                        </a>
                    </a>
                    <a class="item" href="/profile">
                        Profile
                    </a>
                    <a class="item" href="/login" >
                        Logout
                    </a>
                    <a class="item" href="/viewRooms">
                        Switch To Admin
                    </a>
                </div>
                <div class="pusher">
                    <div className="container">
                        <br></br>


                        <Header as='h2' icon textAlign='center'>
                            <Icon name='user' circular />
                            <Header.Content>Make Refund Request</Header.Content>
                        </Header>


                        <br></br>

                        <form onSubmit={this.onSubmit}>
                            <div className="mb-3">
                                <label>Room Name: </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={this.state.Full_Name}
                                    onChange={this.onChangeFullName}

                                />
                            </div>
                            <div className="form-group">
                                <label>Payment Date: </label>
                                <input
                                    type="date"
                                    className="form-control"
                                    value={this.state.Email}
                                    onChange={this.onChangeEmail}

                                />
                            </div>
                            <div className="form-group">
                                <label>Meesage: </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={this.state.Password}
                                    onChange={this.onChangePassword}

                                />
                            </div>



                            <br></br>
                            <center><Button.Group>
                                <Button href="/AddRefund" type="reset">Reset</Button>
                                <Button.Or />
                                <Button type="submit" positive>Send Request</Button>
                            </Button.Group></center>
                        </form>


                    </div>
                </div>
            </body>
        )
    }
}

export default AddVehicle;