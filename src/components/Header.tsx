import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { Link, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <Box>
      <Typography>GJG</Typography>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/">Home</Link>
        <Link to="/portfolio">Portfolio</Link>
      </nav>
      <Outlet />
    </Box>
  );
};

export default Header;
