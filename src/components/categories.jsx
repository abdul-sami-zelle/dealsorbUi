import React, { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";

const settings = [
  { label: "Profile", subMenu: ["Submenu 1", "Submenu 2", "Submenu 3"] },
  { label: "Account", subMenu: ["Submenu A", "Submenu B", "Submenu C"] },
  { label: "Dashboard", subMenu: ["Submenu X", "Submenu Y", "Submenu Z"] },
  { label: "Logout",  subMenu: ["Submenu X1", "Submenu Y2", "Submenu Z3"] }, // Empty subMenu for "Logout"
];

const Dropdown = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [subMenuAnchorEl, setSubMenuAnchorEl] = useState(null);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleSubMenuOpen = (event) => {
    setSubMenuAnchorEl(event.currentTarget); // Set subMenuAnchorEl to the main dropdown item
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSubMenuAnchorEl(null);
  };

  return (
    <div style={{}}>
      <Button
        aria-owns={anchorEl ? "simple-menu" : null}
        aria-haspopup="true"
        onMouseEnter={handleOpen}
        style={{ zIndex: 1301 }}
       
      >
        <Typography sx={{ fontSize: 24, fontWeight: "bold" }}>
          Browse Categories
        </Typography>
      </Button>

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        elevation={0}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        PaperProps={{
          style: {
            minWidth: anchorEl ? anchorEl.clientWidth : 0,
            backgroundColor: "red",
          },
        }}
      >
        {settings.map((setting) => (
          <MenuItem
            key={setting.label}
            onMouseEnter={
              setting.subMenu.length > 0
                ? handleSubMenuOpen // If subMenu exists, open subMenu on hover
                : null // Otherwise, no action on hover
            }
            onClick={handleClose} // Always close the main dropdown on click
          >
            <Typography textAlign="center">{setting.label}</Typography>

            {setting.subMenu.length > 0 && (
              <Menu
                id={`submenu-${setting.label}`}
                anchorEl={subMenuAnchorEl}
                open={Boolean(subMenuAnchorEl)}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right", // Align the sub-menu with the top-right corner of the main dropdown
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left", // Align the sub-menu with the top-left corner of the main dropdown
                }}
              >
                {setting.subMenu.map((item) => (
                  <MenuItem key={item} onClick={handleClose}>
                    <Typography textAlign="center">{item}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            )}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default Dropdown;
