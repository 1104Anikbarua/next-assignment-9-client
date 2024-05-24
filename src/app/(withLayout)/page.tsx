import HeroSection from "@/components/Ui/Home/HeroSection/HeroSection";
import HomeSearchbar from "@/components/Ui/Home/HomeSearchbar/HomeSearchbar";
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
      <HomeSearchbar />
    </Stack>
  );
}
