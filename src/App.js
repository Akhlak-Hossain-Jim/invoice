import React, { useState } from "react";
import styled from "styled-components";
import InvoivePackage from "./Component ";

// window.addEventListener("load", (event) => {
//   alert(
//     "Please open with PC or Laptop or Big screens or rotate or phone for better experience"
//   );
// });

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
    <AppC>
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
        <p style={{ fontSize: "13px", margin: "10px 0" }}>App Version: 3.0.0</p>
      </header>
      <main id="invoiceBox">
        <Forms totalNumber={n} />
      </main>
      <div className="button">
        <button className="btn-grad" onClick={() => setn(n + 1)}>
          Add
        </button>
      </div>
    </AppC>
  );
}

export default App;

const AppC = styled.div`
  background-color: #e4ebf5;
  @media print {
    background-color: transparent;
  }
  .insheader {
    padding: 100px;
    background-color: rgba(247, 229, 229, 0.6) !important;
    h1 {
      font-weight: 100;
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      color: rgb(20, 20, 20) !important;
      span {
        font-weight: 900;
        color: #000 !important;
      }
    }
    .cprt {
      a {
        color: rgb(33, 114, 114);
      }
      &.sticky {
        position: sticky;
        top: 10px;
      }
    }
    @media print {
      display: none;
    }
    .instructions {
      p {
        line-height: 25px;
      }
    }
  }
  .alert {
    p {
      color: rgb(95, 9, 9);
    }
  }

  .cpyright {
    padding-top: 20px;
    font-size: 11px;
  }
  .button {
    padding: 50px;
    .btn-grad {
      background-image: linear-gradient(
        to right,
        #ff6e7f 0%,
        #bfe9ff 51%,
        #ff6e7f 100%
      );
    }
    .btn-grad {
      margin: 10px;
      padding: 15px 45px;
      text-align: center;
      text-transform: uppercase;
      transition: 0.5s;
      background-size: 200% auto;
      font-weight: 900;
      font-size: 25px;
      color: #000;
      box-shadow: 0 0 20px #eee;
      border-radius: 10px;
      display: block;
    }

    .btn-grad:hover {
      background-position: right center; /* change the direction of the change here */
      color: #000;
      text-decoration: none;
    }
    @media print {
      display: none;
    }
  }
`;
