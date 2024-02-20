import { useLocation, NavLink } from "react-router-dom";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import Icon from "@mui/material/Icon";
import Shop from "../../assets/Icons/Shop";
import Office from "../../assets/Icons/Office";
import Settings from "../../assets/Icons/Settings";
import Document from "../../assets/Icons/Document";
import SpaceShip from "../../assets/Icons/SpaceShip";
import CustomerSupport from "../../assets/Icons/CustomerSupport";
import CreditCard from "../../assets/Icons/CreditCard";
import Cube from "../../assets/Icons/Cube";

import SidenavCollapse from "./SidenavCollapse";

import SidenavRoot from "./SidenavRoot";
import sidenavLogoLabel from "./styles/sidenav";
import SidenavCard from "./SidenavCard";
import { Box, Button, Typography } from "@mui/material";
import { useSoftUIController, setMiniSidenav } from "../context";
import { useEffect } from "react";


function Sidenav({ color, brand, brandName, ...rest }) {
  const [controller, dispatch] = useSoftUIController();
  const { miniSidenav, transparentSidenav } = controller;
  const location = useLocation();
  const { pathname } = location;
  const collapseName = pathname.split("/").slice(1)[0];
  const routes = [
    {
      type: "collapse",
      name: "Dashboard",
      key: "dashboard",
      icon: <Shop size="12px" />,
      noCollapse: true,
    },
    {
      type: "collapse",
      name: "Tables",
      key: "tables",
      icon: <Office size="12px" />,
      noCollapse: true,
    },
    {
      type: "collapse",
      name: "Billing",
      key: "billing",
      icon: <CreditCard size="12px" />,
      noCollapse: true,
    },
    {
      type: "collapse",
      name: "Virtual Reality",
      key: "virtual-reality",
      icon: <Cube size="12px" />,
      noCollapse: true,
    },
    {
      type: "collapse",
      name: "RTL",
      key: "rtl",
      icon: <Settings size="12px" />,
      noCollapse: true,
    },
    { type: "title", title: "Account Pages", key: "account-pages" },
    {
      type: "collapse",
      name: "Profile",
      key: "profile",
      icon: <CustomerSupport size="12px" />,
      noCollapse: true,
    },
    {
      type: "collapse",
      name: "Sign In",
      key: "sign-in",
      icon: <Document size="12px" />,
      noCollapse: true,
    },
    {
      type: "collapse",
      name: "Sign Up",
      key: "sign-up",
      icon: <SpaceShip size="12px" />,
      noCollapse: true,
    },
  ];
  const closeSidenav = () => setMiniSidenav(dispatch, true);

  useEffect(() => {
    function handleMiniSidenav() {
      setMiniSidenav(dispatch, window.innerWidth < 1200);
    }
    window.addEventListener("resize", handleMiniSidenav);
    handleMiniSidenav();
    return () => window.removeEventListener("resize", handleMiniSidenav);
  }, [dispatch, location]);

  const renderRoutes = routes.map(({ type, name, icon, title, noCollapse, key, route, href }) => {
    let returnValue;

    if (type === "collapse") {
      returnValue = href ? (
        <Link
          href={href}
          key={key}
          target="_blank"
          rel="noreferrer"
          sx={{ textDecoration: "none" }}
        >
          <SidenavCollapse
            color={color}
            name={name}
            icon={icon}
            active={key === collapseName}
            noCollapse={noCollapse}
          />
        </Link>
      ) : (
        <NavLink to={route} key={key}>
          <SidenavCollapse
            color={color}
            key={key}
            name={name}
            icon={icon}
            active={key === collapseName}
            noCollapse={noCollapse}
          />
        </NavLink>
      );
    } else if (type === "title") {
      returnValue = (
        <Typography
          key={key}
          display="block"
          variant="caption"
          fontWeight="bold"
          textTransform="uppercase"
          opacity={0.6}
          pl={3}
          mt={2}
          mb={1}
          ml={1}
        >
          {title}
        </Typography>
      );
    } else if (type === "divider") {
      returnValue = <Divider key={key} />;
    }

    return returnValue;
  });



  return (
    <SidenavRoot {...rest} variant="permanent" ownerState={{ transparentSidenav, miniSidenav }}>
    <Box pt={3} pb={1} px={4} textAlign="center">
      <Box
        display={{ xs: "block", xl: "none" }}
        position="absolute"
        top={0}
        right={0}
        p={1.625}
        sx={{ cursor: "pointer" }}
      >
        <Typography variant="h6" color="secondary">
          <Icon sx={{ fontWeight: "bold" }}>close</Icon>
        </Typography>
      </Box>
      <Box component={NavLink} to="/" display="flex" alignItems="center">
        {brand && <Box component="img" src={brand} alt="Soft UI Logo" width="2rem" />}
        <Box
          width={!brandName && "100%"}
          sx={(theme) => sidenavLogoLabel(theme, { miniSidenav })}
        >
          <Typography component="h6" variant="button" fontWeight="medium">
            {brandName}
          </Typography>
        </Box>
      </Box>
    </Box>
    <Divider />
    <List>{renderRoutes}</List>
    <Box pt={2} my={2} mx={2} mt="auto">
      <SidenavCard />
      <Box mt={2}>
        <Button
          component="a"
          href="https://creative-tim.com/product/soft-ui-dashboard-pro-react"
          target="_blank"
          rel="noreferrer"
          variant="gradient"
          color={color}
          fullWidth
        >
          upgrade to pro
        </Button>
      </Box>
    </Box>
  </SidenavRoot>
  );
}
export default Sidenav;
