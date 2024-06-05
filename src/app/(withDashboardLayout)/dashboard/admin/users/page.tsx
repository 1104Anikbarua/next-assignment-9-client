"use client";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  useGetUsersQuery,
  useSetStausMutation,
} from "@/redux/features/user/userApi";
import { Box, Button, Container, IconButton, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import React, { useState } from "react";
import SimpleDialogDemo from "./components/ActionDialog/ActionDialog";
import { toast } from "sonner";

const ManageUser = () => {
  // dialog open/close state
  const [open, setOpen] = React.useState(false);
  // user id state
  const [id, setId] = useState("");
  const [userStatus, setUserStatus] = useState<{
    status?: string;
    role?: string;
  }>({
    status: "",
    role: "",
  });

  // change user status api
  const [changeUserStatus, { isLoading: isSetStatusLoading }] =
    useSetStausMutation();
  //
  const handleChangeStatus = async () => {
    const toastId = toast.loading("Please wait this may take a moment", {
      position: "top-center",
      duration: 2000,
    });
    try {
      const res = await changeUserStatus({ id, ...userStatus })?.unwrap();
      console.log(res);
      if (res?.response?.success) {
        toast.success(res?.response?.message, {
          position: "top-center",
          duration: 2000,
          id: toastId,
        });
      }
    } catch (error: any) {
      console.log(error);
      toast.error(error.data.message || error.data, {
        position: "top-center",
        duration: 2000,
        id: toastId,
      });
    }
  };

  // dialog open handler
  const handleClickOpen = (id: string) => {
    setOpen(true);
    setId(id);
  };

  // console.log(userStatus);

  // get all user api
  const { data, isLoading } = useGetUsersQuery({});
  const users = data?.response?.data;

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 150 },
    {
      field: "name",
      headerName: "Name",
      width: 150,
      editable: true,
      headerAlign: "center",
      align: "center",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      width: 150,
      editable: true,
      headerAlign: "center",
      align: "center",
      flex: 1,
    },
    {
      field: "role",
      headerName: "Role",
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
    {
      field: "action",
      headerName: "Action",
      width: 150,
      editable: true,
      headerAlign: "center",
      align: "center",
      renderCell: (param) => (
        // console.log(param),
        <Box>
          <IconButton onClick={() => handleClickOpen(param.row.userId)}>
            <MoreVertIcon />
          </IconButton>
          <SimpleDialogDemo
            open={open}
            setOpen={setOpen}
            handleClickOpen={handleClickOpen}
            setUserStatus={setUserStatus}
            handleChangeStatus={handleChangeStatus}
          />
        </Box>
      ),
    },
  ];
  // console.log(users);
  const rows = users?.map((user, index) => ({
    id: index + 1,
    userId: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
    status: user.status,
  }));
  return (
    <Container>
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
        All Users
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
    </Container>
  );
};

export default ManageUser;
