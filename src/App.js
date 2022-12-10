import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [tableData, setTableData] = useState([]);
  const [clickedData, setClickedData] = useState({});

  console.log(clickedData);
  useEffect(() => {
    if (clickedData.status === 'TRUE') {
      const makeRed = window.document.getElementById(clickedData.id).style = 'background-color: red; color:white'
    }
    else if (clickedData.status === 'FALSE') {
      const makeGreen = window.document.getElementById(clickedData.id).style = 'background-color: green; color:white'
    }
  }, [clickedData])

  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setTableData(data))
  }, [])

  return (
    <div>
      <h2 className='text-3xl font-semibold text-center mt-4 mb-2'>Data Table</h2>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>SL.</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Age</th>
              <th>Full Name</th>
            </tr>
          </thead>
          <tbody>
            {
              tableData.map(data => <tr onClick={() => setClickedData(data)} className={`cursor-pointer`} key={data.id} id={data.id}>
                <th>{data.id}</th>
                <td>{data.first_name}</td>
                <td>{data.last_name}</td>
                <td>Blue</td>
                <td>{data.first_name + ' ' + data.last_name}</td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
