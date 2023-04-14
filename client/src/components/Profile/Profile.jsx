import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { removeFav } from "../../store/user"
import "../Profile/Profile.css"

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleRemoveFavorites = (id) => {
    axios
      .post(
        `http://localhost:3001/api/property/delete/favorites/${id}`,
        {
          id: id,
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      )
      .then((res) => dispatch(removeFav(res.data)))
      .then(() => window.location.reload(false))
      .catch((error) => console.log(error));
  };

  return (
    <div className="container my-profile">
      <div className="container my-profile">
        <h3>My information</h3>
        <ul class="list-group">
          <li class="list-group-item disabled text-bg-light p-3">Name: {user.name}</li>
          <li class="list-group-item disabled text-bg-light p-3">Lastname: {user.lastName}</li>
          <li class="list-group-item disabled text-bg-light p-3">Email: {user.email}</li>
          <li class="list-group-item disabled text-bg-light p-3">Phone: {user.phone}</li>
        </ul>
      </div>
        <h3>FAVORITES : </h3>

      {user.properties ? (
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {user.properties.map((property, i) => (
            <div className="col">
              <div className="card h-100">
                <img
                  src={property.image}
                  className="card-img-top imageCard"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title"> {property.title} </h5>
                  <p className="card-text">{property.description}</p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">
                    <Link to={`/property/${property.id}`}>
                      <button>View Property</button>
                    </Link>
                    <button onClick={() => handleRemoveFavorites(property.id)}>Remove Favorites</button>
                  </small>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Profile;
