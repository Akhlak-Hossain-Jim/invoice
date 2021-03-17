import React from 'react';
import './style.css';
import logo from "./logo.png";
import InvoivePackage from './Component ';

window.addEventListener("load", (event) => { alert("Please open with PC or Laptop or Big screens or rotate or phone for better experience")});

function Alert({ data }) {
  return (
    <div className="alert" >
      <p>{data}</p>
    </div>
  );
}

function App() {

  var DATE = new Date();
  var toDAY = DATE.getDate()+'-'+(DATE.getMonth()+1)+'-'+DATE.getFullYear();

  const addComponent = function() {
    var span = document.createElement("span");
    span.innerText = toDAY;
    var datee = document.createElement("p");
    datee.innerText = "Date: ";
    datee.appendChild(span);

    var logoi = document.createElement("img");
    logoi.setAttribute("src", logo);
    logoi.setAttribute("alt", "Company Logo");

    var title = document.createElement("h1");
    title.textContent = "Shuvro Jaya";

    var hder = document.createElement("header");
    hder.appendChild(datee);
    hder.appendChild(logoi);
    hder.appendChild(title);
    
    var nav = document.createElement("nav");
    nav.innerHTML = "<p>Shop # 15 and #21 , Doreen Shopping Center, Plot # 04, Rupnagar Abashik Main Road, Mirpur Dhaka,Bangladesh <br />Facebook/ShuvroJaya Call:01716-126231</p>";

    var threediv = document.createElement("div");
    threediv.classList.add("name");
    threediv.innerHTML = '<div><strong>Name:</strong>&nbsp;<input type="text" required></input></div><div><strong>Phone No:</strong>&nbsp;<input className="telephon" type="tel" defaultValue="+88" required></input></div><div><strong>Bill:</strong>&nbsp;<input type="number" required></input></div><div><strong>Address:</strong>&nbsp;<textarea type="text" required></textarea></div><div><strong>Transporter:</strong>&nbsp;<input type="text"></input></div><div><strong>Quantity:</strong>&nbsp;<input type="number"></input></div><div><strong>Details:</strong>&nbsp;<textarea type="text" required></textarea></div>';

    var cpyrt = document.createElement("div");
    cpyrt.classList.add("cpyright");
    cpyrt.innerHTML = "<p className='cprt'>Created and updated by <a href='http://akhlak-hossain-jim.github.io/' target='_blank' rel='noopener noreferrer'>&copy;&nbsp;<strong><em>Akhlak Hossain Jim</em></strong></a>.</p>";

    var driv = document.createElement("div");
    driv.classList.add("no1");
    driv.appendChild(datee);
    driv.appendChild(hder);
    driv.appendChild(nav);
    driv.appendChild(threediv);
    driv.appendChild(cpyrt);

    var span2 = document.createElement("span");
    span2.innerText = toDAY;
    var datee2 = document.createElement("p");
    datee2.innerText = "Date: ";
    datee2.appendChild(span2);

    var logoii = document.createElement("img");
    logoii.setAttribute("src", logo);
    logoii.setAttribute("alt", "Company Logo");

    var title2 = document.createElement("h1");
    title2.textContent = "Shuvro Jaya";

    var hder2 = document.createElement("header");
    hder2.appendChild(logoii);
    hder2.appendChild(title2);
    
    var nav2 = document.createElement("nav");
    nav2.innerHTML = "<p>Shop # 15 and #21 , Doreen Shopping Center, Plot # 04, Rupnagar Abashik Main Road, Mirpur Dhaka,Bangladesh <br />Facebook/ShuvroJaya Call:01716-126231</p>";

    var threediv2 = document.createElement("div");
    threediv2.classList.add("name");
    threediv2.innerHTML = '<div><strong>Name:</strong>&nbsp;<input type="text" required></input></div><div><strong>Phone No:</strong>&nbsp;<input className="telephon" type="tel" defaultValue="+88" required></input></div><div><strong>Bill:</strong>&nbsp;<input type="number" required></input></div><div><strong>Address:</strong>&nbsp;<textarea type="text" required></textarea></div><div><strong>Transporter:</strong>&nbsp;<input type="text"></input></div><div><strong>Quantity:</strong>&nbsp;<input type="number"></input></div><div><strong>Details:</strong>&nbsp;<textarea type="text" required></textarea></div>';


    var cpyrt2 = document.createElement("div");
    cpyrt2.classList.add("cpyright");
    cpyrt2.innerHTML = "<p className='cprt'>Created and updated by <a href='http://akhlak-hossain-jim.github.io/' target='_blank' rel='noopener noreferrer'>&copy;&nbsp;<strong><em>Akhlak Hossain Jim</em></strong></a>.</p>";

    var div2 = document.createElement("div");
    div2.classList.add("no2");
    div2.appendChild(datee2)
    div2.appendChild(hder2);
    div2.appendChild(nav2);
    div2.appendChild(threediv2);
    div2.appendChild(cpyrt2);

    var newEle = document.createElement("section");
    newEle.setAttribute("id", "invsection");
    newEle.appendChild(driv);
    newEle.appendChild(div2);


    var mainV = document.querySelector("#invoiceBox");
    mainV.appendChild(newEle);
  }

  return (
    <div className="App">
      <header className="insheader">
        <h1>This is a &#160;<span>Simple</span>&#160;<span>Online</span> Invoicing web App.</h1>
        <br />
        <p className="cprt">Created and updated by <a href="http://akhlak-hossain-jim.github.io/" target="_blank" rel="noopener noreferrer">&copy;&nbsp;<strong><em>Akhlak Hossain Jim</em></strong></a>.</p>
        <br />
        <strong className="cprt">View: <a href="https://github.com/Akhlak-Hossain-Jim/invoice/blob/main/README.md" target="_blank" rel="noopener noreferrer">User Guid</a></strong>
        {/* <div className="instructions">
          <br />
          <p>--- Please put all necessary information in the Boxs bellow. 
            <br />&nbsp;&nbsp;&nbsp;&nbsp;( Transporter box is for the delivery company name )</p>
            <br />
          <p>--- After a set is done click the button bellow to add another section</p>
          <p>--- After intering all information press&#160;<code>Ctrl</code><strong>&nbsp;+&nbsp;</strong><code>p</code></p>
          <p>------ Setup the page layout as <em>Landscape</em></p>
          <p>------ Hit Save</p>
          <p>-- Then print and reserve as you want.</p>
        </div> */}
        <br />
        <br />
        <Alert data="Never refresh the page before Finishing the task (If you do you may need to type all again." />
      </header>
      <main id="invoiceBox">
        <InvoivePackage />
      </main>
      <div className="button">
        <button className="btn-grad" onClick={addComponent}>Add</button>
      </div>
    </div>
  );
}

export default App;
