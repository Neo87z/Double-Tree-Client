import React, { Component } from 'react';
import axios from 'axios';
import { Card, Icon, Image, Header, Button } from 'semantic-ui-react'
import AddActiviteis from '../ActivitiesComponent/addActivities';
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
        axios.post('http://localhost:8089/reservation/ResByID', User)
            .then(response => {
                this.setState({ options: response.data.data });
                console.log(response.data)
                console.log("test11")
            })
    }

    DeleteReservation(e, ID) {
        const User = {
            id: ID
        }
        axios.post('http://localhost:8089/reservation/RemoveUserReservation', User)
            .then(response => {
                this.setState({ options: response.data.data });
                console.log(response.data.data)
                console.log("test11")
            })
        window.location = `/myReservations`
    }
    UpdateReservation(e, ID) {
        window.location = `/updateReservation/${ID}`
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
                        <div><br></br><div>

                            <Header as='h2' icon textAlign='center'>
                                <Icon name='hotel' circular />
                                <Header.Content>My Reservations</Header.Content>
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
                                            <Card.Content extra>
                                                <div className='ui two buttons'>
                                                    <Button onClick={e => this.UpdateReservation(e, item._id)} basic color='green'>
                                                        Update Reservation
                                                    </Button>
                                                    <Button onClick={e => this.DeleteReservation(e, item._id)} basic color='red'>
                                                        Remove Reservation
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