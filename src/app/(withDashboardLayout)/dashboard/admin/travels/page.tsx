"use client";
import {
  useGetTravelsQuery,
  useRemoveTravelMutation,
} from "@/redux/features/trip/tripApi";
import {
  Box,
  Container,
  Pagination,
  Skeleton,
  Typography,
} from "@mui/material";
import {
  DataGrid,
  GridActionsCellItem,
  GridColDef,
  GridRowId,
} from "@mui/x-data-grid";
import React, { useState } from "react";
import ActionDialog from "./components/ActionDialog/ActionDialog";
import { MoreVert } from "@mui/icons-material";
import { toast } from "sonner";
import ActionDialogForm from "./components/ActionDialogForm/ActionDialogForm";
const ManageTravel = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [openDialog, setOpenDialog] = useState(false);
  const [openDialogForm, setOpenDialogForm] = useState(false);
  const [selectedId, setSelectedId] = useState<GridRowId | null>(null);

  const query: Record<string, any> = {};
  query["page"] = page;
  query["limit"] = limit;
  query["sortBy"] = "createdAt";
  // get all travel api
  const { data, isLoading: isTravelLoading } = useGetTravelsQuery({ ...query });
  const travels = data?.response;
  const meta = data?.meta;

  // remove travel api
  const [removeTravel, { isLoading }] = useRemoveTravelMutation();

  // pagination page change handler
  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  // travel action handler
  const handleAction = (id: GridRowId) => {
    setSelectedId(id);
    setOpenDialog(true);
  };
  // travel edit handler
  const handleEditConfirm = () => {
    setOpenDialogForm(true);
  };
  // close the dialog
  const handleDialogClose = () => {
    setOpenDialog(false);
    setSelectedId(null);
  };
  // delete travel handler
  const handleDeleteConfirm = async () => {
    const toastId = toast.loading("Please wait this may take a moment", {
      position: "top-center",
      duration: 2000,
    });
    try {
      const res = await removeTravel(selectedId).unwrap();
      console.log(res);
      if (res?.success) {
        toast.success(res.message, {
          position: "top-center",
          duration: 2000,
          id: toastId,
        });
      }
    } catch (error: any) {
      console.log(error);
      toast.error(error.data.message, {
        position: "top-center",
        duration: 2000,
        id: toastId,
      });
    }
    handleDialogClose();
  };
  // close the dialog form
  const handleDialogCloseForm = () => {
    setOpenDialogForm(false);
    setSelectedId(null);
  };

  // table or datagrid columns
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
      field: "startDate",
      headerName: "Start Date",
      width: 150,
      editable: true,
      headerAlign: "center",
      align: "center",
      flex: 1,
    },
    {
      field: "endDate",
      headerName: "End Date",
      width: 150,
      editable: true,
      headerAlign: "center",
      align: "center",
      flex: 1,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      editable: true,
      headerAlign: "center",
      align: "center",
      flex: 1,
      renderCell: (params) => (
        // console.log(params.row),
        <GridActionsCellItem
          label="edit"
          icon={<MoreVert />}
          onClick={() => handleAction(params.row.travelId)}
        />
      ),
    },
  ];
  // table or datagrid rows
  const rows = travels?.map((travel, index) => ({
    id: index + 1,
    destination: travel.destination,
    startDate: travel.startDate,
    endDate: travel.endDate,
    travelId: travel.id,
  }));

  const editTravel = travels?.find((travel) => travel.id === selectedId);
  return (
    <Container>
      {/* title start */}
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
        All Travels
      </Typography>
      {/* title ends */}
      <Box sx={{ height: 400, width: "100%" }}>
        {isTravelLoading ? (
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {[...Array(10)].map((_, index) => (
              <Skeleton variant="rectangular" height={40} key={index} />
            ))}
          </Box>
        ) : (
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
        )}
        {/* pagination start here  */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mb: 2,
            borderBottom: "1px solid white",
          }}
        >
          <Pagination
            page={page}
            count={meta?.total && Math.ceil(meta.total / limit)}
            color="primary"
            onChange={handlePageChange}
            size="small"
          />
        </Box>
        {/* pagination ends here  */}
      </Box>
      <ActionDialog
        open={openDialog}
        onClose={handleDialogClose}
        handleDeleteConfirm={handleDeleteConfirm}
        handleEditConfirm={handleEditConfirm}
      />
      {/* edit travel info form  */}
      <ActionDialogForm
        open={openDialogForm}
        onClose={handleDialogCloseForm}
        travel={editTravel}
        setOpenDialog={setOpenDialog}
      />
    </Container>
  );
};

export default ManageTravel;
