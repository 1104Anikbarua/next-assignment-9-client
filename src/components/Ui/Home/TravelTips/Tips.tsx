import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const travelTips = [
  {
    label: "Before You Go",
    subLabel: "Research Your Destination",
    description:
      "Learn about local customs, culture, and etiquette to respect the local people and avoid any misunderstandings. Check the weather forecast and pack accordingly.",
  },
  {
    label: "Before You Go",
    subLabel: "Travel Insurance",
    description:
      "Always get travel insurance to cover unexpected events like medical emergencies, trip cancellations, or lost luggage.",
  },
  {
    label: "Before You Go",
    subLabel: "Health Precautions",
    description:
      "Check if any vaccinations are required for your destination. Pack a basic first aid kit and any necessary medications.",
  },
  {
    label: "Before You Go",
    subLabel: "Documents and Copies",
    description:
      "Keep digital and physical copies of important documents like your passport, visa, travel insurance, and booking confirmations.",
  },
  {
    label: "Packing Smart",
    subLabel: "Pack Light",
    description:
      "Aim to travel with carry-on luggage to save time at the airport and avoid checked baggage fees. Choose versatile clothing items that can be mixed and matched.",
  },
  {
    label: "Packing Smart",
    subLabel: "Essential Items",
    description:
      "Don’t forget chargers, adapters, and a portable battery pack for your electronics. Bring a reusable water bottle and snacks for long journeys.",
  },
  {
    label: "Packing Smart",
    subLabel: "Travel Comfort",
    description:
      "Pack a travel pillow, eye mask, and earplugs to ensure a comfortable trip.",
  },
  {
    label: "During Your Trip",
    subLabel: "Money Matters",
    description:
      "Inform your bank about your travel plans to avoid your cards being blocked. Keep some local currency on hand for small purchases.",
  },
  {
    label: "During Your Trip",
    subLabel: "Stay Connected",
    description:
      "Get a local SIM card or an international roaming plan to stay connected. Use offline maps and translation apps to navigate and communicate more easily.",
  },
  {
    label: "During Your Trip",
    subLabel: "Safety First",
    description:
      "Be aware of your surroundings and keep your belongings secure. Avoid flashing expensive items and always use the hotel safe.",
  },
  {
    label: "Exploring Your Destination",
    subLabel: "Local Cuisine",
    description:
      "Try local foods and visit popular restaurants to experience the culture. Be cautious with street food and drink bottled water to avoid any health issues.",
  },
  {
    label: "Exploring Your Destination",
    subLabel: "Public Transport",
    description:
      "Use public transport like buses and trains to save money and explore the city like a local. Consider renting a bike for short trips and sightseeing.",
  },
  {
    label: "Exploring Your Destination",
    subLabel: "Sustainable Travel",
    description:
      "Respect the environment by reducing waste, conserving water, and supporting eco-friendly businesses. Choose sustainable tour operators and avoid activities that harm animals or the environment.",
  },
  {
    label: "Making Memories",
    subLabel: "Capture Moments",
    description:
      "Take lots of photos and videos to document your journey. Keep a travel journal to jot down your experiences and memorable moments.",
  },
  {
    label: "Making Memories",
    subLabel: "Interact with Locals",
    description:
      "Engage with locals to learn more about the culture and gain new perspectives. Be open to making new friends and connections along the way.",
  },
  {
    label: "Making Memories",
    subLabel: "Relax and Enjoy",
    description:
      "Take time to relax and soak in the experience. Don’t stress about sticking to a rigid itinerary; allow for some spontaneity.",
  },
];

export default function TravelTipsStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {travelTips.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 2 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === travelTips.length - 1 ? "Finish" : "Continue"}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === travelTips.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
}
