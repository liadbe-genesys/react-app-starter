import axios from 'axios';
import Table from '../components/Table';
import { useEffect, useState } from "react";
import { Typography } from '@mui/joy';

export default function GridExample() {
  const [cols, setCols] = useState([]);
  const [records, setRecords] = useState([]);

  useEffect(() => {
    // API request
    axios.get("https://data.gov.il/api/3/action/datastore_search", {
      params: {
        resource_id: 'ff3b653c-d268-4eb7-a86b-6de69e77043a',
        // limit: 5 // uncomment this line to add limit to the request
      }
    })
    .then(data => { // then => we will enter the then part after we will get response from the API
      const { fields, records } = data?.data?.result // we want to get only the fields and records entities from data.data.result (Javascript shortcut)
      // Updating the states
      setCols(fields?.map((col, i) => { return { field: col.id, filter: [2, 3, 4].includes(i), floatingFilter: i === 2 } }))
      setRecords(records)

    })
    .catch(error => console.log(error)); // catch => in case we get error from the API request
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

 