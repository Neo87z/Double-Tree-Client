import React, { Component } from 'react';
import axios from 'axios';
import { Multiselect } from 'multiselect-react-dropdown';
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
        axios.post('https://doubletreeapi.herokuapp.com/user/add_user', User)
            .then(response => {
                console.log(response.data.Status)
                if (response.data.Status == "Email") {
                    toast.show({ title: 'Email Already Taken', position: 'topcenter', type: 'info' })
                }else if(response.data.Status == "Email"){
                    toast.show({ title: 'Unable To Process With Registeration, Try Again Latter', position: 'topcenter', type: 'info' })

                }else{
                    toast.show({ title: 'User Created, Please Login To Continue', position: 'topcenter', type: 'info' })
                    window.location = `/login`
                }
            }

            );

    }

    componentDidMount() {
        console.log("test")
        axios.get('http://localhost:8089/category/get_all_categories')
            .then(response => {
                this.setState({ options: response.data });

            })
    }
    render() {
        return (
            <div>
                <br></br> <br></br> <br></br> <br></br>


                <div style={{ fontSize: '30px' }} >
                    <center>Create A Double Tree Account</center>
<br></br>
                </div >
                <div style={{ marginLeft: '33.4%' }} className="card col-12 col-lg-4 login-card mt-2 hv-center">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group text-left">
                            <label htmlFor="exampleInputEmail1">Full Name</label><br></br>
                            <input type="text"
                                className="form-control"
                                id="email"
                                aria-describedby="emailHelp"
                                placeholder="Enter Full Name"
                                value={this.state.Full_Name}
                                onChange={this.onChangeFullName}
                            />

                        </div>


                        <div className="form-group text-left">
                            <label htmlFor="exampleInputEmail1">Email</label>
                            <input type="email"
                                className="form-control"
                                id="email"
                                aria-describedby="emailHelp"
                                placeholder="Enter email"
                                value={this.state.Email}
                                onChange={this.onChangeEmail}
                            />

                        </div>



                        <div className="form-group text-left">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password"
                                className="form-control"
                                id="password"
                                placeholder="Enter Password"
                                value={this.state.Password}
                                onChange={this.onChangePassword}
                            />
                        </div>
                        <div className="form-group text-left">
                            <label htmlFor="exampleInputEmail1">Age</label>
                            <input type="number"
                                className="form-control"
                                id="email"
                                aria-describedby="emailHelp"
                                placeholder="Enter Age"
                                value={this.state.Age}
                                onChange={this.onChnageAge}
                            />

                        </div>
                        <div className="form-group text-left">
                            <label htmlFor="exampleInputEmail1">Phone</label>
                            <input type="text"
                                className="form-control"
                                id="email"
                                aria-describedby="emailHelp"
                                placeholder="Enter Phone"
                                value={this.state.Phone}
                                onChange={this.onChangePhone}
                            />

                        </div>
                        <div className="form-group text-left">
                            <label htmlFor="exampleInputEmail1">Sex</label>
                            <input type="text"
                                className="form-control"
                                id="email"
                                aria-describedby="emailHelp"
                                placeholder="Enter Sex"
                                value={this.state.Sex}
                                onChange={this.onChangeSex}
                            />

                        </div>


                        <center>
                            <button
                                type="submit"
                                className="btn btn-primary"
                            >
                                Register
                            </button></center>
                    </form>
                </div>
            </div>

        )
    }
}

export default AddVehicle;