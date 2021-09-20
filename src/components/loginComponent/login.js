import React, { Component } from 'react';
import axios from 'axios';
import { Multiselect } from 'multiselect-react-dropdown';
import { toast } from 'toast-notification-alert';

class AddVehicle extends Component {
    constructor(props) {
        super(props);

        this.onChangeCode=this.onChangeCode.bind(this);
        this.OnchnageAmmount=this.OnchnageAmmount.bind(this);
        this.onChangeName=this.onChangeName.bind(this);
        this.onChangeSize=this.onChangeSize.bind(this);
        this.onSelect=this.onSelect.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
     

        
        this.state = {

            options: [],
            Code: '',
            Ammount: '',
            name: '',
            size: '',
            categories :[],
            Status:''

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
            categories:selectedList
        })
       

    }

    onSubmit(e){
        e.preventDefault();
        const User ={
            Email: this.state.Code,
            Password:this.state.Ammount,
           
        };
        
        console.log(User);
        axios.post('http://localhost:8089/user/login', User)
            .then(res =>{
                console.log(res.data.Status)
                this.setState({ Status: res.data.Status });
                if(res.data.Status == "Fail"){
                    toast.show({title: 'Login Failed, Invalid Credentials', position: 'topcenter', type: 'info'})

                }else{
                    toast.show({title: 'Login Sucessfull ', position: 'topcenter', type: 'info'})
                    window.location = `/room`
                }

            });
        
             
    }

    componentDidMount() {
        console.log("test")
        axios.get('http://localhost:8089/category/get_all_categories')
        .then(response => {
          this.setState({ options: response.data });
          console.log(response.data)
          console.log("test11")
        })
      }
    render() {
        return (
            <div>
                <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
           

             <div style={{fontSize:'30px'}} >
               <center>Welcome Back, Please Login to continue</center>  
<br></br>
             </div >
            <div style={{marginLeft:'33.4%'}} className="card col-12 col-lg-4 login-card mt-2 hv-center">
            <form onSubmit={this.onSubmit}>
                <div className="form-group text-left">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <br></br>
                <input type="email" 
                       className="form-control" 
                       id="email" 
                       aria-describedby="emailHelp" 
                       placeholder="Enter email"
                       value={this.state.Code}
                       onChange={this.onChangeCode}
                />
<br></br>
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" 
                        className="form-control" 
                        id="password" 
                        placeholder="Password"
                        value={this.state.Ammount}
                        onChange={this.OnchnageAmmount}
                    />
                </div>
                
                <center>
                <button 
                    type="submit" 
                    className="btn btn-primary"
                >
                    Login
                </button></center>
            </form>
        </div>
        </div>
        )
    }
}

export default AddVehicle;