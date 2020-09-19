import React from "react";
import { useAuth0 } from "../react-auth0-wrapper";

const Profile = () => {
  const { loading, user } = useAuth0();

  console.log(loading, !user)
  if (loading || !user) {
    return "Loading...";
  }

  const keys = Object.keys(user)
  const trElm = keys.map((key, index) => {
    return <tr key={index} >
      <td>{key.replace("_", " ")}</td>
      <td>{user[key]}</td>
    </tr>
  })
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <img src={user.picture} alt="Profile" />
        </div>

        <div className="col-md-8">
          <h2>{user.name}</h2>

          <table className="table">
            <tbody>
              {trElm}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default Profile;