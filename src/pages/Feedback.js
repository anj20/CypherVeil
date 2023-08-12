import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import "./Feedback.css";
import {
  Button,
  CssBaseline,
  TextField,
  Grid,
  Box,
  Typography,
  Container,
} from "@mui/material";
function Contact() {
  useEffect(() => {
    AOS.init();
  }, []);

  const postFeedback = (e) => {
    e.preventDefault();
    alert("Feedback Submitted");
    fetch(`${process.env.REACT_APP_BASE_URL}add-feedback`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        reviews: feedbackData.reviews,
        ratings: feedbackData.ratings,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  const [feedbacks, setFeedbacks] = useState([]);
  console.log(feedbacks);
  const getFeedback = () => {
    fetch(`${process.env.REACT_APP_BASE_URL}get-feedbacks`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setFeedbacks(data);
      });
  };
  useEffect(() => {
    getFeedback();
  }, []);

  const [selectedItem, setSelectedItem] = useState(null);

  const arr = [
    "Good Idea and well-developed Site",
    "Good Idea But site can be improved",
    "A Decent attempt, needs improvement",
    "Encountered a lot of Bugs in site",
  ];
  const [feedbackData, setfeedbackData] = useState({
    reviews: "",
    ratings: "",
  });
  const [buttonClicked, setbuttonClicked] = useState({});

  const handleChange = (e) => {
    const { value, name } = e.target;

    setfeedbackData((prevSignInData) => ({
      ...prevSignInData,
      [name]: value,
    }));
  };

  const handleClick = (value) => {
    setSelectedItem(value);
    setfeedbackData((prevSignInData) => ({
      ...prevSignInData,
      ratings: value,
    }));

    setbuttonClicked({
      backgroundColor: "#2D2D2D",
      transform: "scale(1.05)",
      cursor: "pointer",
    });
  };
  return (
    <Box className="primary" style={{ width: "100%", height: "100%" }}>
      <Container component="main" className="cyanLine" style={{ width: "60%" }}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        ></Box>

        <Box display="flex" justifyContent="center">
          <Typography variant="h5">Tell us About Your Experience</Typography>
        </Box>

        <Box component="form" sx={{ mt: 3 }} onSubmit={postFeedback}>
          <Grid container spacing={2}>
            <Grid item xs={12} style={{}}>
              <TextField
                multiline
                required
                fullWidth
                name="reviews"
                rows="10"
                label="Your Valuable Feedback"
                value={setfeedbackData.reviews}
                onChange={handleChange}
                InputProps={{
                  style: { color: "grey" }, // Set text color
                  placeholder: "Your Placeholder Text", // Placeholder text
                }}
                InputLabelProps={{
                  style: { color: "white" }, // Set label color
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography margin="auto" variant="gutterbottom">
                Rate Us :-{" "}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Box
                display="flex"
                alignContent="stretch"
                gap="5px"
                className="ratings-box-container"
              >
                {arr.map((item, idx) => (
                  <Box
                    className="rating-box"
                    key={idx}
                    style={selectedItem === item ? buttonClicked : {}}
                    onClick={() => handleClick(item)}
                  >
                    <Typography name="ratings">{item}</Typography>
                  </Box>
                ))}
              </Box>
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{ backgroundColor: " #2D2D2D" }}
              className="custom-button"
            >
              Submit
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Typography variant="body2" underline="none"></Typography>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
export default Contact;
