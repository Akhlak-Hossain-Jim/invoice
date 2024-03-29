import React from "react";
import styled from "styled-components";
// import logo from "./logo.png";

var DATE = new Date();
var toDAY =
  DATE.getDate() + "-" + (DATE.getMonth() + 1) + "-" + DATE.getFullYear();

function Invoice() {
  return (
    <div className="no1">
      <p>Date: &nbsp;{toDAY}</p>
      <header>
        <img src="/b_logo.webp" alt=" Company Logo" />
        <h1>Shuvro Jaya</h1>
      </header>
      <nav>
        <p>
          Shop # 15 and #21 , Doreen Shopping Center, Plot # 04, Rupnagar
          Abashik Main Road, Mirpur Dhaka, Bangladesh <br />
          Facebook/ShuvroJaya Call:01730-203990
        </p>
      </nav>
      <div className="form">
        <div>
          <strong>Name:</strong>&nbsp;<input type="text" required></input>
        </div>
        <div>
          <strong>Phone No:</strong>&nbsp;
          <input
            className="telephon"
            type="tel"
            defaultValue="+88"
            required
          ></input>
        </div>
        <div>
          <strong>Bill:</strong>&nbsp;<input type="number" required></input>
        </div>
        <div>
          <strong>Address:</strong>&nbsp;
          <textarea type="text" required></textarea>
        </div>
        <div>
          <strong>Transporter:</strong>&nbsp;<input type="text"></input>
        </div>
        <div>
          <strong>Quantity:</strong>&nbsp;<input type="number"></input>
        </div>
        <div>
          <strong>Details:</strong>&nbsp;
          <textarea type="text" required></textarea>
        </div>
      </div>
      <div className="cpyright">
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
      </div>
    </div>
  );
}

function InvoivePackage() {
  return (
    <Container id="invsection">
      <Invoice />
      <Invoice />
    </Container>
  );
}

const Container = styled.section`
  &#invsection {
    margin-top: 100px;
    margin-bottom: 50px;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(2, 1fr);
    page-break-after: always;
    height: 100%;
    width: 100%;
    @media (max-width: 768px) {
      grid-template-columns: repeat(1, 1fr);
    }
    @media (max-width: 548px) {
      margin: 0;
    }
    @media print {
      grid-template-columns: 1fr 1fr;
    }
    @media print {
      margin-top: 0;
      margin-bottom: 0;
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
    .no1 {
      max-width: 450px !important;
      padding: 0 100px;
      @media (max-width: 548px) {
        padding: 20px;
      }
      @media print {
        padding: 0 50px;
      }
      header {
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          height: 80px !important;
          width: 80px !important;
        }
        h1 {
          font-size: 40px;
          font-family: "Signika", sans-serif;
        }
      }
      nav {
        margin-top: 0px;
        p {
          text-align: center !important;
          font-size: 11px;
        }
      }
      .form {
        display: flex;
        flex-flow: column wrap;
        gap: 10px;
        @media print {
          gap: 0;
        }
        div {
          display: flex;
          flex-flow: row wrap;
          justify-content: space-between;
          strong {
            padding-top: 7px !important;
            font-size: 13px;
            color: rgb(42, 42, 43);
          }
          input {
            padding: 10px;
            font-size: 13px;
            color: black;
            text-overflow: clip;
            font-weight: 900;
            flex-basis: 1;
            width: 250px;
            text-align: right !important;
            border-radius: 5px;
            border: none;
            box-shadow: inset 0.2rem 0.2rem 0.5rem #c8d0e7,
              inset -0.2rem -0.2rem 0.5rem #ffffff;
            background-color: #e4ebf5;
            &:focus {
              outline: none;
              box-shadow: 0.3rem 0.3rem 0.6rem #c8d0e7,
                -0.2rem -0.2rem 0.5rem #ffffff;
            }
            @media print {
              border: none;
              outline: none;
              padding: 0;
              background-color: #ffffff;
              box-shadow: none;
            }
          }
          .telephon {
            text-align: left !important;
          }
          textarea {
            padding: 10px;
            font-size: 12px;
            height: 150px;
            width: 250px;
            color: black;
            flex-basis: 1;
            text-overflow: clip;
            font-weight: 900;
            text-align: right !important;
            border-radius: 5px;
            border: none;
            box-shadow: inset 0.2rem 0.2rem 0.5rem #c8d0e7,
              inset -0.2rem -0.2rem 0.5rem #ffffff;
            background-color: #e4ebf5;
            &:focus {
              outline: none;
              box-shadow: 0.3rem 0.3rem 0.6rem #c8d0e7,
                -0.2rem -0.2rem 0.5rem #ffffff;
            }
            @media print {
              border: none;
              outline: none;
              padding: 0;
              background-color: #ffffff;
              box-shadow: none;
              /* height: max-content; */
            }
          }
        }
      }
    }
  }
`;

export default InvoivePackage;
