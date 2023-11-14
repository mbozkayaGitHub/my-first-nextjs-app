import { link } from "fs";
import React from "react";

interface User {
  id: number;
  name: string;
  email: string;
  phone: number;
}

const UsersPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });
  const users: User[] = await res.json();

  return (
    <>
      <h1>Users</h1>
      <p>{new Date().toLocaleTimeString()}</p>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td> {user.name}</td>
              <td> {user.email}</td>
              <td> {user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UsersPage;
