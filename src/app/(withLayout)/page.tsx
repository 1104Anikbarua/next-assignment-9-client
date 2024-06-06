import BuddyOpinion from "@/components/Ui/Home/BuddyOpinion/BuddyOpinion";
import HeroSection from "@/components/Ui/Home/HeroSection/HeroSection";
import HomeSearchbar from "@/components/Ui/Home/HomeSearchbar/HomeSearchbar";
import Partners from "@/components/Ui/Home/Partners/Partners";
import PopularTravel from "@/components/Ui/Home/PopularTravel/PopularTravel";
import Stats from "@/components/Ui/Home/Stats/Stats";
import TravelTipsStepper from "@/components/Ui/Home/TravelTips/Tips";
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
      <PopularTravel />
      <TravelTipsStepper />
      <BuddyOpinion />
      <Partners />
      <Stats />
    </Stack>
  );
}
