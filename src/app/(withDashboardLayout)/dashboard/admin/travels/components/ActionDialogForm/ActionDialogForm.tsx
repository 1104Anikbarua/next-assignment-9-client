import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Container, Grid, Paper, Stack, Typography } from "@mui/material";
import { TTravel } from "@/types/travel.types";
import WrapperForm from "@/components/Ui/Form/WrapperForm";
import TbTextField from "@/components/Ui/Form/TbTextField";
import { SubmitHandler, FieldValues } from "react-hook-form";
import TbTextCountField from "@/components/Ui/Form/TbTextCountField";
import TbSelect from "@/components/Ui/Form/TbSelect";
import TbDatePicker from "@/components/Ui/Form/TbDatePicker";
import dayjs from "dayjs";
import Image from "next/image";
import TbFileUpload from "@/components/Ui/Form/TbFileUpload";
import axios from "axios";
import { imageKey, travelTypes } from "@/constant/constant";
import { useSetTravelMutation } from "@/redux/features/trip/tripApi";
import { toast } from "sonner";
const ActionDialogForm = ({
  open,
  onClose,
  travel,
}: {
  open: boolean;
  onClose: () => void;
  travel: TTravel | undefined;
}) => {
  const [words, setWord] = React.useState("");

  // total word count
  let totalWord = 0;
  totalWord = words.length;
  console.log("travel", travel);
  // default values
  const defaultValues = {
    destination: travel?.destination,
    description: travel?.description,
    budget: travel?.budget,
    startDate: dayjs(travel?.startDate),
    endDate: dayjs(travel?.endDate),
  };
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
  const [setTravel, { isLoading, isSuccess }] = useSetTravelMutation();
  // create a travel handler
  const handleSetTravel: SubmitHandler<FieldValues> = async (values) => {
    // image link array
    const uploadPromises: string[] = [];
    // values["photos"] = [];
    const toastId = toast.loading("please wait this may take a few minutes", {
      duration: 2000,
      position: "top-center",
    });
    const files = values?.photos?.files;

    // remove extra space before and after comma
    values.activities = values?.activities?.replace(/ *, */g, ",")?.split(",");
    // remove extra space before and after comma and two consecutive comma without any word between
    values.description = words;
    values.startDate = values?.startDate?.format("DD-MM-YYYY");
    values.endDate = values?.endDate?.format("DD-MM-YYYY");
    values.budget = Number(values?.budget);
    try {
      if (files?.length) {
        for (let i = 0; i <= files?.length - 1; i++) {
          const images = files[i];
          console.log(images);
          // const uploadedImageLinks = await uploadImage(images);
          // uploadPromises.push(uploadedImageLinks);
        }
        values["photos"] = uploadPromises?.filter((link) => Boolean(link));
      }

      // const res = await setTravel(values).unwrap();
      // console.log(res);
      // if (res.response.data?.id) {
      //   toast.success(res.response.message, {
      //     duration: 2000,
      //     position: "top-center",
      //     id: toastId,
      //   });
      // }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container>
      <Box width={"100%"} py={10}>
        <Dialog fullWidth maxWidth={"sm"} open={open} onClose={onClose}>
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
            <WrapperForm
              onSubmit={handleSetTravel}
              defaultValues={defaultValues}
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
                Edit Travels
              </Typography>
              <Stack rowGap={2}>
                <TbTextField name="destination" />
                <TbTextCountField
                  name="description"
                  count={words}
                  setCount={setWord}
                  totalWord={totalWord}
                  multiline
                />
                <TbSelect name="travelType" items={travelTypes} />
                <TbTextField name="budget" />
                <TbDatePicker name="startDate" />
                <TbDatePicker name="endDate" />
                <Grid container gap={2}>
                  {travel?.photos.map((photo, index) => (
                    <Grid item key={index} xs={5.7}>
                      <Image
                        src={photo}
                        width={150}
                        height={150}
                        alt="travel image"
                        style={{ borderRadius: "5px" }}
                      />
                    </Grid>
                  ))}
                </Grid>
                <TbFileUpload name="photos" placeholder="upload files" />
              </Stack>
              <Button type="submit" color="success">
                Submit
              </Button>
            </WrapperForm>
          </Paper>
        </Dialog>
      </Box>
    </Container>
  );
};
export default ActionDialogForm;
