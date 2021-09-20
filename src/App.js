import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/navBar/navBar';
import './App.css';
import login from './components/loginComponent/login';
import register from './components/RegisterComponent/Register';
import profile from './components/ProfileComponet/Profile';
import reseve from './components/ReservationComponent/Reserve';
import room from './components/RoomComponent/Room';
import MyReservations from './components/MyReservations/myReservations';
import AddRoom from './components/AddRoomComponent/addRoom';
import ViewRoom from './components/ViewRoomComponent/viewRoom';
import AddManger from './components/AddManagerComponent/AddManger';
import ChangeHotel from './components/ChnageHoelComponent/ChangeHotel';
import ViewUsers from './components/ViewUserComponent/viewAllUSers';
import ViewRoomData from './components/RoomRoomByIDCompontent/viewRoombyID';
import UpdateProfile from './components/UpdateProfile/UpdateProfile';
import ViewReservation from './components/viewReservations/viewReservations';
import UpdateReseravatuion from './components/UpdateReservation/UpdateReseravtion';
import AddActiviteis from './components/ActivitiesComponent/addActivities';
import ViewActicieis from './components/ActivitiesComponent/viewActivities';
import ManageActivities from './components/ActivitiesComponent/manageActivires';
import AddFeedback from './components/FeedBackComponent/AddFeedBack';
import ViewFeedback from './components/FeedBackComponent/ViewFeedBack';
import ViewRefund from './components/RefundComopoent/ViewRefund';
import AddRefund from './components/RefundComopoent/AddRefund';
import MakePayment from './components/PaymentComponent/MakePayment';
import ViewPayment from './components/PaymentComponent/ViewPayment';




import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css'


function App() {
  return (
    <div>
      <Router>
      
        <section>
          <Switch>
            <Route path="/login" component={login} />
            <Route path="/register" component={register} />  
            <Route path="/profile" component={profile} />  
            <Route path="/room" component={room} />  
            <Route path="/reserve" component={reseve} />   
            <Route path="/myReservations" component={MyReservations} />    
            <Route path="/addRoom" component={AddRoom} />    
            <Route path="/viewRooms" component={ViewRoom} />    
            <Route path="/ChangeHotel" component={ChangeHotel} />    
            <Route path="/AddManager" component={AddManger} />  
            <Route path="/ViewAlluser" component={ViewUsers} />
            <Route path="/addActivites" component={AddActiviteis} /> 
            <Route path="/ViewActivites" component={ViewActicieis} /> 
            <Route path="/AddFeedBack" component={AddFeedback} /> 
            <Route path="/ViewFeedBack" component={ViewFeedback} /> 
            <Route path="/ManageActivities" component={ManageActivities} />   
            <Route path="/viewReservation" component={ViewReservation} /> 
            <Route path="/ViewROomByID/:id" component={ViewRoomData} exact />
            <Route path="/UpdateProfile/:id" component={UpdateProfile} exact />
            <Route path="/updateReservation/:id" component={UpdateReseravatuion} exact />
            <Route path="/ViewRefund" component={ViewRefund} />   
            <Route path="/AddRefund" component={AddRefund} />   
            <Route path="/MakePyament" component={MakePayment} /> 
            <Route path="/ViewPayment" component={ViewPayment} /> 
          </Switch>
        </section>
      </Router>
    </div>
  );
}

export default App;
