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
import dayjs from "dayjs";
import TbSelect from "@/components/Ui/Form/TbSelect";
import { activities, travelTypes } from "@/constant/constant";
import TbTextCountField from "@/components/Ui/Form/TbTextCountField";
import { toast } from "sonner";
import { useAddTravelMutation } from "@/redux/features/trip/tripApi";
import TbMultipleSelectChip from "@/components/Ui/Form/TbMultipleSelect";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import uploadImage from "@/utlis/uploadImage";
//
const AddTravel = () => {
  const [selectedActivities, setSelectedActivities] = useState<string[]>([]);
  const [words, setWord] = useState("");

  // total word count
  let totalWord = 0;
  totalWord = words.length;

  // imgbb key
  const imageKey = process.env.NEXT_PUBLIC_IMAGE_KEY;

  // add travel api
  const [addTravel, { isLoading, isSuccess }] = useAddTravelMutation();

  // zod validation
  const createTripValidation = z.object({
    destination: z.string().min(1, { message: "Destination is required" }),
    description: z.string().min(1, { message: "Description is required" }),
    budget: z.coerce.number().positive({ message: "Budget is required" }),
    location: z.string().min(1, { message: "Location is required" }),
    travelType: z.enum([...travelTypes] as [string, ...string[]], {
      message: "Travel type is required",
    }),
    startDate: z.coerce.date(),
    endDate: z.coerce.date(),
  });
  // create a travel handler
  const handleAddTravel: SubmitHandler<FieldValues> = async (values) => {
    // image link array
    const uploadPromises: string[] = [];
    const toastId = toast.loading("please wait this may take a few minutes", {
      duration: 2000,
      position: "top-center",
    });
    const files = values?.photos?.files;

    // remove extra space before and after comma
    values.location = values?.location?.replace(/ *, */g, ",")?.split(",");
    values.activities = selectedActivities;
    // remove extra space before and after comma and two consecutive comma without any word between
    values.description = words;
    values.startDate = dayjs(values?.startDate)?.format("DD-MM-YYYY");
    values.endDate = dayjs(values?.endDate)?.format("DD-MM-YYYY");
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
        setSelectedActivities([]);
      }
    } catch (error) {
      console.log(error);
    }
  };
  // default values
  const defaultValues = {
    destination: "",
    startDate: dayjs(new Date().toDateString()),
    endDate: dayjs(new Date().toDateString()),
    description: "",
    travelType: "",
    location: "",
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
          <WrapperForm
            onSubmit={handleAddTravel}
            defaultValues={defaultValues}
            resolver={zodResolver(createTripValidation)}
          >
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
              {/* activites  */}
              <TbMultipleSelectChip
                // prevActivities={travel?.activities}
                activities={activities}
                selectedActivities={selectedActivities}
                setSelectedActivities={setSelectedActivities}
              />
              {/* Budget */}
              <TbTextField
                name="budget"
                label="Budget"
                placeholder="Provide budget"
                type="number"
              />
              {/* location  */}
              <TbTextField
                name="location"
                label="Location"
                placeholder="Provide location"
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
