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
            categories: []

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
            User_Name: "User",
            Room_ID: this.state.categories[0],
            From_Date: this.state.Code,
            To_Date: this.state.Ammount,
            Price: "Price",
            Status: "Pending"
        };
        console.log(Reservation);
        axios.post('https://doubletreeapi.herokuapp.com/reservation/make_reservation', Reservation)
            .then(res => {
                toast.show({ title: 'Reservation Made Sucessfully ', position: 'topcenter', type: 'info' })
                window.location = `/MakePyament`
            });

    }

    componentDidMount() {
        console.log("test")
        axios.get('https://doubletreeapi.herokuapp.com/rooms/get_all_rooms')
            .then(response => {
                this.setState({ options: response.data });
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
                            <Header.Content>Make Reservation</Header.Content>
                        </Header>
                        <br></br><br></br> <br></br><br></br>
                        <form onSubmit={this.onSubmit}>

                            <div className="form-group">
                                <label>Room: </label>
                                <Multiselect
                                    options={this.state.options}
                                    selectedValues={this.state.selectedValue}
                                    onSelect={this.onSelect}
                                    onRemove={this.onRemove}
                                    displayValue="Room_Name"
                                    value={this.state.selectedValue}
                                    onSelect={this.onSelect}
                                />
                            </div>
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
                                <Button href="/reserve" type="reset">Reset</Button>
                                <Button.Or />
                                <Button type="submit" positive>Make Reservation</Button>
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