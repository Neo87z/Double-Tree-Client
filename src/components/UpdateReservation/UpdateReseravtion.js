import React, { Component } from 'react';
import axios from 'axios';
import { Multiselect } from 'multiselect-react-dropdown';
import { Card, Icon, Image, Header, Button } from 'semantic-ui-react'
import { toast } from 'toast-notification-alert';
class AddVehicle extends Component {
    constructor(props) {
        super(props);

        this.onChangeCode = this.onChangeCode.bind(this);
        this.OnchnageAmmount = this.OnchnageAmmount.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeSize = this.onChangeSize.bind(this);
        this.onSelect = this.onSelect.bind(this);
        this.onSubmit = this.onSubmit.bind(this);



        this.state = {

            options: [],
            Code: '',
            Ammount: '',
            name: '',
            size: '',
            categories: [],
            idx: ''

        };
    }

    onChangeCode(e) {
        this.setState({
            Code: e.target.value
        })
    }

    OnchnageAmmount(e) {
        this.setState({
            Ammount: e.target.value
        })
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        })
    }
    onChangeSize(e) {
        this.setState({
            size: e.target.value
        })
    }


    onSelect(selectedList, selectedItem) {
        this.setState({
            categories: selectedList
        })


    }

    onSubmit(e) {
        e.preventDefault();
        const Reservation = {
            id: this.state.idx,
            User_Name: "User",
            Room_ID: this.state.size,
            From_Date: this.state.Code,
            To_Date: this.state.Ammount,
            Price: "Price",
            Status: "Pending"
        };
        console.log(Reservation);
        axios.post('https://doubletreeapi.herokuapp.com/reservation/RemoveReservation', Reservation)
            .then(res => {
                toast.show({ title: 'Reservation Updated Sucessfully ', position: 'topcenter', type: 'info' })
                window.location = `/myReservations`
            });

    }

    componentDidMount() {
        console.log("test")
        const User = {
            User_Name: "User"
        }
        axios.post('https://doubletreeapi.herokuapp.com/reservation/get_all_Reservations_byUserID', User)
            .then(response => {
                this.setState({ size: response.data.data[0].Room_ID });
                this.setState({ Ammount: response.data.data[0].To_Date });
                this.setState({ Code: response.data.data[0].From_Date });
                this.setState({ idx: response.data.data[0]._id });
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
                            <Icon name='rebel' circular />
                            <Header.Content>Update Reservation</Header.Content>
                        </Header>
                        <br></br><br></br> <br></br><br></br>
                        <form onSubmit={this.onSubmit}>


                            <div className="mb-3">
                                <label>From Date: </label>
                                <input
                                    type="date"
                                    className="form-control"
                                    value={this.state.Code}
                                    onChange={this.onChangeCode}

                                />
                            </div>
                            <div className="form-group">
                                <label>To Date: </label>
                                <input
                                    type="date"
                                    className="form-control"
                                    value={this.state.Ammount}
                                    onChange={this.OnchnageAmmount}

                                />
                            </div>


                            <center>   <Button.Group>

                                <Button type="submit" positive>Update Reservation</Button>
                            </Button.Group>

                                <br></br></center>


                        </form>


                    </div>
                </div>
            </body>
        )
    }
}

export default AddVehicle;