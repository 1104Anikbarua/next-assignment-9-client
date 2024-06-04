import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
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
import { activities, travelTypes } from "@/constant/constant";
import { useSetTravelMutation } from "@/redux/features/trip/tripApi";
import { toast } from "sonner";
import TbMultipleSelectChip from "@/components/Ui/Form/TbMultipleSelect";
import uploadImage from "@/utlis/uploadImage";

const ActionDialogForm = ({
  open,
  onClose,
  travel,
  setOpenDialog,
}: {
  open: boolean;
  onClose: () => void;
  travel: TTravel | undefined;
  setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  //word count state
  const [words, setWord] = React.useState("");
  // activities state
  const [selectedActivities, setSelectedActivities] = React.useState<string[]>(
    []
  );

  // total word count
  let totalWord = 0;
  totalWord = words?.length;
  // format date
  const parseDate = (dateString: string) => {
    const [day, month, year] = dateString?.split("-");
    return dayjs(new Date(Number(year), Number(month) - 1, Number(day)));
  };
  // default values
  const defaultValues = {
    destination: travel?.destination,
    description: travel?.description,
    budget: travel?.budget,
    startDate: travel ? parseDate(travel.startDate) : dayjs(),
    endDate: travel ? parseDate(travel.endDate) : dayjs(),
    location: travel?.location.join(),
    travelId: travel?.id,
  };

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
    values.location = values?.location?.replace(/ *, */g, ",")?.split(",");
    values.activities = selectedActivities;
    // remove extra space before and after comma and two consecutive comma without any word between
    values.description = words;
    values.startDate = values?.startDate?.format("DD-MM-YYYY");
    values.endDate = values?.endDate?.format("DD-MM-YYYY");
    values.budget = Number(values?.budget);
    try {
      if (files?.length) {
        for (let i = 0; i <= files?.length - 1; i++) {
          const images = files[i];
          const uploadedImageLinks = await uploadImage(images);
          uploadPromises.push(uploadedImageLinks);
        }
        values["photos"] = uploadPromises?.filter((link) => Boolean(link));
      }
      const res = await setTravel(values).unwrap();

      if (res.response.data?.id) {
        toast.success(res.response.message, {
          duration: 2000,
          position: "top-center",
          id: toastId,
        });
        onClose();
        setOpenDialog(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  //
  React.useEffect(() => {
    setWord(travel?.description as string);
  }, [travel?.description]);
  console.log(travel);
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
                {/* Destination  */}
                <TbTextField name="destination" />
                {/* Description  */}
                <TbTextCountField
                  name="description"
                  count={words}
                  setCount={setWord}
                  totalWord={totalWord}
                  multiline
                />
                {/* travel type  */}
                <TbSelect
                  name="travelType"
                  items={travelTypes}
                  defaultValue={travel?.travelType}
                  helperText="Please select travel type"
                />
                {/* activites  */}
                <TbMultipleSelectChip
                  prevActivities={travel?.activities}
                  activities={activities}
                  selectedActivities={selectedActivities}
                  setSelectedActivities={setSelectedActivities}
                />
                {/* Budget */}
                <TbTextField name="budget" />
                {/* Start Date  */}
                <TbDatePicker name="startDate" />
                {/* End Date */}
                <TbDatePicker name="endDate" />
                {/* Activities */}
                <TbTextField
                  name="location"
                  label="Location"
                  placeholder="Provide location"
                />
                {/* images  */}
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
                <Button type="submit" color="success">
                  Submit
                </Button>
              </Stack>
            </WrapperForm>
          </Paper>
        </Dialog>
      </Box>
    </Container>
  );
};
export default ActionDialogForm;
