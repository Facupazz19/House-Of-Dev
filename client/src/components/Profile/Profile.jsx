import React from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../../store/user";
import { useEffect } from "react";

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const { id } = useParams();

  useEffect(() => {
    console.log(user);
    axios
      .get(`http://localhost:3001/api/users/${id}`, { withCredentials: true })
      .then((res) => dispatch(setUser(res.data)))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <div>
        <h1>INFO USER:</h1>
        <h2> Name: {user.name} </h2>
        <h2> LastName: {user.lastName} </h2>
        <h3> Email: {user.email} </h3>
        <h3> Phone: {user.phone} </h3>
      </div>
      <div><h1>FAVORITES : </h1></div>
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
                    <button>Remove Favorites</button>
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
