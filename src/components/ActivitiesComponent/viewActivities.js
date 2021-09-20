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
    axios.get('http://localhost:8089/user/get_all_actiities')
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
            Switch To Admmin
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

                <div style={{ display: 'inline-block', marginLeft: '100px', marginRight: '40px', marginBottom: '100px' }} key={index}>
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