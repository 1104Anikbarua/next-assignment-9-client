import HeroSection from "@/components/Ui/Home/HeroSection/HeroSection";
import { Stack } from "@mui/material";

export default function Home() {
  return (
    <Stack
      direction={"column"}
      spacing={1}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <HeroSection />
    </Stack>
  );
}
