import { Typography, Grid, CardActionArea } from "@mui/material";
import MemoryIcon from "@mui/icons-material/Memory";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import TypesTable from "./table";
import LastSection from "./LastSection";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import "../App.css";
// const imagePath = process.env.PUBLIC_URL + "/design.png";
const harddisk = process.env.PUBLIC_URL + "/harddrive1.png";
const virus = process.env.PUBLIC_URL + "/virus.jpg";
const nofile = process.env.PUBLIC_URL + "/nofile.jpg";
const error = process.env.PUBLIC_URL + "/error.png";
const bin = process.env.PUBLIC_URL + "/bin.png";

export default function Home() {
  const block_style = {
    height: { xs: "200px" },
    justifyContent: "center",
    justifyItems: "center",
    textAlign: "center",
    flexDirection: "column",
    fontSize: "20px",
    fontFamily: "initial",
  };

  const text_style = {
    fontFamily: "roboto",
    fontSize: { lg: "40px", xs: "20px" },
    fontWeight: "bold",
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
        className="bg-home"
        direction="row"
        sx={{ width: { xs: "410px", lg: "1450px" } }}
      >
        <Grid
          container
          direction="column"
          sx={{
            width: { lg: "840px", xs: "410px" },
          }}
          display="flex"
          justifyContent="center"
          paddingLeft="40px"
        >
          <Grid item className="no-text-select">
            <Typography
              color="red"
              fontSize="18px "
              fontFamily="inherit"
              fontWeight="bold"
            >
              PROFESSIONAL HDD RECOVERY SERVICE
            </Typography>
          </Grid>
          <Grid item className="no-text-select">
            <Typography
              color="black"
              fontSize="70px "
              fontFamily="roboto"
              fontWeight="bold"
            >
              Data Emergency! <br />
            </Typography>
          </Grid>
          <Grid item className="no-text-select">
            <Typography
              color="#474646"
              fontSize="34px"
              fontFamily="roboto"
              fontWeight="bold"
            >
              "Fast and Reliable Hard Drive Data Recovery <br /> Starts Here"
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
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
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
            backgroundImage: `url(${harddisk})`,
            // backgroundColor: "#3696ef",
            height: { lg: "500px", xs: "400px" },
            width: { lg: "1440", xs: "530px" },
            // borderRadius: "10px", // Adjust radius as needed
            // overflow: "hidden",
          }}
        />
      </Grid>
      <Grid
        container
        classname="bg-home"
        // className="no-text-select"
        direction="row"
        sx={{
          // backgroundColor: "#cdecf8",

          width: { xs: "410px", lg: "1450px" },
        }}
        columnGap={6}
        rowGap={4}
        paddingLeft="60px"
        paddingBottom="16px"
      >
        <Grid
          item
          lg={12}
          xs={12}
          sx={{
            display: "flex",
            height: { xs: "350px", lg: "170px" },
            // justifyContent: "center",
            letterSpacing: "1px",
          }}
        >
          <Typography
            paddingTop="60px"
            pl={5}
            fontSize="36px"
            fontFamily=""
            fontWeight="bold"
          >
            Regardless of the Reason Behind Your Data Loss, We are Your Solution
          </Typography>
        </Grid>

        <Card
          sx={{
            maxWidth: 300,
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            border: "2px solid transparent",
            "&:hover::before": {
              opacity: 1, // Show gradient on hover
            },
            "&:hover": {
              borderColor: "black",
              transform: "scale(1.03)", // Optional zoom effect
              transition: "transform 0.3s",

              boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.3)", // Add shadow on hover
            },
          }}
        >
          <CardActionArea>
            <CardMedia sx={{ height: 160, backgroundImage: `url(${bin})` }} />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Accidental Deletion
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Accidental deletions, whether from a mistaken SHIFT+DEL or
                clearing the Recycle Bin, are common occurrences. For complex
                data loss situations, trust our professionals to restore your
                hard disk data.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card
          sx={{
            maxWidth: 300,
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            border: "2px solid transparent",
            "&:hover::before": {
              opacity: 1, // Show gradient on hover
            },
            "&:hover": {
              borderColor: "black",
              transform: "scale(1.03)", // Optional zoom effect
              transition: "transform 0.3s",

              boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.3)", // Add shadow on hover
            },
          }}
        >
          <CardActionArea>
            <CardMedia
              sx={{ height: 160, backgroundImage: `url(${nofile})` }}
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Data loss Due to Drive Formatting
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Formatting a hard drive partition is a common cause of data
                loss, especially when drives become slow or are impacted by
                malware.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card
          sx={{
            maxWidth: 300,
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            border: "2px solid transparent",
            "&:hover::before": {
              opacity: 1, // Show gradient on hover
            },
            "&:hover": {
              borderColor: "black",
              transform: "scale(1.03)", // Optional zoom effect
              transition: "transform 0.3s",

              boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.3)", // Add shadow on hover
            },
          }}
        >
          <CardActionArea>
            <CardMedia sx={{ height: 160, backgroundImage: `url(${virus})` }} />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Computer viruses
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Viruses can severely damage data integrity by corrupting or
                deleting files. If your HDD data, files, or folders are affected
                by a virus, we can help recover them
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card
          sx={{
            maxWidth: 300,
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            border: "2px solid transparent",
            "&:hover::before": {
              opacity: 1, // Show gradient on hover
            },
            "&:hover": {
              borderColor: "black",
              transform: "scale(1.03)", // Optional zoom effect
              transition: "transform 0.3s",

              boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.3)", // Add shadow on hover
            },
          }}
        >
          <CardActionArea>
            <CardMedia sx={{ height: 160, backgroundImage: `url(${error})` }} />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Unexpected power cut
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Viruses can severely damage data integrity by corrupting or
                deleting files. If your HDD data, files, or folders are affected
                by a virus, we can help recover them
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid
        item
        sx={{
          height: { lg: "150px" },
          width: { lg: "1450px", xs: "350px" },
          fontFamily: "roboto",
          fontSize: { lg: "40px", xs: "20px" },
          fontWeight: "bold",
          textAlign: "center",
          alignItems: "center",
          letterSpacing: "2px",
          display: "flex",
          justifyContent: "center",
          paddingTop: "10px",
        }}
      >
        <Typography sx={text_style}>Higher</Typography>
        <Typography color="red" sx={text_style}>
          &nbsp; Success
        </Typography>
        <Typography sx={text_style}>, Higher </Typography>
        <Typography color="red" sx={text_style}>
          &nbsp; Data Quality
        </Typography>
      </Grid>
      <Grid
        container
        className="bg-home"
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
            height: { lg: "140px", xs: "130px" },
          }}
        >
          <Typography
            paddingTop="40px"
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
