import { useContext, useEffect } from "react";
import styles from "./Container.module.css";
import { ContractContext } from "../context/MeetingContext";
import { useNavigate } from "react-router-dom";
import { React } from "react";

const Container = () => {
  const { getallEvents, eventsList } = useContext(ContractContext);
  const navigate = useNavigate();
  const handleNavigate = (event) => {
    navigate(`/eventpage/${event.id}`);
  };

  useEffect(() => {
    getallEvents();
  }, []);

  return (
    <div className={styles.frameParent}>
      {eventsList &&
        eventsList.map((item, index) => {
          return (
            <div className={styles.frameWrapper} key={index}>
              <div className={styles.rectangleParent}>
                <div className={styles.frameChild}>
                  <img src={item[3]} alt="" />
                </div>
                <div className={styles.frameGroup}>
                  <div className={styles.frameContainer}>
                    <div className={styles.frameContainer}>
                      <div className={styles.frameParent1}>
                        <div className={styles.bsrihurh3i567384Wrapper}>
                          <div className={styles.markForReminder}>
                            {item[0].slice(0, 15)}...
                          </div>
                        </div>
                        <div className={styles.ageLimit18}>
                          Age Limit: {item[6].toNumber()}+
                        </div>
                      </div>
                      <div className={styles.loremIpsumDolor}>{item[2]}</div>
                    </div>
                    <div className={styles.date23052023TimeContainer}>
                      <p className={styles.time1400Gst}>Date: {item[4]}</p>
                      <p className={styles.time1400Gst}>Topics: {item[5]}</p>
                    </div>
                  </div>
                  <div
                    className={styles.markForReminderWrapper}
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href =
                        "https://calendar.google.com/calendar";
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    <div className={styles.markForReminder}>
                      Mark for Reminder
                    </div>
                  </div>
                  <div
                    className={styles.markForReminderWrapper}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigate(item);
                    }}
                  >
                    <button className={styles.markForReminder}>About</button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Container;
