import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.css";

//import {Message} from './Message'
import { Summary } from "./Summary";

let names = ["Bob", "Alice", "Dora"];

function reverseNames() {
  names.reverse();
  ReactDOM.render(<App />, document.getElementById("root"));
}

function promoteName(name) {
  names = [name, ...names.filter(val => val != name)];
  ReactDOM.render(<App />, document.getElementById("root"));
}

function App() {
  return (
    <table className="table table-sm table-striped">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Letters</th>
        </tr>
      </thead>
      <tbody>
        {names.map((name, index) => (
          <tr key={name}>
            <Summary
              index={index}
              name={name}
              reverseCallback={reverseNames}
              promoteCallback={promoteName}
            />
          </tr>
        ))}
      </tbody>
    </table>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
