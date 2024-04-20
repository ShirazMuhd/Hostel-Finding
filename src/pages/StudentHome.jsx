import React from "react";
import HostelList from "../components/HostelList";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const StudentHome = () => {
  const [alignment, setAlignment] = React.useState("web");
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <div style={{display:'flex',flexDirection:'column', alignItems:'center', marginTop:'1rem'}}>
      <div>
        <ToggleButtonGroup
          color="primary"
          style={{ backgroundColor: '#fff'}}
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
        >
          <ToggleButton value="web">Boys</ToggleButton>
          <ToggleButton value="android">Girls</ToggleButton>
        </ToggleButtonGroup>
      </div>
      <div style={{ display: "flex" }}>
        <HostelList />
        <HostelList />
        <HostelList />
        <HostelList />
        <HostelList />
        
      </div>
    </div>
  );
};

export default StudentHome;
