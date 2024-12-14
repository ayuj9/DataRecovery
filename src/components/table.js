import {
  Grid,
} from "@mui/material";
import "../App.css";
const brand = process.env.PUBLIC_URL + "/support.png";

export default function TypesTable() {

  return (
    <>
      <Grid
        container
        className="no-text-select"
        direction="column"
        alignItems="center"
        sx={{
          pl: "30px",
          margin: "17px",
          height: { lg: "690px", xs: "0px" },
        }}
      >
        <Grid
          item
          lg={12}
          justifyContent="center"
          display="flex"
          justifyItems="center"
          // display={{ xs: "none", lg: "contents" }}
          sx={{
            pl: "20px",
            boxShadow: "0px 6px 13px rgba(0, 0, 0, 0.2)",
            border: "2px solid black",
            borderRadius: "100px",
            height: "870px",
            width: "1070px",
            backgroundImage: `url(${brand})`,
          }}
        ></Grid>
      </Grid>
      <Grid item height="40px">
        .
      </Grid>
     
    </>
  );
}
