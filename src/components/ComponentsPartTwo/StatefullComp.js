import React, {useState} from "react";

const StatefullComp = () => {

  const [user, setUser] = useState({
    firstname: "Koko",
    lastname: "Bimbov",
    age: 35,
  });
   console.log(user);
  return (
    <div>
        <h2>Stateful component</h2>
        <h3>full name: {user.firstname} {user.lastname}
        </h3>
        <p>Age: {user.age}</p>
    </div>
  );
};

export default StatefullComp;