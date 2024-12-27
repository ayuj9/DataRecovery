import { Grid, List, ListItem, Typography } from "@mui/material";
import "../App.css";
export default function LastSection() {
  const text_style = {
    fontFamily: "roboto",
    fontSize: { lg: "40px", xs: "20px" },
    fontWeight: "bold",
  };

  const head_style = {
    fontFamily: "Gill Sans",
    fontSize: "25px",
  };
  return (
    <>
      <Grid
        container
        className="no-text-select"
        sx={{ width: { xs: "410px", lg: "1435px" } }}
      >
        <Grid item sx={{ height: { lg: "100px", xs: "200px" } }}>
          .
        </Grid>

        <Grid
          container
          className="bg-last"
          direction="row"
          sx={{
            paddingLeft: "40px",
            backgroundColor: "#fafdfe",
            justifyContent: "center",
            display: "flex",
            paddingY: "40px",
          }}
          rowSpacing={4}
        >
          <Grid item lg={3} xs={12}>
            <Typography
              sx={{
                fontSize: "34px",
                fontFamily: "Gill Sans",
                fontWeight: "600",
              }}
            >
              LOGIC CONTROL <br />
              SYSTEM
            </Typography>
            <Typography
              width="250px"
              paddingTop="10px"
              fontSize="15px"
              color="#656565"
              fontFamily="Gill Sans"
            >
              we understand the pivotal role your Hard-disk & laptop plays in
              your life. When glitches happen, and issues arise, count on us to
              bring your device back to life!
            </Typography>
          </Grid>
          <Grid item lg={3} sx={head_style} xs={12}>
            Hard-disk Benefits
            <List
              sx={{
                fontSize: "16px",
                color: "#656565  ",
                fontFamily: "Gill Sans",
              }}
            >
              <ListItem>Specialised Expertise</ListItem>
              <ListItem>Cost Effective</ListItem>
              <ListItem>Data Privacy</ListItem>
              <ListItem>No-Data, No-Charge</ListItem>
              <ListItem>Free Evaluation</ListItem>
            </List>
          </Grid>
          <Grid item lg={3} xs={12} sx={head_style}>
            Laptop Services
            <List
              sx={{
                fontSize: "16px",
                color: "#656565  ",
                fontFamily: "Gill Sans",
              }}
            >
              <ListItem>Refurbished Laptops</ListItem>
              <ListItem>Free Laptop Diagnostics</ListItem>
              <ListItem>Comprehensive Hardware Repairs</ListItem>
              <ListItem>Software Troubleshooting and Installation</ListItem>
              <ListItem>Performance Upgrades for a Faster Experience</ListItem>
            </List>
          </Grid>
          <Grid item lg={3} sx={head_style} xs={12}>
            Contact Info
            <List
              sx={{
                fontSize: "18px",
                color: "#656565  ",
                fontFamily: "Gill Sans",
              }}
            >
              <ListItem>Dharmendra Kumar Jain</ListItem>
              <ListItem>
                Logic Control System, Jayendraganj, Gwalior , M.P.
              </ListItem>

              <ListItem>logicdharm19@gmail.com</ListItem>
              <ListItem>+91-9826264568</ListItem>
              <ListItem>Mon - Sat 11:00 a.m. - 8:30 p.m.</ListItem>
            </List>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
