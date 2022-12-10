import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [tableData, setTableData] = useState([]);
  const [clickedData, setClickedData] = useState({});


  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setTableData(data))
  }, [])
  console.log(clickedData.status);

  return (
    <div>
      <h2 className='text-3xl font-semibold text-center mt-4 mb-2'>Data Table</h2>
      <div className="overflow-x-auto mx-2">
        <table className="table w-full">
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
              tableData.map(data => <tr onClick={() => setClickedData(data)} className='cursor-pointer' key={data.id}>
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
