import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import { useTranslation } from "react-i18next";
import { Link} from "react-router-dom";

export default function FadeMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  return (
    <div
      style={{ animationDelay: `${0.3 + 4 * 0.1}s` }}
      className={`opacity-0 ${isArabic ? "animate-link-drop-rtl" : "animate-link-drop"}`}
    >
      <p
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className="text-white font-medium text-xl cursor-pointer hover:text-[#FFB300]"
      >
        {t("nav.companies")}
      </p>
      <Menu
        id="fade-menu"
        slotProps={{
          list: {
            "aria-labelledby": "fade-button",
          },
        }}
        PaperProps={{
          sx: {
            backgroundColor: "#0f172b",
            color: "#ffff",
            borderRadius: 2,
          },
        }}
        slots={{ transition: Fade }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
          <Link to="/Honest-Financial-Brokerage">
        <MenuItem
          sx={{
            color: "#ffff",
            "&:hover": {
              color: "#FFB300", // optional, better contrast
              backgroundColor: '0f172b',
            },
          }}
        onClick={handleClose}
        >
         {t("companies.hfb.name")}
        </MenuItem>
          </Link>
          <Link to="/Honest-Homes">
        <MenuItem
          sx={{
            color: "#ffff",
            "&:hover": {
              color: "#FFB300", 
              backgroundColor: '0f172b', // optional, better contrast
            },
          }}
          onClick={handleClose}
        >
         {t("companies.hh.name")}
        </MenuItem>
          </Link>
          <Link to="/HR-Academy">
        <MenuItem
          sx={{
            color: "#ffff",
            "&:hover": {
              color: "#FFB300",
               backgroundColor: '0f172b', // optional, better contrast
            },
          }}
          onClick={handleClose}
        >
          {t("companies.hr.name")}
        </MenuItem>
          </Link>
      </Menu>
    </div>
  );
}
