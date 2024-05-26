import Footer from "@/components/Shared/Footer/Footer";
import HeroSection from "@/components/Ui/Home/HeroSection/HeroSection";
import HomeSearchbar from "@/components/Ui/Home/HomeSearchbar/HomeSearchbar";
import Partners from "@/components/Ui/Home/Partners/Partners";
import Stats from "@/components/Ui/Home/Stats/Stats";
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
      <Partners />
      <Stats />
      <Footer />
    </Stack>
  );
}
