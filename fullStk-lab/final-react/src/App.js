import { useState } from "react";
import "./App.css";

function App() {
  const [clickedData, setClickedData] = useState({});
  const [clicked, setClicked] = useState(false);
  const trStyle = {
    backgroundColor: "yellow",
  }

  return (
    <div className="App">
      <table className="tab">
        <thead>
          <tr>
            <th>Sno</th>
            <th>Name</th>
            <th>Enrollment</th>
            <th>Lab 1</th>
            <th>Lab 2</th>
            <th>Lab 3</th>
          </tr>
        </thead>
        <tbody>
          <tr onClick={() => {
            setClickedData({
              name: 'Rounit',
              enrollment: 'S24BCAU0120',
              lab1: 1.2,
              lab2: 1.4,
              lab3: 2.0
            });
            setClicked(true);
          }}
          style={clicked && clickedData.name === "Rounit" ? trStyle : null}>
            <td>1</td>
            <td>Rounit</td>
            <td>S24BCAU0120</td>
            <td>1.2</td>
            <td>1.4</td>
            <td>2.0</td>
          </tr>
          <tr onClick={() => {
            setClickedData({
              name: 'Apoorvj',
              enrollment: 'S24BCAU0120',
              lab1: 2.0,
              lab2: 1.9,
              lab3: 1.8
            });
            setClicked(true);
          }}
          
          style={clicked && clickedData.name === "Apoorvj" ? trStyle : null}>
            <td>2</td>
            <td>Apoorvj</td>
            <td>S24BCAU0120</td>
            <td>2.0</td>
            <td>1.9</td>
            <td>1.8</td>
          </tr>
          <tr onClick={() => {
            setClickedData({
              name: 'Sameer',
              enrollment: 'S24BCAU0120',
              lab1: 1.2,
              lab2: 1.4,
              lab3: 1.3
            });
            setClicked(true);
          }}

          style={clicked && clickedData.name === "Sameer" ? trStyle : null}>
            <td>3</td>
            <td>Sameer</td>
            <td>S24BCAU0120</td>
            <td>1.2</td>
            <td>1.4</td>
            <td>1.3</td>
          </tr>
          <tr onClick={() => {
            setClickedData({
              name: 'Rajat',
              enrollment: 'S24BCAU0123',
              lab1: 2.0,
              lab2: 1.4,
              lab3: 1.7
            });
            setClicked(true);
          }}
          style={clicked && clickedData.name === "Rajat" ? trStyle : null}>
            <td>4</td>
            <td>Rajat</td>
            <td>S24BCAU0123</td>
            <td>2.0</td>
            <td>1.4</td>
            <td>1.7</td>
          </tr>
          <tr onClick={() => {
            setClickedData({
              name: 'Piyush',
              enrollment: 'S24BCAU0182',
              lab1: 1.8,
              lab2: 1.9,
              lab3: 2.0
            });
            setClicked(true);
          }}

          style={clicked && clickedData.name === "Piyush" ? trStyle : null}>
            <td>5</td>
            <td>Piyush</td>
            <td>S24BCAU0182</td>
            <td>1.8</td>
            <td>1.9</td>
            <td>2.0</td>
          </tr>
        </tbody>
      </table>

      {clicked && <div style={{position: 'absolute', left: '0px', bottom: '50%'}}>
        <div>name: {clickedData.name}</div>
        <div>Enrollment: {clickedData.enrollment}</div>
        <div>total marks: {clickedData.lab1 + clickedData.lab2 + clickedData.lab3}</div>
        </div>}

    </div>
  );
}

export default App;
