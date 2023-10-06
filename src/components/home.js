import { Typography, Grid } from "@mui/material";
import MemoryIcon from "@mui/icons-material/Memory";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import TypesTable from "./table";
import LastSection from "./LastSection";
import "../App.css";
const imagePath = process.env.PUBLIC_URL + "/design.png";

export default function Home() {
  const box_style = {
    width: { xs: "400px" },
    height: { xs: "170px", lg: "140px" },
    border: "3px solid #0056a4 ",
    borderRadius: "90px",
    display: "flex",
    justifyContent: "center",
    padding: "10px",
    marginRight: { xs: "20px" },
    justifyItems: "center",
    textAlign: "center",
    flexDirection: "column",
    fontSize: { lg: "23px", xs: "28px" },
    fontFamily: "initial",
    backgroundColor: "#cdecf8 ",
    marginBottom: "40px",
  };
  const block_style = {
    height: { xs: "200px" },
    justifyContent: "center",
    justifyItems: "center",
    textAlign: "center",
    flexDirection: "column",
    fontSize: "20px",
    fontFamily: "initial",
    // backgroundColor: "#b8dcfd ",
  };

  return (
    <>
      <Grid container className="no-text-select">
        <Grid
          item
          lg={10}
          sx={{
            display: "flex",
            alignItems: "center",
            height: { lg: "60px", xs: "180px" },
            width: { xs: "410px" },
            fontSize: "30px",

            fontFamily: "Gill Sans",

            // letterSpacing: "3px",
            paddingLeft: "20px",
          }}
        >
          LOGIC CONTROL SYSTEM
        </Grid>
        <Grid item lg={2} sx={{ paddingTop: "15px", letterSpacing: "8px" }}>
          DHARMENDRA KUMAR JAIN
        </Grid>
      </Grid>
      <Grid
        container
        className="no-text-select"
        direction="row"
        sx={{ width: { xs: "410px", lg: "1450px" } }}
      >
        <Grid
          container
          className="no-text-select"
          direction="column"
          sx={{
            width: { lg: "840px", xs: "410px" },
            backgroundColor: "#3696ef",
          }}
          display="flex"
          justifyContent="center"
          paddingLeft="40px"
        >
          <Grid item>
            <Typography
              color="white"
              fontSize="70px "
              fontFamily="roboto"
              fontWeight="bold"
            >
              Data Emergency! <br />
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              color="white"
              fontSize="40px"
              fontFamily="roboto"
              fontWeight="bold"
            >
              Fast and Reliable Hard Drive Data Recovery Starts Here."
            </Typography>
          </Grid>
          <Grid
            item
            width="300px"
            height="70px"
            sx={{
              backgroundColor: "#1A446D",
              fontSize: "20px",
              borderRadius: "5px",
              color: "white",
              letterSpacing: "2px",
              marginTop: "30px",
              textAlign: "center",
              fontFamily: "serif",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <PhoneInTalkIcon /> Call for a free Evaluation <br /> Ph:
            +919826264568
          </Grid>
        </Grid>
        <Grid
          item
          lg={5}
          sm={12}
          sx={{
            backgroundImage: `url(${imagePath})`,
            backgroundColor: "#3696ef",
            height: { lg: "500px", xs: "400px" },
            width: { lg: "1440", xs: "530px" },
          }}
        ></Grid>
      </Grid>
      <Grid
        container
        className="no-text-select"
        direction="row"
        sx={{
          // backgroundColor: "#cdecf8",
          width: { xs: "410px", lg: "1450px" },
        }}
        columnGap={4}
        rowGap={4}
        paddingLeft="30px"
      >
        <Grid
          item
          lg={12}
          xs={12}
          sx={{
            display: "flex",
            height: { xs: "350px", lg: "240px" },
            justifyContent: "center",
            letterSpacing: "1px",
          }}
        >
          <Typography
            paddingTop="100px"
            fontSize="36px"
            fontFamily="roboto"
            fontWeight="bold"
          >
            Regardless of the Reason Behind Your Data Loss, We are Your Solution
          </Typography>
        </Grid>
        <Grid item lg={2} sm={12} sx={box_style}>
          Deleted or lost partition on hard disk
        </Grid>
        <Grid item lg={2} sm={12} sx={box_style}>
          Unexpectedly format the hard drive
        </Grid>
        <Grid item lg={2} sm={12} sx={box_style}>
          Computer viruses
        </Grid>
        <Grid item lg={2} sm={12} sx={box_style}>
          Unexpected power cut
        </Grid>
        <Grid item lg={2} sm={12} sx={box_style}>
          Other 100+ data loss scenarios
        </Grid>
      </Grid>

      <Grid
        container
        className="no-text-select"
        direction="row"
        columnGap={18}
        sx={{
          backgroundColor: "#cdecf8",
          width: { xs: "410px", lg: "1450px" },
        }}
      >
        <Grid
          item
          lg={12}
          sm={12}
          sx={{
            paddingLeft: { xs: "50px" },
            display: "flex",
            justifyContent: { xs: "center", lg: "center" },
            height: { lg: "230px", xs: "130px" },
          }}
        >
          <Typography
            paddingTop="70px"
            fontSize="36px"
            fontFamily="roboto"
            fontWeight="bold"
          >
            Why Choose Us?
          </Typography>
        </Grid>
        <Grid item lg={3} height="150px" marginLeft="20px" sx={block_style}>
          <CurrencyRupeeIcon sx={{ fontSize: "50px" }} /> <br />
          <br />
          Affordable Data Recovery Solutions Tailored to Your Budget
        </Grid>
        <Grid item lg={3} height="150px" sx={block_style}>
          <MemoryIcon sx={{ fontSize: "50px" }} /> <br />
          <br />
          Retrieving all type of types of data loss from Any Hard Drive Make or
          Model
        </Grid>
        <Grid item lg={3} height="150px" sx={block_style}>
          <SupportAgentIcon sx={{ fontSize: "50px" }} /> <br />
          <br />
          We are experienced data expert with International Support that you can
          trust
        </Grid>
      </Grid>
      <Grid container>
        <TypesTable />
      </Grid>
      <LastSection />
    </>
  );
}
