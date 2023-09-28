import React, { useContext } from "react";
import { Box, IconButton, InputBase } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { ColorModeContext, tokens, useMode } from "../../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { useMemo } from "react";
// import { useTheme } from "@material-ui/core";

const Topbar = () => {
  // const [theme] = useMode();
  const theme = useTheme();
  console.log("theme Topbar: ", theme.palette.mode);
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  // Calculate the background color based on the current theme mode
  const buttonBackgroundColor = useMemo(() => {
    return theme.palette.mode === "dark"
      ? colors.primary[100] // Dark mode color
      : colors.primary[900]; // Light mode color
  }, [theme.palette.mode, colors]);

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* Search Bar */}
      <Box
        display="flex"
        backgroundColor={colors.primary[200]}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* ICONS SECTION  */}
      <Box display="flex">
        <IconButton
          sx={{ color: buttonBackgroundColor }}
          onClick={colorMode.toggleColorMode}
        >
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <>
              <LightModeOutlinedIcon />
            </>
          )}
        </IconButton>
        <IconButton sx={{ color: buttonBackgroundColor }}>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton sx={{ color: buttonBackgroundColor }}>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton sx={{ color: buttonBackgroundColor }}>
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
