import { useContext, useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import styles from "./EventPage.module.css";
import { ContractContext } from "../context/MeetingContext";
const EventPage = () => {
  const { currentAccount, getEvents, checkIfWalletIsConnected, connectWallet } =
    useContext(ContractContext);
  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);
  const [eventobj, setEventobj] = useState([]);
  const { id } = useParams();
  const fetchEvent = async (id) => {
    const data = await getEvents(id);
    setEventobj(data);
  };
  useEffect(() => {
    console.log(id);
    fetchEvent(id);
  }, []);
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
          <div className={styles.loremIpsumDolor}>Date: 23/05/2023</div>
          <div className={styles.loremIpsumDolor}>Time: 14:00</div>
        </div>
        <div className={styles.date23052023Parent}>
          <div className={styles.loremIpsumDolor}>Age Limit: 18+</div>
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
        <div className={styles.loremIpsumDolor}>
          Lorem ipsum dolor sit amet, consectetur {eventobj && eventobj.name}
        </div>
        <div className={styles.bsrihurh3i567384Wrapper}>
          <div className={styles.loremIpsumDolor}>
            bsrihurh3i567384{eventobj && eventobj.owner}
          </div>
        </div>
      </div>
      <div className={styles.loremIpsumDolor1}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.{eventobj && eventobj.descp}
      </div>
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
