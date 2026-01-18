import { useState } from "react";

function Users() {
  const [userId, setUserId] = useState("");
  const [user, setUser] = useState(null);

  const fetchUser = () => {
    fetch("https://jsonplaceholder.typicode.com/users/" + userId)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  };

  return (
    <div className="users-page">
      <h2 className="title">Get User By ID</h2>

      <div className="search-box">
        <input
          type="number"
          placeholder="Enter user ID"
          min="1"
          max="10"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          className="user-input"
        />

        <button onClick={fetchUser} className="search-btn">
          Get User
        </button>
      </div>

      {user && (
        <div className="user-card">
          <h3 className="card-title">User Full Data</h3>

          <p>
            <strong>ID:</strong> {user.id}
          </p>
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Username:</strong> {user.username}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Phone:</strong> {user.phone}
          </p>
          <p>
            <strong>Website:</strong> {user.website}
          </p>

          <h4 className="section-title">Address</h4>
          <p className="text">
            {user.address.street +
              ", " +
              user.address.suite +
              ", " +
              user.address.city}
          </p>

          <h4 className="section-title">Company</h4>
          <p className="text">{user.company.name}</p>
        </div>
      )}
    </div>
  );
}

export default Users;
