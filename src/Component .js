import React from 'react';
import './style.css';
import logo from "./logo.png";

var DATE = new Date();
var toDAY = DATE.getDate()+'-0'+(DATE.getMonth()+1)+'-'+DATE.getFullYear();

function Invoice() {
  return (
    <div className="no1">
    <p>Date: &nbsp;{toDAY}</p>
      <header>
        <img src={logo} alt=" Company Logo" />
        <h1>Shuvro Jaya</h1>
      </header>
      <nav>
        <p>Shop # 15 and #21 , Doreen Shopping Center, Plot # 04, Rupnagar Abashik Main Road, Mirpur Dhaka,
                    Bangladesh <br />
                    Facebook/ShuvroJaya Call:01716-126231</p>
      </nav>
      <div className="name">
        <div><strong>Name:</strong>&nbsp;<input type="text" required></input></div>
        <div><strong>Address:</strong>&nbsp;<textarea type="text" required></textarea></div>
        <div><strong>Phone No:</strong>&nbsp;<input className="telephon" type="tel" defaultValue="+88" required></input></div>
        <div><strong>Transporter:</strong>&nbsp;<input type="text"></input></div>
        <div><strong>Quantity:</strong>&nbsp;<input type="number"></input></div>
        <div><strong>Bill:</strong>&nbsp;<input type="number" required></input></div>
      </div>
      <div className="cpyright">created with invoice web app. Need one? https://beta-ahj.web.app/projects</div>
    </div>
  );
}

function InvoivePackage() {
  return (
    <section id="invsection">
      <Invoice />
      <Invoice />
    </section>
  );
}

export default InvoivePackage;

