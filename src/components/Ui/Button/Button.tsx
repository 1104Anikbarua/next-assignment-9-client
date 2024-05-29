import React from "react";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
const BaseButton = ({ id }: { id: string }) => {
  const router = useRouter();
  const handleRedirect = (id: string) => {
    router.push(`travels/${id}`);
  };
  return (
    <Button
      type="submit"
      onClick={() => handleRedirect(id)}
      fullWidth
      color={"success"}
    >
      Travel Details
    </Button>
  );
};

export default BaseButton;
