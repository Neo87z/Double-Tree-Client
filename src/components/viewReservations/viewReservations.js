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
            User_Name: "User"
        }
        try {
            axios.post('http://localhost:8089/reservation/get_all_Reservations_byUserID', User)
                .then(response => {
                    this.setState({ options: response.data.data });
                    this.setState({ size: response.data.data[0].Room_ID });
                    this.setState({ Ammount: response.data.data[0].To_Date });
                    this.setState({ Code: response.data.data[0].From_Date });
                    console.log(response.data)
                    console.log("test11")
                })

        } catch {
            console.log("Fa8illllllllllllll")

        }

    }

    DeclineResevation(e, ID, Status, Price, From_Date, To_Date) {
        const Reservation = {
            id: ID,
            User_Name: "User",
            Room_ID: this.state.size,
            From_Date: From_Date,
            To_Date: To_Date,
            Price: Price,
            Status: "Decline"
        };
        axios.post('http://localhost:8089/reservation/RemoveReservation', Reservation)
            .then(response => {
                this.setState({ options: response.data.data });
                console.log(response.data.data)
                console.log("test11")
            })
        window.location = `/viewReservation`
    }
    AcceptReservation(e, ID, Status, Price, From_Date, To_Date) {
        const Reservation = {
            id: ID,
            User_Name: "User",
            Room_ID: this.state.size,
            From_Date: From_Date,
            To_Date: To_Date,
            Price: Price,
            Status: "Accept"
        };
        axios.post('http://localhost:8089/reservation/RemoveReservation', Reservation)
            .then(response => {
                this.setState({ options: response.data.data });
                console.log(response.data.data)
                console.log("test11")
            })
        window.location = `/viewReservation`
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
                                <Header.Content>Reservations</Header.Content>
                            </Header>

                        </div>

                            <br></br>

                            {this.state.options.length > 0 && this.state.options.map((item, index) => (

                                <div style={{ display: 'inline-block', marginLeft: '100px', marginRight: '40px', marginBottom: '100px' }} key={index}>
                                    <div >
                                        <Card>
                                            <Image src='https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg?width=660&height=373&fit=crop&format=pjpg&auto=webp' />
                                            <Card.Content>
                                                <Card.Header>Reservation Status : {item.Status}</Card.Header>
                                                <Card.Meta>
                                                    <span className='date'> Price : {item.Price}</span>
                                                </Card.Meta>
                                            </Card.Content>
                                            <Card.Content extra>
                                                <a>
                                                    <Icon name='remove from calendar' />
                                                    From Date : {item.From_Date}
                                                </a>
                                                <br></br>
                                                <a>
                                                    <Icon name='remove from calendar' />
                                                    To Date : {item.To_Date}
                                                </a>
                                                <br></br>

                                            </Card.Content>
                                            <center><Button.Group>
                                                <Button onClick={e => this.AcceptReservation(e, item._id, item.Status, item.Price, item.From_Date, item.To_Date)} basic color='red'>
                                                    Accept 
                                                </Button>
                                                <Button onClick={e => this.DeclineResevation(e, item._id, item.Status, item.Price, item.From_Date, item.To_Date)} basic color='red'>
                                                    Decline 
                                                </Button>
                                            </Button.Group></center>
                                            <br></br>
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