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
        axios.get('https://doubletreeapi.herokuapp.com/user/get_all_actiities')
            .then(response => {
                this.setState({ options: response.data });
                console.log(response.data)
                console.log("test11")
            })
    }
    DeleteUSer(e, ID) {
        const User = {
            id: ID
        }
        axios.post('https://doubletreeapi.herokuapp.com/admin/RemoveActivity', User)
            .then(response => {
                this.setState({ options: response.data.data });
                console.log(response.data.data)
                console.log("test11")
            })
        window.location = `/ManageActivities`
    }



    render() {
        const extra = (
            <a>
                <Icon name='user' />
                16 Friends
            </a>
        )
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
                        <div><br></br><div>

                            <Header as='h2' icon textAlign='center'>
                                <Icon name='hotel' circular />
                                <Header.Content>Activities</Header.Content>
                            </Header>

                        </div>

                            <br></br>

                            {this.state.options.length > 0 && this.state.options.map((item, index) => (

                                <div style={{ display: 'inline-block', marginLeft: '160px', marginBottom: '100px' }} key={index}>
                                    <div >
                                        <Card>
                                            <Image style={{ height: '200px' }} src={item.img} />
                                            <Card.Content>
                                                <Card.Header>Activity Name : {item.ActivityName}</Card.Header>

                                            </Card.Content>
                                            <Card.Content extra>

                                                <a>
                                                    <Icon name='user' />
                                                    Location : {item.Location}
                                                </a>

                                                <br></br>
                                                <a>
                                                    <Icon name='user' />
                                                    Max Participants : {item.Max}
                                                </a>
                                                <br></br>
                                                <a>
                                                    <Icon name='user' />
                                                    Price : {item.Price}
                                                </a>
                                            </Card.Content>
                                        </Card>
                                        <Card.Content extra>
                                            <div className='ui two buttons'>

                                                <Button onClick={e => this.DeleteUSer(e, item._id)} basic color='red'>
                                                    Remove Activity
                                                </Button>
                                            </div>
                                        </Card.Content>



                                    </div>
                                </div>

                            ))
                            }
                        </div>
                    </div>
                </div>
            </body>
        )
    }
}


export default GetallCategories;