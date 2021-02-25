import React, { useState } from "react";
import "./App.css";
import Confirmation from "./Components/Confirmation";

import SideComp from "./Components/SideComp";
import TopComp from "./Components/TopComp";
import Transfer from "./Components/Transfer";
// import DataTable from "./Components/DataTable";
import User from "./Components/User";

function App() {
  const [ConfCardState, setConfCardState] = useState(false);
  const [TransferState, setTransferState] = useState(false);
  const [active, setActive] = useState(false);
  const [DataTables, setDataTables] = useState([
    {
      DATE: "23 Feb 2021",
      PRODUCT: "Jordan 11 Retro Jubilee",
      SIZE: "9.0",
      WEBSITE: "Footlocker UK",
      PRICE: "$221",
      STATUS: "SUCCESS",
      ID: 5,
    },
    {
      DATE: "22 Feb 2021",
      PRODUCT: "Jordan 6 Retro Carmine (2021)",
      SIZE: "10.0",
      WEBSITE: "Footlocker UK",
      PRICE: "$250",
      STATUS: "FAIL",
      ID: 6,
    },
    {
      DATE: "27 Feb 2021",
      PRODUCT: "Jordan  Jubilee",
      SIZE: "9.0",
      WEBSITE: "Footlocker UK",
      PRICE: "$211",
      STATUS: "SUCCESS",
      ID: 7,
    },
    {
      DATE: "25 Feb 2021",
      PRODUCT: "Jordan 11 Retro Jubilee",
      SIZE: "9.0",
      WEBSITE: "Footlocker UK",
      PRICE: "$221",
      STATUS: "SUCCESS",
      ID: 4,
    },
    {
      DATE: "26 Feb 2021",
      PRODUCT: "Jordan 11 Retroo",
      SIZE: "9.0",
      WEBSITE: "Footlocker UK",
      PRICE: "$211",
      STATUS: "FAIL",
      ID: 3,
    },
    {
      DATE: "27 Feb 2021",
      PRODUCT: "Jordan 6 Retro Carmine (2021)",
      SIZE: "9.0",
      WEBSITE: "Footlocker UK",
      PRICE: "$211",
      STATUS: "FAIL",
      ID: 2,
    },
    {
      DATE: "28 Feb 2021",
      PRODUCT: "Jordan 11 Retroo",
      SIZE: "9.0",
      WEBSITE: "Footlocker UK",
      PRICE: "$211",
      STATUS: "SUCCESS",
      ID: 1,
    },
  ]);

  return (
    <div className="App">
      <User active={active} setActive={setActive} />
      <div className="container">
        <div className="leftSide">
          <TopComp DataTables={DataTables} setDataTables={setDataTables} />
        </div>
        <SideComp setTransferState={setTransferState} />
      </div>

      <div className="popUps">
        <Transfer
          ConfCardState={ConfCardState}
          setConfCardState={setConfCardState}
          TransferState={TransferState}
          setTransferState={setTransferState}
        />
        <Confirmation
          setConfCardState={setConfCardState}
          ConfCardState={ConfCardState}
        />
      </div>
    </div>
  );
}

export default App;
