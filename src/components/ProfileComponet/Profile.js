import React, { Component } from 'react';
import axios from 'axios';
import { Card, Icon, Image, Header, Button } from 'semantic-ui-react'
class GetallCategories extends Component {
    constructor(props) {
        super(props);

        this.state = {

            options: [],
            Code: '',
            Model: '',
            Type: '',
            Name: '',
            categories: []

        };
    }


    componentDidMount() {
        console.log("test")
        const User = {
            id: "pawani@gmail.com"
        }
        axios.post('https://doubletreeapi.herokuapp.com/user/get_UserData', User)
            .then(response => {
                this.setState({ options: response.data.data });
                console.log(response.data.data)
                console.log("test11")
            })
    }



    UpdateProfile(e, ID) {
        window.location = `/UpdateProfile/${ID}`
    }
    DeleteUSer(e, ID) {
        const User = {
            id: ID
        }
        axios.post('https://doubletreeapi.herokuapp.com/admin/removeUser', User)
            .then(response => {
                this.setState({ options: response.data.data });
                console.log(response.data.data)
                console.log("test11")
            })
        window.location = `/ViewAlluser`
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
                    <div><br></br><br></br><br></br><br></br><br></br><br></br><div>


                    </div>

                        <br></br>
                        <center>
                            {this.state.options.length > 0 && this.state.options.map((item, index) => (

                                <div style={{ display: 'inline-block', marginBottom: '100px', height: '200px' }} key={index}>
                                    <div>
                                        <Card>
                                            <Image src={item.img} />
                                            <Card.Content>
                                                <Card.Header>Full Name : {item.Full_Name}</Card.Header>
                                                <Card.Meta>
                                                    <span className='date'> Email  : {item.Email}</span>
                                                </Card.Meta>
                                            </Card.Content>
                                            <Card.Content extra>
                                                <a>
                                                    <Icon name='user' />
                                                    Age  : {item.Age}
                                                </a>
                                                <br></br>
                                                <a>
                                                    <Icon name='user' />
                                                    Phone  : {item.Phone}
                                                </a>
                                                <br></br>
                                                <a>
                                                    <Icon name='user' />
                                                    Sex  : {item.Sex}
                                                </a>
                                            </Card.Content>
                                            <Card.Content extra>
                                                <div className='ui two buttons'>

                                                    <Button onClick={e => this.UpdateProfile(e, item.Email)} basic color='green'>
                                                        Update Profile
                                                    </Button>
                                                </div>
                                                <br/>
                                                <div className='ui two buttons'>
                                                    <Button onClick={e => this.DeleteUSer(e, item._id)} basic color='red'>
                                                        Delete Account
                                                    </Button>
                                                </div>
                                            </Card.Content>
                                        </Card>


                                    </div>
                                </div>

                            ))}
                        </center>
                    </div>
                </div>
            </body>

        )
    }
}


export default GetallCategories;