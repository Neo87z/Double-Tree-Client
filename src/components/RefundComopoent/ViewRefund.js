import React, { Component } from 'react';
import axios from 'axios';
import { Card, Icon, Image, Header } from 'semantic-ui-react'

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
    axios.get('https://doubletreeapi.herokuapp.com/admin/GetallRefund')
      .then(response => {
        this.setState({ options: response.data });
        console.log(response.data)
        console.log("test11")
      })
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
                <Header.Content>Refunds</Header.Content>
              </Header>

            </div>

              <br></br>

              {this.state.options.length > 0 && this.state.options.map((item, index) => (

                <div style={{ display: 'inline-block', marginLeft: '100px', marginRight: '40px', marginBottom: '100px' }} key={index}>
                  <div >
                    <Card>
                      <Image style={{ height: '200px' }} src={item.img} />
                      <Card.Content>
                        <Card.Header>Room Name : {item.Room}</Card.Header>

                      </Card.Content>
                      <Card.Content extra>

                        <a>
                          <Icon name='user' />
                          Payment Date : {item.PaymentDate}
                        </a>

                        <br></br>
                        <a>
                          <Icon name='user' />
                          Meesage : {item.Meesage}
                        </a>

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