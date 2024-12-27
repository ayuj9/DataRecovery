import {
  Table,
  TableRow,
  TableHead,
  TableCell,
  TableContainer,
  Grid,
  Typography,
  TableBody,
  CardActionArea,
} from "@mui/material";
import "../App.css";
import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import TopicIcon from "@mui/icons-material/Topic";
import DescriptionIcon from "@mui/icons-material/Description";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
const support = process.env.PUBLIC_URL + "/support.png";

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
          // paddingLeft: 30,
          justifyContent: "center",
          alignItems: "center",
          paddingTop: { lg: "10px", xs: "0px" },
          marginBottom: "20px",
          height: { lg: "540px", xs: "0px" },
        }}
      >
        <Card
          sx={{
            maxWidth: 800,

            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            border: "2px solid transparent",
            "&:hover::before": {
              opacity: 1, // Show gradient on hover
            },
            "&:hover": {
              transform: "scale(1.03)", // Optional zoom effect
              transition: "transform 0.3s",

              boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.3)", // Add shadow on hover
            },
          }}
        >
          <CardActionArea>
            <CardMedia
              sx={{
                height: 460,
                width: 850,
                backgroundImage: `url(${support})`,
              }}
            />
          </CardActionArea>
        </Card>
      </Grid>

      <Grid container justifyContent={"center"}>
        <Grid
          item
          sx={{ border: "1px solid black", borderRadius: "15px" }}
          lg={7}
          md={9}
          xs={12}
        >
          <div
            style={{
              fontSize: "26px",
              fontFamily: "roboto",
              fontWeight: "bold",
              letterSpacing: "1.5px",
              textAlign: "center",
              backgroundColor: "#a1cef8",
              textAlign: "center",
              borderRadius: "15px",
              paddingTop: "20px",
              paddingBottom: "20px",
            }}
          >
            Data Support Types
          </div>
          <TableContainer
            sx={{
              justifyContent: "center",
              direction: "column",
              display: "flex",
            }}
          >
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell sx={type_body}>
                    <Typography sx={type_head}>
                      <PhotoSizeSelectActualIcon
                        color="primary"
                        sx={{ fontSize: "30px" }}
                      />
                      &nbsp;&nbsp; Photos
                    </Typography>
                  </TableCell>
                  <TableCell>
                    JPG/JPEG, TIFF/TIF, PNG, BMP, GIF, PSD, CRW, CR2, NEF, ORF,
                    SR2, MRW,etc.
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={type_body}>
                    <Typography sx={type_head}>
                      <VideoCameraBackIcon
                        color="primary"
                        sx={{ fontSize: "30px" }}
                      />
                      &nbsp;&nbsp; Videos
                    </Typography>
                  </TableCell>
                  <TableCell>
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
                  </TableCell>
                  <TableCell>
                    MP3, AIF/AIFF, M4A, WMA, APE, AAC, WAV, FLAC, DTS and other
                    audio formats.
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={type_body}>
                    <Typography sx={type_head}>
                      <TopicIcon color="primary" sx={{ fontSize: "30px" }} />
                      &nbsp;&nbsp; Files
                    </Typography>
                  </TableCell>
                  <TableCell>
                    DOC/DOCX, XLS/XLSX, PPT/PPTX, CWK, HTML/HTM, INDD, EPS, RTF,
                    and so on.
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={type_body}>
                    <Typography sx={type_head}>
                      <DescriptionIcon
                        color="primary"
                        sx={{ fontSize: "30px" }}
                      />
                      &nbsp;&nbsp; RAR/ZIP
                    </Typography>
                  </TableCell>
                  <TableCell>
                    RAR, ZIP, 7Z, BZ2, ISO, IMG, TAR, GZ, TAZ, TGZ, LHA, DMG and
                    so much more.
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </>
  );
}
