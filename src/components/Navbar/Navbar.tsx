import { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  Container,
} from "@mui/material";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import FadeMenu from "@/components/DropDown";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "@/assets/honestEGLogo_dbrd.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
// import i18n from "@/i18n";
const Navbar = () => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  const navbarAnimationClass = isArabic
    ? "animate-navbar-enter-rtl"
    : "animate-navbar-enter";
  const toggleLanguage = () => {
    const newLang = i18n.language === "ar" ? "en" : "ar";
    i18n.changeLanguage(newLang);
    localStorage.setItem("lang", newLang);
  };
  useEffect(() => {
    document.documentElement.dir = isArabic ? "rtl" : "ltr";
  }, [isArabic]);
  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  useEffect(() => {
    setMounted(true);

    const onScroll = () => {
      setIsSticky(window.scrollY > 60);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <AppBar
        key={i18n.language}
        position="fixed"
        className={mounted ? navbarAnimationClass : ""}
        sx={{
          backgroundColor: isSticky ? "#0f172b" : "transparent",
          boxShadow: isSticky ? "0 6px 20px rgba(0,0,0,0.25)" : "none",
          transition: "box-shadow 0.3s ease, background-color 0.3s ease",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            disableGutters
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              py: 1,
              overflow: 'hidden',
            }}
          >
            {/* Logo */}
            <Link to="/">
              <div className="flex items-center gap-2">
                <img src={Logo} alt="logo" className="h-12.5" />
                <span className="text-white font-bold text-lg">
                  {t("brand")}
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {[
                { key: "home", to: "/#home" },
                { key: "about", to: "/About-Us" },
                { key: "contact", to: "/#contact" },
                // { key: "join", to: "/our-companies" },
              ].map((item, index) => (
                <Link key={item.key} to={item.to}>
                  <p
                    className={`opacity-0 ${isArabic ? "animate-link-drop-rtl" : "animate-link-drop"} text-white font-medium text-xl cursor-pointer hover:text-[#FFB300]`}
                    style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                  >
                    {t(`nav.${item.key}`)}
                  </p>
                </Link>
              ))}

              <FadeMenu key="anan" />
            </div>
            <Button
              onClick={toggleLanguage}
              sx={{
                color: "#fff",
                border: "1px solid rgba(255,255,255,0.4)",
                borderRadius: "20px",
                px: 2,
                py: 0.5,
                fontSize: "0.8rem",
                minWidth: "auto",
                textTransform: "uppercase",
                mr: isArabic ? 0 : 2,
                ml: isArabic ? 2 : 0,
              }}
            >
              {isArabic ? "EN" : "AR"}
            </Button>
            {/* Join Us */}

            {/* Mobile Toggle */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerToggle}
              sx={{ display: { md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor={isArabic ? "left" : "right"}
        open={mobileOpen}
        onClose={handleDrawerToggle}
        PaperProps={{
          sx: {
            width: 260,
            bgcolor: "#0f172b",
            color: "#fff",
            textAlign: isArabic ? "right" : "left",
            overflow: 'hidden',
          },
        }}
      >
        <List>
          {[
            { key: "home", to: "/#home" },
            { key: "about", to: "/About-Us" },
            // { key: "join", to: "/our-companies" },
          ].map((item) => (
            <ListItem key={item.key} disablePadding>
              <Link to={item.to} className="w-full">
                <ListItemButton onClick={handleDrawerToggle}>
                  <ListItemText primary={t(`nav.${item.key}`)} />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
          <ListItemButton onClick={handleClick}>
            <ListItemText primary=        {t("nav.companies")}
 />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <Link to="/Honest-Homes">
                <ListItemButton sx={{ pl: 4 }} onClick={handleDrawerToggle}>
                  <ListItemText primary={t('home.companies.honestHouse')} />
                </ListItemButton>
              </Link>
              <Link to="/Honest-Financial-Brokerage">
                <ListItemButton sx={{ pl: 4 }} onClick={handleDrawerToggle}>
                  <ListItemText primary={t("companies.hfb.name")} />
                </ListItemButton>
              </Link>
              <Link to="/HR-Academy">
                <ListItemButton sx={{ pl: 4 }} onClick={handleDrawerToggle}>
                  <ListItemText primary={t("companies.hr.name")} />
                </ListItemButton>
              </Link>
            </List>
          </Collapse>
          <Box sx={{ p: 2 }}>
            <Link to="/#contact">
              <Button
                onClick={handleDrawerToggle}
                variant="contained"
                fullWidth
              >
                {t("nav.contact")}
              </Button>
            </Link>
          </Box>
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
