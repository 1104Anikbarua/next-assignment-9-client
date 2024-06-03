"use client";
import TravelsCard from "@/app/(withLayout)/travels/components/TravelCard";
import MediaControlCard from "@/components/Ui/TestCard/TestCard";
import { useGetMyPostedTravelsQuery } from "@/redux/features/user/userApi";
import { Container, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import ActionDialogForm from "../../admin/travels/components/ActionDialogForm/ActionDialogForm";
import { useRemoveTravelMutation } from "@/redux/features/trip/tripApi";
import { toast } from "sonner";

const Travels = () => {
  // toggle button state
  const [isShow, setIsShow] = useState(true);
  const [openDialogForm, setOpenDialogForm] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  //  user posted travel api
  const { data, isLoading } = useGetMyPostedTravelsQuery({});

  // remove travel api
  const [removeTravel, { isLoading: isRemoveLoading }] =
    useRemoveTravelMutation();
  const travels = data?.response.data;
  // travel action handler
  // const handleAction = (id: string) => {
  //   setSelectedId(id);
  //   setOpenDialog(true);
  // };
  // travel edit handler
  const handleEditConfirm = (id: string) => {
    setSelectedId(id);
    setOpenDialogForm(true);
  };
  // close the dialog
  // const handleDialogClose = () => {
  //   setOpenDialog(false);
  //   setSelectedId(null);
  // };
  // delete travel handler
  const handleDeleteConfirm = async (id: string) => {
    console.log({ id });
    const toastId = toast.loading("Please wait this may take a moment", {
      position: "top-center",
      duration: 2000,
    });
    try {
      const res = await removeTravel(id).unwrap();
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
    // handleDialogClose();
  };
  // close the dialog form
  const handleDialogCloseForm = () => {
    setOpenDialogForm(false);
    setSelectedId(null);
  };
  const editTravel = travels?.find((travel) => travel.id === selectedId);
  console.log(editTravel);
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
        Posted Travels
      </Typography>
      <Grid container rowGap={2}>
        {travels?.map((travel) => (
          <Grid item xs={12} sm={12} md={6} lg={6} key={travel.id}>
            <TravelsCard
              trip={travel}
              // handleAction={handleAction}
              isShow={isShow}
              setIsShow={setIsShow}
              handleDeleteConfirm={handleDeleteConfirm}
              handleEditConfirm={handleEditConfirm}
            />
          </Grid>
        ))}
      </Grid>
      <ActionDialogForm
        open={openDialogForm}
        onClose={handleDialogCloseForm}
        travel={editTravel}
        setOpenDialog={setOpenDialog}
      />
    </Container>
  );
};

export default Travels;
