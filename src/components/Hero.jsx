import React from "react";
import "./css/Hero.css";
import { Button } from "@mui/material";
import { ButtonGroup } from "@mui/material";

export const Hero = () => {
  return (
    <div>
      <div className="hero">
        <h1>Find Your Best Stay</h1>
        <ButtonGroup orientation="vertical" color="primary" aria-label="Medium-sized button group">
          <Button variant="contained" size="large">
            Login as student
          </Button>
          <Button variant="contained" size="large">
            login as owner
          </Button>
          <Button variant="contained" size="large">
            login as admin
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
};
