// eslint-disable-next-line simple-import-sort/imports
import "./style.scss";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { t } from "@lingui/macro";
import Logo from "../../assets/images/logo-4.png";
import LogoCoin from "../../assets/images/logo-3.png";
import MenuClose from "../../assets/icons/nav-close.svg";
import Social from "../../components/Sidebar/Social";

import { AppBar, Container, useMediaQuery, Link, Typography, Toolbar, Box, Collapse, Button } from "@material-ui/core";
import React, { useState } from "react";
import { Menu as MenuIcon } from "@material-ui/icons";
import Headroom from "headroom.js";
import { LocaleSwitcher } from "@olympusdao/component-library";
import { i18n } from "@lingui/core";
import { locales, selectLocale } from "src/locales";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  const isSmallScreen = useMediaQuery("(max-width: 650px)");
  const isVerySmallScreen = useMediaQuery("(max-width: 379px)");
  const location = useLocation();
  const isFoundation = location.pathname === "/foundation";

  const [anchorElNav, setAnchorElNav] = useState(false);

  useEffect(() => {
    const header: HTMLElement = document.querySelector(".fixed-header") as HTMLElement;
    const headroom = new Headroom(header);
    headroom.init();
  }, []);

  const handleOpenNavMenu = () => {
    setAnchorElNav(true);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(false);
  };

  const links = [
    {
      name: t`MBTC`,
      href: "#/home",
    },
    {
      name: t`Economy`,
      href: "#/economy",
    },
    {
      name: t`Foundation`,
      href: "#/foundation",
    },
  ];

  return (
    <div className={`home ${isSmallScreen ? "isMobile" : ""} `}>
      <AppBar className="fixed-header">
        <Container
          style={{
            paddingLeft: isSmallScreen || isVerySmallScreen ? "1rem" : "3rem",
            paddingRight: isSmallScreen || isVerySmallScreen ? "1rem" : "3rem",
          }}
        >
          <Toolbar disableGutters>
            <Typography variant="h6" noWrap style={{ lineHeight: 1 }}>
              <img src={""} alt="MBTC" className="header-logo" />
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {links.map(link => (
                <Link href={link.href} underline="none" key={link.name} onClick={handleCloseNavMenu}>
                  <Typography variant="h6">{link.name}</Typography>
                </Link>
              ))}
            </Box>
            <Box sx={{ flexGrow: 1, justifyContent: "flex-end", display: { xs: "flex", md: "none" } }}>
              {anchorElNav ? (
                <Box onClick={handleCloseNavMenu}>
                  <img src={MenuClose} alt="MBTC" className="menu-icon-close" />
                </Box>
              ) : (
                <MenuIcon aria-haspopup="true" onClick={handleOpenNavMenu} className="menu-icon"></MenuIcon>
              )}
            </Box>
            <Box sx={{ flexGrow: 1, justifyContent: "flex-end", display: { xs: "none", md: "flex" } }}>
              <LocaleSwitcher
                initialLocale={i18n.locale}
                locales={locales}
                onLocaleChange={selectLocale}
                label={i18n.locale}
              />
              <Link
                href="https://app.meta-btc.org/#/dashboard"
                underline="none"
                target="_blank"
                style={{ marginLeft: "1rem" }}
              >
                <Button variant="contained" className="header-btn">
                  {t`Enter App`}
                </Button>
              </Link>
            </Box>
          </Toolbar>
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <Collapse in={Boolean(anchorElNav)}>
              <Box>
                {links.map(link => (
                  <Box key={link.name} onClick={handleCloseNavMenu} className="moblie-menu-item">
                    <Link underline="none" href={link.href}>
                      <Typography className="moblie-menu-text">{link.name}</Typography>
                    </Link>
                  </Box>
                ))}
              </Box>
              <Box className="modile-enter-app-box">
                <Link href="https://app.meta-btc.org/#/dashboard" underline="none" target="_blank">
                  <Button variant="contained" className="header-btn">
                    {t`Enter App`}
                  </Button>
                </Link>
              </Box>
            </Collapse>
          </Box>
        </Container>
      </AppBar>
      {children}
      <div className="bottom">
        <Typography variant="h4" align="center" className="bottom-title">
          {t`Get more out of`}
          <br />
          {t`MetaBitcoin`}
        </Typography>
        <Container
          style={{
            paddingLeft: isSmallScreen || isVerySmallScreen ? "1rem" : "3rem",
            paddingRight: isSmallScreen || isVerySmallScreen ? "1rem" : "3rem",
            paddingTop: isSmallScreen || isVerySmallScreen ? "2rem" : "4rem",
            paddingBottom: isSmallScreen || isVerySmallScreen ? "2rem" : "4rem",
            display: isSmallScreen ? "block" : "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div className="header-left">
            <img src={isFoundation ? LogoCoin : Logo} alt="MBTC" className="header-logo" />
            <Link href="#/home" underline="none">
              <Typography variant="h6">{t`MBTC`}</Typography>
            </Link>
            <Link href="#/economy" underline="none">
              <Typography variant="h6">{t`Economy`}</Typography>
            </Link>
            <Link href="#/foundation" underline="none">
              <Typography variant="h6">{t`Foundation`}</Typography>
            </Link>
          </div>
          <Box className="social-link" display="flex" justifyContent="flex-start" flexDirection="column">
            <Social />
          </Box>
        </Container>
      </div>
    </div>
  );
}
