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
        axios.get('http://localhost:8089/rooms/get_all_rooms')
            .then(response => {
                this.setState({ options: response.data });
                console.log(response.data)
                console.log("test1122")
            })
    }

    UpdateRoom(e, ID) {
        window.location = `/ViewROomByID/${ID}`
    }

    DeleteUSer(e, ID) {
        const User = {
            id: ID
        }
        axios.post('http://localhost:8089/rooms/RemoveROOm', User)
            .then(response => {
                this.setState({ options: response.data.data });
                console.log(response.data.data)
                console.log("test11")
            })
        window.location = `/viewRooms`
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
                    <a class="item" href="/ChangeHotel">
                        Settings
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
                        <div><br></br><div>

                            <Header as='h2' icon textAlign='center'>
                                <Icon name='hotel' circular />
                                <Header.Content>Hotel Rooms</Header.Content>
                            </Header>

                        </div>

                            <br></br>

                            {this.state.options.length > 0 && this.state.options.map((item, index) => (

                                <div style={{ display: 'inline-block', marginLeft: '100px', marginRight: '40px', marginBottom: '100px' }} key={index}>
                                    <div>
                                        <Card>
                                            <Image style={{ height: '200px' }} src={item.img} />
                                            <Card.Content>
                                                <Card.Header>Room Name : {item.Room_Name}</Card.Header>
                                                <Card.Meta>
                                                    <span className='date'> Room Type : {item.Room_Type}</span>
                                                </Card.Meta>
                                            </Card.Content>
                                            <Card.Content extra>
                                                <a>
                                                    <Icon name='user' />
                                                    Beds : {item.Beds}
                                                </a>
                                                <br></br>
                                                <a>
                                                    <Icon name='user' />
                                                    Floor : {item.Floor}
                                                </a>
                                                <br></br>
                                                <a>
                                                    <Icon name='user' />
                                                    Price : {item.Price}
                                                </a>
                                            </Card.Content>
                                            <Card.Content extra>
                                                <div className='ui two buttons'>
                                                    <Button onClick={e => this.UpdateRoom(e, item.Room_Name)} basic color='green'>
                                                        Update Room
                                                    </Button>
                                                    <Button onClick={e => this.DeleteUSer(e, item._id)} basic color='red'>
                                                        Remove Room
                                                    </Button>
                                                </div>
                                            </Card.Content>
                                        </Card>


                                    </div>
                                </div>

                            ))}
                        </div>
                    </div>
                </div>
            </body>
        )
    }
}


export default GetallCategories;