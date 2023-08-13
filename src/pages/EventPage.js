import { useContext, useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import styles from "./EventPage.module.css";
import { ContractContext } from "../context/MeetingContext";
import { React } from "react";
const EventPage = () => {
  const { currentAccount, getEvents, checkIfWalletIsConnected, connectWallet } =
    useContext(ContractContext);
  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);
  const [age, setAge] = useState(0);
  const [eventobj, setEventobj] = useState([
    "0xADA3175373Cba57bDBA13c49A561c21eB9f25233",
    123456789012345678,
    "",
    "",
    "",
    18,
    "",
  ]);
  const { id } = useParams();
  const fetchEvent = async (id) => {
    const data = await getEvents(id);
    console.log(data);
    setAge(data[6].toNumber());
    setEventobj(data);
  };
  useEffect(() => {
    fetchEvent(id);
  }, [id]);
  const onFrameButtonClick = useCallback(() => {
    window.open("https://calendar.google.com/calendar/u/0/r");
  }, []);
  const onFrameContainer7Click = useCallback(() => {
    window.open("google.com");
  }, []);
  return (
    <div className={styles.eventPage}>
      <img className={styles.groupIcon} alt="" src="/group.svg" />
      <div className={styles.eventPageChild}>
        <img src={eventobj && eventobj.img} alt="hi" />
      </div>
      <button
        className={styles.addReminderWrapper}
        onClick={onFrameButtonClick}
      >
        <div className={styles.addReminder}>Add Reminder</div>
      </button>
      <div className={styles.frameParent}>
        <div className={styles.date23052023Parent}>
          <div className={styles.loremIpsumDolor}>Date: {eventobj[4]}</div>
          <div className={styles.loremIpsumDolor}>Topics: {eventobj[5]}</div>
        </div>
        <div className={styles.date23052023Parent}>
          <div className={styles.loremIpsumDolor}>Age Limit: {age}+</div>
          <div className={styles.ellipseParent}>
            <div className={styles.frameChild} />
            <div className={styles.frameItem} />
            <div className={styles.frameInner} />
            <div className={styles.ellipseGroup}>
              <div className={styles.ellipseDiv} />
              <div className={styles.div}>+45</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.loremIpsumDolorSitAmetCoParent}>
        <div className={styles.loremIpsumDolor}>{eventobj && eventobj[2]}</div>
        <div className={styles.bsrihurh3i567384Wrapper}>
          <div className={styles.loremIpsumDolor}>
            {eventobj && eventobj[0].slice(0, 20)}...
          </div>
        </div>
      </div>
      <div className={styles.loremIpsumDolor1}>{eventobj && eventobj[7]}</div>
      <div className={styles.whisper2023}>© Whisper 2023</div>
      <div className={styles.whisperParent}>
        <div className={styles.loremIpsumDolor}>Whisper</div>
        <div className={styles.dashboard}>Dashboard</div>
        <div className={styles.frameGroup}>
          <div className={styles.hostWrapper} onClick={onFrameContainer7Click}>
            <div className={styles.loremIpsumDolor}>Host</div>
          </div>
          <div className={styles.bsrihurh3i567384Container}>
            {currentAccount ? (
              <div className={styles.loremIpsumDolor}>
                {currentAccount.slice(0, 10)}...
              </div>
            ) : (
              <button className={styles.connectWallet} onClick={connectWallet}>
                Connect Wallet
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
