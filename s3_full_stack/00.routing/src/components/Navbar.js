"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Navbar() {
  const router = useRouter();

  const goToContact = () => {
    router.push("/contact");
  };

  return (
    <Box sx={{ flexGrow: 1, marginBottom: 2 }}>
      <AppBar position="static" sx={{ backgroundColor: "#1976d2" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            My Next.js App
          </Typography>

          <Button color="inherit" component={Link} href="/">
            Home
          </Button>
          <Button color="inherit" component={Link} href="/about">
            About
          </Button>
          <Button color="inherit" component={Link} href="/blog/first-post">
            Blog
          </Button>
          <Button color="inherit" onClick={goToContact}>
            Contact b
          </Button>
          <Button color="inherit" component={Link} href="/error">
            Error Page
          </Button>
          <Button color="inherit" component={Link} href="/not-found">
            Not Found
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
