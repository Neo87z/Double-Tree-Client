import React, { Component } from 'react';


class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/book-trip">Double Tree</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
               
                <li className="nav-item">
                  <a className="nav-link" href="/room">Rooms</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/reserve">Make Reservation</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/myReservations">My Reservation</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/profile">Profile</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/addRoom">Add Room</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/viewRooms">View Room</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/ChangeHotel">Change Hotel</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/AddManager">Add Manager</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/ViewAlluser">View Users</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/viewReservation">View Reservations</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/addActivites">Add Activities</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/ViewActivites">View Activities</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/ManageActivities">Manage Activities</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/AddFeedBack">Make Feedback</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/ViewFeedBack">View Feedback</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/AddRefund">Add Refund</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/ViewRefund">View Refund</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/ViewPayment">View Payment</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
     
    )
  }
}

export default Navbar;
