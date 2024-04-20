import React from "react";
import "./css/Hero.css";
import { Button } from "@mui/material";
import { ButtonGroup } from "@mui/material";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div>
      <div className="hero">
        <h1>Find Your Best Stay</h1>
          <Link to="/stdlogin">
          <Button variant="contained" size="large" style={{width:'15rem', marginTop:'0.5rem'}}>
            Login as student
          </Button>
          </Link>
          <Link to="/ownerlogin">
          <Button variant="contained" size="large" style={{width:'15rem', marginTop:'0.5rem'}}>
            login as owner
          </Button>
          </Link>
          <Link to="/adminlogin">
          <Button variant="contained" size="large" style={{width:'15rem', marginTop:'0.5rem'}}>
            login as admin
          </Button>
          </Link>
      </div>
    </div>
  );
};
