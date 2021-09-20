import React, { Component } from 'react';
import axios from 'axios';
import { Multiselect } from 'multiselect-react-dropdown';
import { Card, Icon, Image, Header, Button } from 'semantic-ui-react'
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
            Full_Name: this.state.Full_Name,
            Email: this.state.Email,
            Password: this.state.Password,
            Age: this.state.Age,
            Phone: this.state.Phone,
            Sex: this.state.Sex,
        };
        console.log(User);
        axios.post('http://localhost:8089/user/updateUser', User)
            .then(res => {
                setTimeout(() => {
                    console.log('Hello, World!')
                  }, 30000);
                toast.show({title: 'Profile Updated', position: 'topcenter', type: 'info'})
                window.location = `/profile`
            });

    }

    componentDidMount() {
        console.log("test")

        const User = {
            id: this.props.match.params.id
        }
        axios.post('http://localhost:8089/user/get_UserData', User)
            .then(response => {
                this.setState({ Full_Name: response.data.data[0].Full_Name });
                this.setState({ Email: response.data.data[0].Email });
                this.setState({ Age: response.data.data[0].Age });
                this.setState({ Phone: response.data.data[0].Phone});
                this.setState({ Sex: response.data.data[0].Sex});
                this.setState({ Password: response.data.data[0].Password});

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
                    <Icon name='exchange' circular />
                    <Header.Content>Update Profile</Header.Content>
                </Header>
                <br></br><br></br> <br></br><br></br>
                <form onSubmit={this.onSubmit}>
                    <div className="mb-3">
                        <label>Full Name: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.Full_Name}
                            onChange={this.onChangeFullName}

                        />
                    </div>
                    <div className="form-group">
                        <label>Email: </label>
                        <input 
                        disabled
                            type="text"
                            className="form-control"
                            value={this.state.Email}
                            onChange={this.onChangeEmail}

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
                     
                        <Button  type="submit" positive>Update Profile</Button>
                    </Button.Group></center> 
                </form>


            </div>
            </div>
            </body>
        )
    }
}

export default AddVehicle;