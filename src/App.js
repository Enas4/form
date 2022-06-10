import { useState } from "react";
import "./App.css";

function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: "",
    email: "",
    phone: "",
  });

  const inputEvent = (event) => {
    const { name, value } = event.target;
    setFullName((preVal) => {
      return { ...preVal, [name]: value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1>
          Hello {fullName.fName} {fullName.lName}
        </h1>
        <p>{fullName.email}</p>
        <p>{fullName.phone}</p>
        <input
          type="text"
          placeholder="Enter First Name"
          onChange={inputEvent}
          name="fName"
          value={fullName.fName}
        />
        <br />
        <input
          type="text"
          placeholder="Enter First Name"
          onChange={inputEvent}
          name="lName"
          value={fullName.lName}
        />
        <br />
        <input
          type="email"
          placeholder="Enter Email"
          onChange={inputEvent}
          name="email"
          value={fullName.email}
        />
        <br />
        <input
          type="number"
          placeholder="Enter Mobile"
          onChange={inputEvent}
          name="phone"
          value={fullName.phone}
        />
        <br />
        <button>submit me</button>
      </form>
    </div>
  );
}

export default App;
