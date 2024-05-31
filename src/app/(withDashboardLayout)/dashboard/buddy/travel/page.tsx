"use client";
import React, { useState } from "react";
import {
  Box,
  Paper,
  Button,
  Stack,
  Container,
  Typography,
} from "@mui/material";
import WrapperForm from "@/components/Ui/Form/WrapperForm";
import TbTextField from "@/components/Ui/Form/TbTextField";
import { FieldValues, SubmitHandler } from "react-hook-form";
import TbDatePicker from "@/components/Ui/Form/TbDatePicker";
import TbFileUpload from "@/components/Ui/Form/TbFileUpload";
import axios from "axios";
import dayjs from "dayjs";
import TbSelect from "@/components/Ui/Form/TbSelect";
import { travelTypes } from "@/constant/constant";
import TbTextCountField from "@/components/Ui/Form/TbTextCountField";
import { toast } from "sonner";
import { useAddTravelMutation } from "@/redux/features/trip/tripApi";
const AddTravel = () => {
  const [words, setWord] = useState("");

  // total word count
  let totalWord = 0;
  totalWord = words.length;

  // imgbb key
  const imageKey = process.env.NEXT_PUBLIC_IMAGE_KEY;

  // upload image to imagebb
  const uploadImage = async (img: any) => {
    try {
      let formData = new FormData();
      formData.append("image", img);
      const { data } = await axios.post(
        `https://api.imgbb.com/1/upload?key=${imageKey}`,
        formData
      );
      let imageUrl = data?.data?.display_url;
      // let deleteUrl = data.data.delete_url;
      // return { imageUrl, deleteUrl };
      return imageUrl;
    } catch (error) {
      return null;
    }
  };
  //
  const [addTravel, { isLoading, isSuccess }] = useAddTravelMutation();
  // create a travel handler
  const handleAddTravel: SubmitHandler<FieldValues> = async (values) => {
    // image link array
    const uploadPromises: string[] = [];
    // values["photos"] = [];
    const toastId = toast.loading("please wait this may take a few minutes", {
      duration: 2000,
      position: "top-center",
    });
    const files = values?.photos?.files;

    // remove extra space before and after comma
    values.activities = values?.activities.replace(/ *, */g, ",").split(",");
    // remove extra space before and after comma and two consecutive comma without any word between
    values.description = words;
    values.startDate = values?.startDate.format("DD-MM-YYYY");
    values.endDate = values?.endDate.format("DD-MM-YYYY");
    values.budget = Number(values?.budget);
    try {
      if (files?.length) {
        for (let i = 0; i <= files.length - 1; i++) {
          const images = files[i];

          const uploadedImageLinks = await uploadImage(images);
          uploadPromises.push(uploadedImageLinks);
        }
        values["photos"] = uploadPromises.filter((link) => Boolean(link));
      }

      const res = await addTravel(values).unwrap();
      console.log(res);
      if (res?.response?.success) {
        toast.success(res?.response?.message, {
          duration: 2000,
          position: "top-center",
          id: toastId,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const defaultValues = {
    destination: "",
    startDate: dayjs(new Date().toDateString()),
    endDate: dayjs(new Date().toDateString()),
    description: "",
    travelType: "",
    activities: "",
    budget: "",
  };

  return (
    <Container>
      <Box width={"100%"} py={10}>
        <Paper
          square={false}
          sx={{
            mx: "auto",
            width: "100%",
            textAlign: "center",
            maxWidth: "400px",
            py: 5,
            px: 2,
          }}
        >
          {/* add a trip form  start*/}
          <WrapperForm onSubmit={handleAddTravel} defaultValues={defaultValues}>
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
              Add a travel
            </Typography>
            <Stack direction={"column"} rowGap={2} justifyContent={"center"}>
              {/* destination  */}
              <TbTextField
                name="destination"
                label="Destination"
                placeholder="Destination name"
              />
              {/* start date  */}
              <TbDatePicker name="startDate" label="Start Date" />
              {/* end date  */}
              <TbDatePicker name="endDate" label="End Date" />
              {/* travel type  */}
              <TbSelect
                name="travelType"
                items={travelTypes}
                label="Travel Type"
              />
              {/* Activities */}
              <TbTextField
                name="activities"
                label="Activities"
                placeholder="Provide activities"
              />
              <TbTextField
                name="budget"
                label="Budget"
                placeholder="Provide budget"
                type="number"
              />
              {/* Description */}
              <TbTextCountField
                name="description"
                label="Description"
                multiline={true}
                setCount={setWord}
                count={words}
                totalWord={totalWord}
              />
              {/* Upload files */}
              <TbFileUpload name="photos" placeholder="upload files" />
              <Button type="submit" color="success">
                Create Trip
              </Button>
            </Stack>
          </WrapperForm>
          {/* add a trip form end  */}
        </Paper>
      </Box>
    </Container>
  );
};

export default AddTravel;
