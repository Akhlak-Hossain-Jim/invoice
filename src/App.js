import React, { useState } from "react";
import "./style.css";
import InvoivePackage from "./Component ";

window.addEventListener("load", (event) => {
  alert(
    "Please open with PC or Laptop or Big screens or rotate or phone for better experience"
  );
});

function Alert({ data }) {
  return (
    <div className="alert">
      <p>{data}</p>
    </div>
  );
}

const creatArray = (length) => [...Array(length)];

function Forms({ totalNumber }) {
  return creatArray(totalNumber).map((n, i) => <InvoivePackage key={i} />);
}

function App() {
  const [n, setn] = useState(1);

  return (
    <div className="App">
      <header className="insheader">
        <h1>
          This is a &#160;<span>Simple</span>&#160;<span>Online</span> Invoicing
          web App.
        </h1>
        <br />
        <p className="cprt">
          Created and updated by{" "}
          <a
            href="http://akhlak-hossain-jim.github.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            &copy;&nbsp;
            <strong>
              <em>Akhlak Hossain Jim</em>
            </strong>
          </a>
          .
        </p>
        <br />
        <strong className="cprt sticky">
          View:{" "}
          <a
            href="https://github.com/Akhlak-Hossain-Jim/invoice/blob/main/README.md"
            target="_blank"
            rel="noopener noreferrer"
          >
            User Guid
          </a>
        </strong>
        <br />
        <strong className="cprt">
          <a
            href="https://github.com/Akhlak-Hossain-Jim/invoice/issues"
            target="_blank"
            rel="noopener noreferrer"
          >
            Report a problem.
          </a>
        </strong>
        <br />
        <br />
        <Alert data="Never refresh the page before Finishing the task (If you do you may need to type all again." />
      </header>
      <main id="invoiceBox">
        <Forms totalNumber={n} />
      </main>
      <div className="button">
        <button className="btn-grad" onClick={() => setn(n + 1)}>
          Add
        </button>
      </div>
    </div>
  );
}

export default App;
