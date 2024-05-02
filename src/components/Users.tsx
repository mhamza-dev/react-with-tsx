import { useEffect, useState } from "react";
import UserServices, { User } from "../services/user-services";
import { CanceledError } from "axios";

const Users = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setErrors] = useState("");
  useEffect(() => {
    const { request, cancel } = UserServices.getAll<User>();
    request
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setErrors(err.message);
      });

    return () => cancel();
  }, []);

  const onCreate = () => {
    const originalUsers = users;

    const newUser = {
      id: 0,
      name: "Newly Added",
      username: "Newly",
      email: "newnly.user@gmail.com",
      address: {
        street: "1",
        suite: "213",
        city: "RYK",
        zipcode: "64200",
        geo: {
          lat: "23.2.12",
          lng: "23.2.12",
        },
      },
      phone: "+1234567890",
      website: "google.com",
      company: {
        name: "CHECKING",
        catchPhrase: "CHECK THE WORLD",
        bs: "DEKHO",
      },
    };

    setUsers([newUser, ...users]);

    UserServices.create<User>(newUser)
      .then(({ data: savedUser }) => setUsers([savedUser, ...users]))
      .catch((error) => {
        setUsers(originalUsers);
        setErrors(error.message);
      });
  }

  const onEdit = (user: User) => {
    const originalUsers = users;
    const updatedUser = { ...user, name: user.name + "!" };
    setUsers(
      users.map((user: User) =>
        user.id == updatedUser.id ? updatedUser : user
      )
    );

    UserServices.update<User>(updatedUser).catch((error) => {
      setUsers(originalUsers);
      setErrors(error.message);
    });
  };

  const onDelete = (user: User) => {
    const originalUsers = users;
    setUsers(users.filter((u: User) => u.id != user.id));

    UserServices.delete(user.id).catch((error) => {
      console.log(error);
      setUsers(originalUsers);
      setErrors(error.message);
    });
  };

  return (
    <div>
      {error && <p>{error}</p>}
      <button className="btn btn-primary" onClick={onCreate}>
        ADD NEW +
      </button>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Address</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.address.city}</td>
              <td>
                <div className="d-flex justify-content-end">
                  <button
                    className="btn btn-outline-primary m-1"
                    onClick={() => onEdit(user)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-outline-danger m-1"
                    onClick={() => onDelete(user)}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
