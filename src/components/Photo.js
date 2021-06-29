import React from "react";
//import PropTypes from "prop-types";
import profilePhoto from "./../images/profilephoto.png";


function Photo() {
    const profileInfo = 
        {
            firstName: "Cassandra",
            lastName: "Copp",
            location: "Vancouver, WA",
            profileViews: 333,
            lastLogin: "8/27/2008"
        }
    
    return (
        <React.Fragment>
            <img src={profilePhoto} alt="profile"/>
            <h3>{profileInfo.firstName} {profileInfo.lastName}</h3>
            <h3>{profileInfo.location}</h3>
            <h3>{"Profile Views: "} {profileInfo.profileViews}</h3>
            <h3>{profileInfo.lastLogin}</h3>
            {/* {profileInfo.map((index) => 
                <Ticket firstName = {firstName}
                    lastName = {lastName}
                    location = {location}
                    profileViews = {profileViews}
                    key = {index}/>
            )} */}
        </React.Fragment>
    );
}

// Photo.propTypes = {
//     firstName: PropTypes.string.isRequired,
//     lastName: PropTypes.string.isRequired,
//     location: PropTypes.string.isRequired,
//     profileViews: PropTypes.number.isRequired,
//     lastLogin: PropTypes.instanceOf(Date).isRequired
// }

export default Photo;