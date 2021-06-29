import React from "react";
import profilePhoto from "./..images/profilephoto.jpeg";

const profileInfo = [
    {
        firstName: "Cassandra",
        lastName: "Copp",
        location: "Vancouver, WA",
        profileViews: 333,
        lastLogin: "8/27/2008"
    }
]

function Photo() {
    return (
        <React.Fragment>
            <img src="{profilePhoto}" alt="profile"/>
            <h2>{profileInfo.props.firstName} {props.lastName}</h2>
            <h3>{profileInfo.props.location}</h3>
            <h3>{profileInfo.props.profileViews}</h3>
            <h3>{profileInfo.props.lastLogin}</h3>
        </React.Fragment>
    );
}

Photo.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    profileViews: PropTypes.int.isRequired,
    lastLogin: PropTypes.instanceOf(Date).isRequired
}

export default Photo;