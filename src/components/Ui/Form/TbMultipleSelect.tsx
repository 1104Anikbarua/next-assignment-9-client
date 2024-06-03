import * as React from "react";
import { Theme, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Chip from "@mui/material/Chip";

export interface IActivitiesProps {
  activities: string[];
  selectedActivities: string[];
  setSelectedActivities: React.Dispatch<React.SetStateAction<string[]>>;
  prevActivities?: string[] | undefined;
}
//
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  //   console.log(name, personName, theme);
  return {
    fontWeight:
      personName?.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function TbMultipleSelectChip({
  prevActivities,
  activities,
  selectedActivities,
  setSelectedActivities,
}: IActivitiesProps) {
  const theme = useTheme();

  const handleChange = (
    event: SelectChangeEvent<typeof selectedActivities>
  ) => {
    const {
      target: { value },
    } = event;
    typeof value === "string"
      ? value.split(",")
      : value.map((val) => {
          const isExists = selectedActivities.filter(
            (select) => select === val.toString()
          );

          if (isExists.length) {
            setSelectedActivities(
              selectedActivities.filter((el) => el !== val.toString())
            );
          } else {
            setSelectedActivities(value.map((prev) => prev.toString()));
          }
        });
  };

  React.useEffect(() => {
    if (prevActivities && prevActivities?.length > 0) {
      setSelectedActivities(prevActivities?.map(String));
    }
  }, [prevActivities, setSelectedActivities]);

  return (
    <Box>
      <FormControl fullWidth size="small" sx={{ maxWidth: "xs" }}>
        <InputLabel id="demo-multiple-chip-label">Activities</InputLabel>
        <Select
          //   disabled={!schedules?.length}
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={selectedActivities}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Schedule" />}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected?.map((value) => {
                return <Chip key={value} label={activities[Number(value)]} />;
              })}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {activities?.map((activity, index) => (
            <MenuItem
              key={index}
              value={index}
              style={getStyles(String(index), selectedActivities, theme)}
            >
              {activity}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
