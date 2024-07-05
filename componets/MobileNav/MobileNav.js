"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
// import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { yellow } from "@mui/material/colors";
import { internalLinks } from "@/componets/internalLinks";
import MenuIcon from "@mui/icons-material/Menu";

import "./MobileNav.css";
import MainLogo from "@/./public/Assets/Logos/MainLogo.webp";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Link from "next/link";
import Image from "next/image";
import { RadioButtonChecked } from "@mui/icons-material";
export default function MobileNav({ handleShrink, isMobile }) {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    handleShrink();

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className="mobile-nav-list">
        <ListItem className="mobile-nav-list-item">
          <ListItemButton>
            <Link href={"/"}>
              <ListItemText>Home</ListItemText>
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <Link href={"/portfolio"}>
              <ListItemText>Portfolio</ListItemText>
            </Link>
          </ListItemButton>
        </ListItem>

        <ListItem className="services-list">
          <ListItemText>Services</ListItemText>
          <List className="services-list-sub-list">
            <ListItem>
              <Link
                href={"/services/web-development"}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                }}
              >
                <RadioButtonChecked
                  style={{ fontSize: "14px", color: "white" }}
                />
                <ListItemText>Web Development</ListItemText>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href={"/services/branding"}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                }}
              >
                <RadioButtonChecked
                  style={{ fontSize: "14px", color: "white" }}
                />
                <ListItemText>Branding</ListItemText>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href={"/services/creative-design"}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                }}
              >
                <RadioButtonChecked
                  style={{ fontSize: "14px", color: "white" }}
                />
                <ListItemText>Creative Designing</ListItemText>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href={"/services/seo"}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                }}
              >
                <RadioButtonChecked
                  style={{ fontSize: "14px", color: "white" }}
                />
                <ListItemText>Search Engine Optimization</ListItemText>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href={"/services/social-media-management"}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                }}
              >
                <RadioButtonChecked
                  style={{ fontSize: "14px", color: "white" }}
                />
                <ListItemText>Social Media Management</ListItemText>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href={"/services/performance-marketing"}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                }}
              >
                <RadioButtonChecked
                  style={{ fontSize: "14px", color: "white" }}
                />
                <ListItemText>Performance Marketing</ListItemText>
              </Link>
            </ListItem>
          </List>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <Link href={"/about"}>
              <ListItemText>About Us</ListItemText>
            </Link>
          </ListItemButton>
        </ListItem>
        {/* <ListItem>
          <ListItemButton>
            <Link to={internalLinks.project}>
              <ListItemText>Project</ListItemText>
            </Link>
          </ListItemButton>
        </ListItem> */}
        <ListItem>
          <ListItemButton>
            <Link href={"/contact"}>
              <ListItemText>Contact Us</ListItemText>
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <Link href={"/StaffAugmentation"}>
              <ListItemText>Staff Augmentation</ListItemText>
            </Link>
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
    </Box>
  );

  return (
    <div className="mobile-nav">
      <div className="mobile-nav-logo">
        <Link href={"/"}>
          <Image width={164} href={40} src={MainLogo} alt="Nav Rec" />
        </Link>
      </div>
      <MenuIcon onClick={toggleDrawer("right", true)} />
      <div className="mobile-nav-drawer-container">
        <Drawer
          className="mobile-nav-drawer"
          anchor={"right"}
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
        >
          <ExitToAppIcon
            sx={{ color: yellow[700], fontSize: 40 }}
            onClick={toggleDrawer("right", false)}
          />
          {list("right")}
        </Drawer>
      </div>
    </div>
  );
}
