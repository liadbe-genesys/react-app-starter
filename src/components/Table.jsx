import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
import { useEffect, useState } from 'react';

/**
 * Data table component
 * @param size <'small', 'medium', 'large'> - Table width size
 * @param rows <object[]> - Table data
 * @param cols <object[]> - Table columns
 */
export default function Table(props) {
  const [tableWidth, setTableWidth] = useState('80vw');

  useEffect(() => {
    if (props.size === 'small') {
      setTableWidth('20vw');
    } else if (props.size === 'medium') {
      setTableWidth('50vw');
    } else if (props.size === 'large') {
      setTableWidth('80vw');
    } else {
      setTableWidth('80vw');
    }
  }, [props])

  const defaultColDef = {
    flex: 1,
};
 
  return (
      <div
        className="ag-theme-quartz"
        style={{ height: 'calc(100% - 100px)', width: tableWidth }}
      >
        <AgGridReact
          rowData={props.rows}
          columnDefs={props.cols}
          defaultColDef={defaultColDef}
          pagination={true}
          paginationPageSize={100}
          paginationPageSizeSelector={[20, 50, 100, 200, 500, 1000]}
        />
      </div>
   )
 }

 