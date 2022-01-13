import React, { useState } from "react";
import "./index.css"
import Table1 from "./Table1";
import Table2 from "./Table2";

const App = () => {

  const [inX, setX] = useState();
  const [hrX, sethrX] = useState()
  const upX = (event) => {
    console.log(event)
    sethrX(event.target.value)
  }

  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const showArr = () => {
    setX(hrX)

  }


  return (
    <>
      <div className="container">
        <h3>Number of passengers:</h3>
        <input type="number" className="myNumber" onChange={upX} placeholder="Enter the passengers" />
        <button className="dice" onClick={showArr}>Click to calculate seating!</button>
      </div>
      <div className="card">
        <h2>Aeroplane-Front</h2>
      </div>


      <div className="container2">
        <div className="box1 back">
          <h3>Column A</h3>
        </div>
        <div className="box2 back">
          <h3>Column B</h3>
        </div>
        <div className="box3 back">
          <h3>Column C</h3>

        </div>
      </div>

      {inX && <Table1 valx={inX} array={arr} />}
      {inX && <Table2 valx={inX} array={arr} />}




    </>
  )
}

export default App;
