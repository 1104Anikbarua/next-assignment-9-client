"use client";
import { Container, Stack, Typography } from "@mui/material";
import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useGetRequestedTravelQuery } from "@/redux/features/user/userApi";

const TravelRequest = () => {
  // get all requested travel api
  const { data, isLoading } = useGetRequestedTravelQuery({});
  const travel = data?.response?.data;

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 150 },
    {
      field: "destination",
      headerName: "Destination",
      width: 150,
      editable: true,
      headerAlign: "center",
      align: "center",
      flex: 1,
    },
    {
      field: "status",
      headerName: "Status",
      width: 150,
      editable: true,
      headerAlign: "center",
      align: "center",
    },
  ];

  const rows = travel?.map((trip, index) => ({
    id: index + 1,
    destination: trip.travel.destination,
    status: trip.status,
  }));
  return (
    <Container>
      <Stack>
        <Typography
          component={"h3"}
          variant="h3"
          sx={{
            fontSize: { xs: "24px" },
            fontWeight: { xs: 600, sm: 800 },
            opacity: "0.7",
            my: 5,
          }}
        >
          Requested Travel
        </Typography>
        <Box sx={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={rows ? rows : []}
            columns={columns}
            disableColumnMenu
            disableColumnSorting
            disableColumnFilter
            hideFooterSelectedRowCount
            hideFooter
            hideFooterPagination
          />
        </Box>
      </Stack>
    </Container>
  );
};

export default TravelRequest;
