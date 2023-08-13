import { useState, useContext, useEffect } from "react";
import { Slider } from "antd";
import "./EventHostingPage.css";
import { useNavigate } from "react-router-dom";
import { ContractContext } from "../context/MeetingContext";
import { React } from "react";
const EventHostingPage = () => {
  const navigate = useNavigate();
  const {
    uploadToIPFS,
    currentAccount,
    checkIfWalletIsConnected,
    connectWallet,
    addEvents,
  } = useContext(ContractContext);
  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);
  const [imh, setimh] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [topics, setTopics] = useState("");
  const [age, setAge] = useState([0]);
  const [description, setDescription] = useState("");
  const [thumbnail, setthumbnail] = useState({
    backgroundImage: ``,
    zIndex: 1,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  });

  const handleSliderChange = (value) => {
    setAge(value);
    console.log(age);
  };

  const handleChange = async (e) => {
    const file = e.target.files[0];
    try {
      const hash = await uploadToIPFS(file);
      setimh(hash);
      setthumbnail({
        ...thumbnail,
        backgroundImage: `url(${hash})`,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async () => {
    try {
      console.log(name, imh, date, topics, age, description);
      await addEvents(name, imh, date, topics, age, description);
      navigate("/dashboard");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="event-hosting-page">
      <img className="group-icon" alt="" src="/group.svg" />
      <div className="host-your-own-container">
        <span>{`Host your Own Event the `}</span>
        <span className="web3">web3</span>
        <span> way</span>
      </div>
      <div className="event-name">Event Name:</div>
      <div className="event-description">Event Description:</div>
      <div className="select-date">Select Date:</div>
      <div className="age-check">Age Check:</div>
      <div className="related-topics">Related Topics:</div>
      <textarea
        className="event-hosting-page-child"
        required
        rows={10}
        cols={5}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        style={{ paddingLeft: "20px", paddingTop: "20px" }}
      />
      <textarea
        className="event-hosting-page-item"
        required
        rows={5}
        cols={5}
        onChange={(e) => {
          setTopics(e.target.value);
        }}
        style={{ paddingLeft: "20px", paddingTop: "20px" }}
      />
      <input
        className="event-hosting-page-inner"
        type="file"
        onChange={handleChange}
        style={thumbnail}
      />
      <div className="upload-event-thumbnail">Upload Event thumbnail</div>
      <div className="rectangle-parent">
        <input
          className="frame-child"
          type="text"
          required
          onChange={(e) => {
            setName(e.target.value);
          }}
          styles={{ paddingLeft: "20px" }}
        />

        <input
          className="frame-child"
          type="date"
          required
          onChange={(e) => {
            setDate(e.target.value);
          }}
          style={{
            paddingLeft: "20px",
            paddingRight: "50px",
            colorScheme: "dark",
          }}
          color="white"
        />
      </div>
      <Slider
        className="frame-slider"
        style={{ width: 600 }}
        min={0}
        max={100}
        range={{ draggableTrack: true }}
        defaultValue={[0]}
        onChange={handleSliderChange}
      />
      <div className="host-event-wrapper" onClick={handleSubmit}>
        <div className="host-event">Host Event</div>
      </div>
      <div className="whisper-2023">© Whisper 2023</div>
      <div className="whisper-parent">
        <div
          className="host-event"
          onClick={() => {
            navigate("/");
          }}
        >
          Whisper
        </div>
        <div className="dashboard">Dashboard</div>
        <div className="frame-parent">
          <div className="bsrihurh3i567384-wrapper">
            {!currentAccount ? (
              <button className="connect-wallet" onClick={connectWallet}>
                Connect Wallet
              </button>
            ) : (
              <div className="host-event">{currentAccount.slice(0, 15)}...</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventHostingPage;
