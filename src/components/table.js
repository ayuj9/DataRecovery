import {
  Table,
  TableRow,
  TableHead,
  TableCell,
  TableContainer,
  Grid,
  Typography,
} from "@mui/material";
import "../App.css";
import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import TopicIcon from "@mui/icons-material/Topic";
import DescriptionIcon from "@mui/icons-material/Description";

export default function TypesTable() {
  const type_head = {
    textAlign: "center",
    fontWeight: "bold",
    color: "black",
    fontSize: "17px",
    fontFamily: "inherit",
    letterSpacing: "1.5px",
    width: "240px",
  };

  const type_body = {
    color: "grey",
    width: { lg: "810px", xs: "380px" },
    justifyContent: "left",
    textAlign: "left",

    display: "flex",
  };

  return (
    <>
      <Grid
        container
        className="no-text-select"
        direction="column"
        sx={{
          paddingTop: { lg: "90px", xs: "0px" },
          height: { lg: "540px", xs: "0px" },
        }}
      >
        <Grid
          item
          lg={5}
          display={{ xs: "none", lg: "contents" }}
          sx={{ width: "600px", height: { xs: "2px" } }}
        >
          <img
            alt="brandSupport"
            height="400px"
            width="570px"
            src="https://www.brandsupport.ro/Images/logo2.png"
          />
        </Grid>
        <Grid item lg={7} display={{ xs: "none", lg: "contents" }}>
          <img
            alt="brandlogo"
            width="600px"
            height="400px"
            src="https://mynewmicrophone.com/wp-content/uploads/2021/12/mnm_Top_11_Best_External_Hard_Drive_Brands_For_MusicAudio_large.jpg"
          />
        </Grid>
      </Grid>
      <Grid item height="120px">
        .
      </Grid>
      <Grid
        container
        className="no-text-select"
        sx={{
          height: { xs: "800px", lg: "600px" },
          width: { xs: "420px", lg: "1450px" },
        }}
      >
        <TableContainer
          className="no-text-select"
          sx={{
            justifyContent: "center",
            direction: "column",
            display: "flex",
            width: { xs: "410px", lg: "1450px" },
          }}
        >
          <Table
            sx={{
              border: "2px solid black",
              direction: "column",
              // display: "flex",
              justifyContent: "center",
              height: "500px",
              width: { xs: "410px" },
              marginLeft: { lg: "80px", xs: "10px" },
            }}
          >
            <TableHead>
              <TableRow
                sx={{
                  backgroundColor: "#a1cef8",
                }}
              >
                <TableCell
                  sx={{
                    fontSize: "26px",
                    fontFamily: "roboto",
                    fontWeight: "bold",
                    letterSpacing: "1.5px",
                    height: { xs: "80px" },
                    width: "100px",
                    textAlign: "center",
                  }}
                >
                  Support Types
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={type_body}>
                  <Typography sx={type_head}>
                    <PhotoSizeSelectActualIcon
                      color="primary"
                      sx={{ fontSize: "30px" }}
                    />
                    &nbsp;&nbsp; Photos
                  </Typography>
                  <br />
                  JPG/JPEG, TIFF/TIF, PNG, BMP, GIF, PSD, CRW, CR2, NEF, ORF,
                  SR2, MRW,etc.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={type_body}>
                  <Typography sx={type_head}>
                    <VideoCameraBackIcon
                      color="primary"
                      sx={{ fontSize: "30px", paddingLeft: "10px" }}
                    />
                    &nbsp;&nbsp; Videos
                  </Typography>
                  AVI, MOV, MP4, M4V, 3GP, 3G2, WMV, MKV, ASF, FLV, F4V, SWF,
                  MPG, RM/RMVB, etc.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={type_body}>
                  <Typography sx={type_head}>
                    <LibraryMusicIcon
                      color="primary"
                      sx={{ fontSize: "30px" }}
                    />
                    &nbsp;&nbsp; Audios
                  </Typography>
                  MP3, AIF/AIFF, M4A, WMA, APE, AAC, WAV, FLAC, DTS and other
                  audio formats.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={type_body}>
                  <Typography sx={type_head}>
                    <TopicIcon
                      color="primary"
                      sx={{ paddingRight: "15px", fontSize: "30px" }}
                    />
                    &nbsp;&nbsp; Files
                  </Typography>
                  DOC/DOCX, XLS/XLSX, PPT/PPTX, CWK, HTML/HTM, INDD, EPS, RTF,
                  and so on.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={type_body}>
                  <Typography sx={type_head}>
                    <DescriptionIcon
                      color="primary"
                      sx={{ fontSize: "30px", paddingLeft: "10px" }}
                    />
                    &nbsp;&nbsp; RAR/ZIP
                  </Typography>
                  RAR, ZIP, 7Z, BZ2, ISO, IMG, TAR, GZ, TAZ, TGZ, LHA, DMG and
                  so much more.
                </TableCell>
              </TableRow>
            </TableHead>
          </Table>
        </TableContainer>
      </Grid>
    </>
  );
}
