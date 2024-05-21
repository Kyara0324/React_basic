import React from "react";

const App = () => {
  const style = {
    display: "flex",
    gap: "12px",
    padding: "50px",
  };

  const users = [
    {
      id: 1,
      age: 30,
      name: "송중기",
    },
    {
      id: 2,
      age: 24,
      name: "송강",
    },
    {
      id: 3,
      age: 21,
      name: "김유정",
    },
    {
      id: 4,
      age: 29,
      name: "구교환",
    },
  ];
  return (
    <div style={style}>
      {users.map(function (user) {
        return <User key={user.id} user={user} />;
      })}
    </div>
  );
};

export default App;

const User = ({ user }) => {
  const squareStyle = {
    width: "100px",
    height: "100px",
    border: "1px solid green",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const { age, name } = user;

  return (
    <div style={squareStyle}>
      {age}살 - {name}
    </div>
  );
};
