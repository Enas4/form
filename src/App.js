import { useState } from "react";
import "./App.css";

function App() {
  // const [name, setName] = useState();
  // const [fullName, setFullName] = useState();

  // const inputEvent = (e) => {
  //   e.preventDefault();
  //   setName(e.target.value);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setFullName(name);
  // };

  const [firstName, setFirstName] = useState();
  const [displayFirstName, setDisplayFirstName] = useState();

  const [lastName, setLastName] = useState();
  const [displayLastName, setDisplayLastName] = useState();

  const handleChange = (e) => {
    setFirstName(e.target.value);
  };
  const handleChangeTwo = (e) => {
    setLastName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisplayFirstName(firstName);
    setDisplayLastName(lastName);
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1>
          Hello {displayFirstName} {displayLastName}
        </h1>
        <input
          type="text"
          placeholder="enter your first name"
          onChange={handleChange}
          value={firstName}
        />
        <br />
        <input
          type="text"
          placeholder="enter your last name"
          onChange={handleChangeTwo}
          value={lastName}
        />
        <br />
        <button>submit me</button>
      </form>
      {/* <form onSubmit={handleSubmit}>
        <h1>Hello {fullName}</h1>
        <input
          type="text"
          placeholder="enter your name"
          onChange={inputEvent}
          value={name}
        />
        <button>click me</button>
      </form> */}
    </div>
  );
}

export default App;
