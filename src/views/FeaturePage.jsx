import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "@mui/joy";

/**
 * An empty view component to start with
 */
export default function FeaturePage() {
  const [gasStationsData, setGasStationsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get("https://data.gov.il/api/3/action/datastore_search", {
      params: {
        resource_id: 'ff3b653c-d268-4eb7-a86b-6de69e77043a',
        // limit: 5
      }
    })
    .then(data => setGasStationsData(data.result))
    .catch(error => console.log(error));

    console.log(gasStationsData)
  }, [gasStationsData]);
  
  return (
    <>
    {/* <Sheet
      className="SearchAndFilters-mobile"
      sx={{
        display: { xs: 'flex', sm: 'none' },
        my: 1,
        gap: 1,
      }}
    >
      <Input
        size="sm"
        placeholder="Search"
        startDecorator={<SearchIcon />}
        sx={{ flexGrow: 1 }}
      />
      <IconButton
        size="sm"
        variant="outlined"
        color="neutral"
        onClick={() => setOpen(true)}
      >
        <FilterAltIcon />
      </IconButton>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog aria-labelledby="filter-modal" layout="fullscreen">
          <ModalClose />
          <Typography id="filter-modal" level="h2">
            Filters
          </Typography>
          <Divider sx={{ my: 2 }} />
          <Sheet sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {renderFilters()}
            <Button color="primary" onClick={() => setOpen(false)}>
              Submit
            </Button>
          </Sheet>
        </ModalDialog>
      </Modal>
    </Sheet>
    <Box
      className="SearchAndFilters-tabletUp"
      sx={{
        borderRadius: 'sm',
        py: 2,
        display: { xs: 'none', sm: 'flex' },
        flexWrap: 'wrap',
        gap: 1.5,
        '& > *': {
          minWidth: { xs: '120px', md: '160px' },
        },
      }}
    >
      <FormControl sx={{ flex: 1 }} size="sm">
        <FormLabel>Search for order</FormLabel>
        <Input size="sm" placeholder="Search" startDecorator={<SearchIcon />} />
      </FormControl>
      {renderFilters()}
    </Box>
    <Sheet
      className="OrderTableContainer"
      variant="outlined"
      sx={{
        display: { xs: 'none', sm: 'initial' },
        width: '100%',
        borderRadius: 'sm',
        flexShrink: 1,
        overflow: 'auto',
        minHeight: 0,
      }}
    > */}
      <Table
        aria-labelledby="tableTitle"
        stickyHeader
        hoverRow
        sx={{
          '--TableCell-headBackground': 'var(--joy-palette-background-level1)',
          '--Table-headerUnderlineThickness': '1px',
          '--TableRow-hoverBackground': 'var(--joy-palette-background-level1)',
          '--TableCell-paddingY': '4px',
          '--TableCell-paddingX': '8px',
        }}
      >
        <thead>
          <tr>
            <th style={{ width: 140, padding: '12px 6px' }}>Station Number</th>
            <th style={{ width: 140, padding: '12px 6px' }}>Station Name</th>
            <th style={{ width: 240, padding: '12px 6px' }}>Company</th>
            <th style={{ width: 140, padding: '12px 6px' }}>Location</th>
            <th style={{ width: 140, padding: '12px 6px' }}>Phone</th>
          </tr>
        </thead>
        <tbody>
          {gasStationsData.records.map(record => 
            <td>
              <Typography level="body-xs">{row.id}</Typography>
            </td>
          )}
          {stableSort(rows, getComparator(order, 'id')).map((row) => (
            <tr key={row.id}>
              <td style={{ textAlign: 'center', width: 120 }}>
                <Checkbox
                  size="sm"
                  checked={selected.includes(row.id)}
                  color={selected.includes(row.id) ? 'primary' : undefined}
                  onChange={(event) => {
                    setSelected((ids) =>
                      event.target.checked
                        ? ids.concat(row.id)
                        : ids.filter((itemId) => itemId !== row.id),
                    );
                  }}
                  slotProps={{ checkbox: { sx: { textAlign: 'left' } } }}
                  sx={{ verticalAlign: 'text-bottom' }}
                />
              </td>
              <td>
                <Typography level="body-xs">{row.id}</Typography>
              </td>
              <td>
                <Typography level="body-xs">{row.date}</Typography>
              </td>
              <td>
                <Chip
                  variant="soft"
                  size="sm"
                  startDecorator={
                    {
                      Paid: <CheckRoundedIcon />,
                      Refunded: <AutorenewRoundedIcon />,
                      Cancelled: <BlockIcon />,
                    }[row.status]
                  }
                  color={
                    {
                      Paid: 'success',
                      Refunded: 'neutral',
                      Cancelled: 'danger',
                    }[row.status]
                  }
                >
                  {row.status}
                </Chip>
              </td>
              <td>
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                  <Avatar size="sm">{row.customer.initial}</Avatar>
                  <div>
                    <Typography level="body-xs">{row.customer.name}</Typography>
                    <Typography level="body-xs">{row.customer.email}</Typography>
                  </div>
                </Box>
              </td>
              <td>
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                  <Link level="body-xs" component="button">
                    Download
                  </Link>
                  <RowMenu />
                </Box>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    {/* </Sheet> */}
    {/* <Box
      className="Pagination-laptopUp"
      sx={{
        pt: 2,
        gap: 1,
        [`& .${iconButtonClasses.root}`]: { borderRadius: '50%' },
        display: {
          xs: 'none',
          md: 'flex',
        },
      }}
    >
      <Button
        size="sm"
        variant="outlined"
        color="neutral"
        startDecorator={<KeyboardArrowLeftIcon />}
      >
        Previous
      </Button>

      <Box sx={{ flex: 1 }} />
      {['1', '2', '3', '…', '8', '9', '10'].map((page) => (
        <IconButton
          key={page}
          size="sm"
          variant={Number(page) ? 'outlined' : 'plain'}
          color="neutral"
        >
          {page}
        </IconButton>
      ))}
      <Box sx={{ flex: 1 }} />

      <Button
        size="sm"
        variant="outlined"
        color="neutral"
        endDecorator={<KeyboardArrowRightIcon />}
      >
        Next
      </Button>
    </Box> */}
  </>
  );
}
