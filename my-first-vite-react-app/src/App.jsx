import { useState } from "react";
import Button from "./components/Button";
import User from "./components/User";

const App = () => {
  const style = {
    display: "flex",
    gap: "12px",
    padding: "50px",
  };

  const [users, setUsers] = useState([
    {
      id: new Date().getTime() + 1,
      age: 30,
      name: "송중기",
    },
    {
      id: new Date().getTime() + 2,
      age: 24,
      name: "송강",
    },
    {
      id: new Date().getTime() + 3,
      age: 21,
      name: "김유정",
    },
    {
      id: new Date().getTime() + 4,
      age: 29,
      name: "구교환",
    },
  ]);

  const [age, setAge] = useState(0);
  const [name, setName] = useState("");

  const addUserHandler = () => {
    const newUser = {
      id: new Date().getTime(),
      age: Number(age),
      name: name,
    };
    setUsers([...users, newUser]);
  };

  const deleteUserhandler = (id) => {
    //삭제할 대상 id
    const deletedUsers = users.filter(function (user) {
      return user.id != id;
    });

    setUsers(deletedUsers);
    console.log(deletedUsers);
  };

  return (
    <>
      <input
        type="number"
        value={age}
        onChange={(e) => {
          setAge(e.target.value);
        }}
      />
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <Button color="green" onClick={addUserHandler}>
        추가
      </Button>
      <div style={style}>
        {users.map(function (user) {
          if (user.age >= 25) {
            return null;
          }
          return (
            <User
              key={user.id}
              user={user}
              deleteUserhandler={deleteUserhandler}
            />
          );
        })}
      </div>
    </>
  );
};

export default App;
