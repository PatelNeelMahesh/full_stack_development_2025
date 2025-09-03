import { Card, CardContent, Typography, Grid } from "@mui/material";

export const metadata = {
  title: "About Us - CodingGita",
  description: "Learn more about CodingGita's mission, vision, and team.",
};

export default function AboutPage() {
  return (
    <main style={{ padding: "2rem" }}>
      <Typography variant="h3" gutterBottom>
        About CodingGita
      </Typography>
      <Typography variant="body1" paragraph>
        CodingGita is dedicated to transforming the way engineering students
        learn and apply computer science. We offer a structured, hands-on
        curriculum designed to bridge the gap between academics and industry.
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Card sx={{ height: "100%" }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Our Mission
              </Typography>
              <Typography variant="body2">
                To empower students with practical coding skills, preparing them
                for top-tier software engineering roles across India.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ height: "100%" }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Our Vision
              </Typography>
              <Typography variant="body2">
                A future where every student can confidently build, deploy, and
                scale software applications for real-world challenges.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ height: "100%" }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Our Team
              </Typography>
              <Typography variant="body2">
                A group of passionate educators, software engineers, and
                mentors who believe in experiential learning.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </main>
  );
}
