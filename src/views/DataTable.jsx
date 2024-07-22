import axios from 'axios';
import Table from '../components/Table';
import { useEffect, useState } from "react";
import { Typography } from '@mui/joy';

// Row Data: The data to be displayed.
const rowData  = [
  { make: "Tesla", model: "Model Y", price: 64950, electric: true },
  { make: "Ford", model: "F-Series", price: 33850, electric: false },
  { make: "Toyota", model: "Corolla", price: 29600, electric: false },
  { make: "Toyota", model: "Corolla", price: 29600, electric: false },
  { make: "Toyota", model: "Corolla", price: 29600, electric: false },
  { make: "Toyota", model: "Corolla", price: 29600, electric: false },
  { make: "Toyota", model: "Corolla", price: 29600, electric: false },
  { make: "Toyota", model: "Corolla", price: 29600, electric: false },
  { make: "Toyota", model: "Corolla", price: 29600, electric: false },
];

// Column Definitions: Defines the columns to be displayed.
// filter - adding a filter button near the column name
// floatingFilter - adding a search bar below the column name 
const colDefs = [
  { field: "make", filter: true, floatingFilter: true },
  { field: "model" },
  { field: "price" },
  { field: "electric" }
];

export default function GridExample() {
  const [gasStationsData, setGasStationsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [cols, setCols] = useState([]);
  const [records, setRecords] = useState([]);

  useEffect(() => {
    axios.get("https://data.gov.il/api/3/action/datastore_search", {
      params: {
        resource_id: 'ff3b653c-d268-4eb7-a86b-6de69e77043a',
        // limit: 5
      }
    })
    .then(data => {
      console.log(data.data.result)
      const { fields, records } = data?.data?.result
      setCols(fields?.map((col, i) => { return { field: col.id, filter: [2, 3, 4].includes(i), floatingFilter: i === 2 } }))
      setRecords(records)
      console.log(records)

    })
    .catch(error => console.log(error));
  }, []);

  return (
      <>
        <Typography level="h1" sx={{ marginBottom: '1rem' }}>
          Gas Stations in Israel
        </Typography>
        <Table cols={cols} rows={records} size='large'/>
      </>
   )
 }

 