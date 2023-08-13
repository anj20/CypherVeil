import { useCallback, useState } from "react";
import "./LandingPage.css";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useAuth0 } from "@auth0/auth0-react";

const LandingPage = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  const [isLoggedIn, setisLoggedIn] = useState(false);

  const onLogin = useCallback(() => {
    window.open("dashboard");
  }, []);

  const onRectangle1Click = useCallback(() => {
    window.location.href = "/dashboard";
  }, []);

  return (
    <div className="landing-page">
      <div className="landing-page-child" />
      <div className="whisper-group">
        <div className="whisper1">CypherVeil</div>
        {/* <div className="dashboard-wrapper">
          <div className="id-like-to">Dashboard</div>
        </div> */}
        <div className="frame-group">
          {!isAuthenticated ? (
            <div className="host-container" onClick={() => loginWithRedirect()}>
              <div className="id-like-to">Sign up</div>
            </div>
          ) : (
            <div className="host-container" onClick={onLogin}>
              <div className="id-like-to">Logout</div>
            </div>
          )}
        </div>
      </div>
      <div className="unsplashbcjdbykwquw-parent">
        <img
          className="unsplashbcjdbykwquw-icon"
          alt=""
          src="/unsplashbcjdbykwquw@2x.png"
        />
        <div className="lorem-ipsum-dolor">CypherVeil</div>
        <div className="lorem-ipsum-dolor1">
          Discover the power of Web3 in hosting anonymous meets at CypherVeil
        </div>
        <div className="rectangle-group" onClick={onRectangle1Click}>
          <div className="frame-inner" />
          <KeyboardDoubleArrowRightIcon className="arrow-icon" />
          <div className="explore-events">Explore Events</div>
        </div>
        <div className="frame-inner2" />
        <div className="explore-events2">Feedback</div>
      </div>

      <div className="whisper-is-an-container">
        <p className="whisper-is-an-online-platform">
          <span className="span">"</span>
          <span className="whisper2">CypherVeil</span>
          <span>
            " is an online platform where individuals can anonymously host
            discussions on sensitive and often marginalized topics such as
            workplace harassment, mental health struggles, LGBTQ+ relationships,
            and more. Powered by Web3 and zero-knowledge-proof technology, the
            host's identity remains concealed, ensuring a safe environment for
            open conversations. Users have the option to join ongoing
            discussions, offering solutions or showing support.
          </span>
        </p>
        <p className="whisper-is-an-online-platform">&nbsp;</p>
        <p className="whisper-is-an-online-platform2">
          Recent years have witnessed a surge in harassment cases, particularly
          affecting women who either endure suffering or exit their jobs.
          Similarly, college students face increased suicide rates due to stress
          and lack of job opportunities. CypherVeil addresses these issues by
          providing a space for voices that often remain silenced due to
          societal pressures. The platform aims to connect like-minded
          individuals to offer mental support and guidance.
        </p>
      </div>
      <div className="in-essence-whisper">
        In essence, CypherVeil is a digital haven where individuals can share
        thoughts without fear of judgment, fostering a community of
        understanding and empathy
      </div>
      <div>
        <img src="/landingImage1.svg" alt="" className="landingImage1" />
      </div>
      <div>
        <img src="/landingImage2.svg" alt="" className="landingImage2" />
      </div>
      <b className="about-us">About Us</b>
      <img className="landing-page-item" alt="" src="/vector-3.svg" />
      <div>
        <img src="/github.svg" alt="" className="logo1" />
      </div>
      <div>
        <img src="/mongodb.svg" alt="" className="logo2" />
      </div>
      <div>
        <img src="/My project.png" alt="" className="logo3" />
      </div>
      <div>
        <img src="/filecoin.png" alt="" className="logo4" />
      </div>
      <div className="status-code-0">Status Code 0</div>
      <div className="id-like-toSpon">Our Sponsors</div>
      <div className="our-sponsors-parent">
        <div className="whatsapp-image-2023-08-12-at-8-parent">
          <img
            className="whatsapp-image-2023-08-12-at-8"
            alt=""
            src="/whatsapp-image-20230812-at-818-1@2x.png"
          />
          <img
            className="whatsapp-image-2023-08-12-at-81"
            alt=""
            src="/whatsapp-image-20230812-at-818-2@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
