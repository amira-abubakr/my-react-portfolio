import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";

import List from "@mui/material/List";
import ListIcon from "@mui/icons-material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const drawerWidth = 260;
const navItems = [
  ["Expertise", "expertise"],
  ["History", "history"],
  ["Projects", "projects"],
  ["Contact", "contact"],
];

function Navigation({ parentToChild, modeChange }: any) {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navigation");
      if (navbar) {
        const isScrolled = window.scrollY > navbar.clientHeight;
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const drawer = (
    <Box
      className="navigation-bar-responsive"
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", height: "100%" }}
    >
      <p className="mobile-menu-top">
        <ListIcon style={{ marginRight: 8 }} />
        Menu
      </p>
      <Divider sx={{ borderColor: '#30363d' }} />
      <List sx={{ pt: 1 }}>
        {navItems.map((item) => (
          <ListItem key={item[0]} disablePadding>
            <ListItemButton
              sx={{
                textAlign: "center",
                borderRadius: '8px',
                mx: 1,
                my: 0.25,
                '&:hover': {
                  background: 'rgba(124, 58, 237, 0.12)',
                  '& .MuiListItemText-primary': { color: '#a855f7' }
                }
              }}
              onClick={() => scrollToSection(item[1])}
            >
              <ListItemText
                primary={item[0]}
                sx={{
                  '& .MuiListItemText-primary': {
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 500,
                    fontSize: '0.95rem',
                    color: '#e6edf3',
                    transition: 'color 0.2s',
                  }
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      {/* Download CV button in mobile drawer */}
      <Box sx={{ px: 2, pt: 2 }}>
        <a
          target="_blank"
          rel="noreferrer"
          href="/Amira.cv.pdf"
          download
          style={{ textDecoration: "none" }}
        >
          <Button
            variant="contained"
            fullWidth
            sx={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              fontSize: '0.875rem',
              textTransform: 'none',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #7c3aed, #a855f7)',
              color: 'white',
              padding: '10px 16px',
              boxShadow: '0 4px 16px rgba(124, 58, 237, 0.35)',
              '&:hover': {
                background: 'linear-gradient(135deg, #6d28d9, #9333ea)',
                boxShadow: '0 6px 20px rgba(124, 58, 237, 0.5)',
              },
            }}
          >
            Download CV
            <FontAwesomeIcon icon={faDownload} style={{ marginLeft: "8px" }} />
          </Button>
        </a>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        id="navigation"
        elevation={0}
        sx={{
          background: scrolled
            ? 'rgba(13, 17, 23, 0.85)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid #21262d' : 'none',
          transition: 'background 0.3s ease, border-bottom 0.3s ease, backdrop-filter 0.3s ease',
          boxShadow: 'none',
        }}
      >
        <Toolbar
          className="navigation-bar"
          sx={{ px: { xs: 2, sm: 4 }, minHeight: '68px !important' }}
        >
          {/* Mobile menu button */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" }, color: '#e6edf3' }}
          >
            <MenuIcon />
          </IconButton>

          {/* Download CV button */}
          <a
            target="_blank"
            rel="noreferrer"
            href="/Amira.cv.pdf"
            download
            style={{ textDecoration: "none" }}
          >
            <Button
              variant="contained"
              sx={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                fontSize: { xs: "0.78rem", sm: "0.875rem" },
                textTransform: 'none',
                padding: { xs: "6px 12px", sm: "8px 18px" },
                background: 'linear-gradient(135deg, #7c3aed, #a855f7)',
                color: 'white',
                borderRadius: '10px',
                boxShadow: '0 4px 16px rgba(124, 58, 237, 0.35)',
                letterSpacing: '0.01em',
                transition: 'all 0.25s ease',
                '&:hover': {
                  background: 'linear-gradient(135deg, #6d28d9, #9333ea)',
                  boxShadow: '0 6px 20px rgba(124, 58, 237, 0.5)',
                  transform: 'translateY(-1px)',
                },
              }}
            >
              Download CV
              <FontAwesomeIcon icon={faDownload} style={{ marginLeft: "8px" }} />
            </Button>
          </a>

          {/* Desktop nav links */}
          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 0.5, ml: 'auto' }}>
            {navItems.map((item) => (
              <Button
                key={item[0]}
                onClick={() => scrollToSection(item[1])}
                sx={{
                  color: "#8b949e",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                  fontSize: '0.875rem',
                  textTransform: 'none',
                  borderRadius: '8px',
                  px: 1.5,
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    color: '#a855f7',
                    background: 'rgba(124, 58, 237, 0.1)',
                  },
                }}
              >
                {item[0]}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              background: '#161b22',
              border: 'none',
              borderRight: '1px solid #30363d',
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default Navigation;
