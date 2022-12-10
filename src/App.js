import { useEffect, useState } from 'react';
import './App.css';
import { BsThreeDotsVertical } from 'react-icons/bs';

function App() {
  const [tableData, setTableData] = useState([]);
  const [clickedData, setClickedData] = useState({});
  const [sortByAsc, setSortByAsc] = useState(false);


  const handleSortAsc = data => {
    const sorted = data.sort((a, b) => a.first_name.localeCompare(b.first_name));
    setTableData(sorted)
  }

  const handleSortDsc = data => {
    const sorted = data.sort((a, b) => b.first_name.localeCompare(a.first_name));
    setTableData(sorted)
  }

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
      .then(data => {
        sortByAsc && handleSortAsc(data)
        sortByAsc || handleSortDsc(data)
      })
  }, [sortByAsc])

  return (
    <div>
      <h2 className='text-3xl font-semibold text-center mt-4 mb-2'>Data Table</h2>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th className='relative'>
                <span className='mr-1'>First Name</span>
                <div className="dropdown absolute right-0 top-2 ">
                  <label tabIndex={0}><BsThreeDotsVertical /></label>
                  <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><button onClick={() => setSortByAsc(true)}>Sort by ASC</button></li>
                    <li><button onClick={() => setSortByAsc(false)}>Sort by DSC</button></li>
                  </ul>
                </div></th>
              <th>Last Name</th>
              <th>Gender</th>
              <th>Full Name</th>
            </tr>
          </thead>
          <tbody>
            {
              tableData.map(data => <tr onClick={() => setClickedData(data)} className={`cursor-pointer`} key={data.id} id={data.id}>
                <td>{data.first_name}</td>
                <td>{data.last_name}</td>
                <td>{data.gender}</td>
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
