import { useMemo, useContext, useEffect } from "react";
import styles from "./Container.module.css";
import { ContractContext } from "../context/MeetingContext";
import { useNavigate } from "react-router-dom";

const Container = ({
  frameDivFlex,
  frameDivAlignSelf,
  frameDivAlignSelf1,
  frameDivWidth,
  frameDivFlex1,
  frameDivAlignSelf2,
  propFlex,
}) => {
  const { getallEvents, eventsList } = useContext(ContractContext);
  const navigate = useNavigate();
  const handleNavigate = (event) => {
    navigate(`/event-page/${event.id}`);
  };

  const frameDiv2Style = useMemo(() => {
    return {
      flex: frameDivFlex,
    };
  }, [frameDivFlex]);

  const frameDiv3Style = useMemo(() => {
    return {
      alignSelf: frameDivAlignSelf,
    };
  }, [frameDivAlignSelf]);

  const rectangleDivStyle = useMemo(() => {
    return {
      alignSelf: frameDivAlignSelf1,
      width: frameDivWidth,
    };
  }, [frameDivAlignSelf1, frameDivWidth]);

  const frameDiv4Style = useMemo(() => {
    return {
      flex: frameDivFlex1,
    };
  }, [frameDivFlex1]);

  const frameDiv5Style = useMemo(() => {
    return {
      alignSelf: frameDivAlignSelf2,
    };
  }, [frameDivAlignSelf2]);

  const frameDiv6Style = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);
  useEffect(() => {
    getallEvents();
  }, []);

  return (
    <div className={styles.frameParent}>
      {eventsList &&
        eventsList.map((item, index) => {
          return (
            <div
              className={styles.frameWrapper}
              key={index}
              style={frameDiv2Style}
            >
              <div className={styles.rectangleParent} style={frameDiv3Style}>
                <div className={styles.frameChild} style={rectangleDivStyle}>
                  <img src={styles.image} alt="" />
                </div>
                <div className={styles.frameGroup}>
                  <div className={styles.frameContainer}>
                    <div className={styles.frameContainer}>
                      <div className={styles.frameParent1}>
                        <div className={styles.bsrihurh3i567384Wrapper}>
                          <div className={styles.markForReminder}>
                            {item.owner}
                          </div>
                        </div>
                        <div className={styles.ageLimit18}>Age Limit: 18+</div>
                      </div>
                      <div className={styles.loremIpsumDolor}>
                        {item.eventName}
                      </div>
                    </div>
                    <div className={styles.date23052023TimeContainer}>
                      <p className={styles.time1400Gst}>
                        Date: {item.eventDate}
                      </p>
                      <p className={styles.time1400Gst}>
                        Time: {item.eventTime} GST
                      </p>
                    </div>
                  </div>
                  <div className={styles.markForReminderWrapper}>
                    <div className={styles.markForReminder}>
                      Mark for Reminder
                    </div>
                  </div>
                  <div className={styles.markForReminderWrapper}>
                    <button
                      className={styles.markForReminder}
                      onClick={(e) => {
                        e.preventDefault();
                        console.log("clicked");
                        handleNavigate(item);
                      }}
                    >
                      About
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      <div className={styles.frameWrapper} style={frameDiv2Style}>
        <div className={styles.rectangleParent} style={frameDiv3Style}>
          <div className={styles.frameChild} style={rectangleDivStyle} />
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <div className={styles.frameContainer}>
                <div className={styles.frameParent1}>
                  <div className={styles.bsrihurh3i567384Wrapper}>
                    <div className={styles.markForReminder}>
                      bsrihurh3i567384
                    </div>
                  </div>
                  <div className={styles.ageLimit18}>Age Limit: 18+</div>
                </div>
                <div className={styles.loremIpsumDolor}>
                  Lorem ipsum dolor sit amet, consectetur
                </div>
              </div>
              <div className={styles.date23052023TimeContainer}>
                <p className={styles.time1400Gst}>Date: 23/05/2023</p>
                <p className={styles.time1400Gst}>Time: 14:00 GST</p>
              </div>
            </div>
            <div className={styles.markForReminderWrapper}>
              <div className={styles.markForReminder}>Mark for Reminder</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameWrapper} style={frameDiv4Style}>
        <div className={styles.rectangleParent} style={frameDiv5Style}>
          <div className={styles.frameItem} />
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <div className={styles.frameContainer}>
                <div className={styles.frameParent1}>
                  <div className={styles.bsrihurh3i567384Wrapper}>
                    <div className={styles.markForReminder}>
                      bsrihurh3i567384
                    </div>
                  </div>
                  <div className={styles.ageLimit18}>Age Limit: 18+</div>
                </div>
                <div className={styles.loremIpsumDolor}>
                  Lorem ipsum dolor sit amet, consectetur
                </div>
              </div>
              <div className={styles.date23052023TimeContainer}>
                <p className={styles.time1400Gst}>Date: 23/05/2023</p>
                <p className={styles.time1400Gst}>Time: 14:00 GST</p>
              </div>
            </div>
            <div className={styles.markForReminderWrapper}>
              <div className={styles.markForReminder}>Mark for Reminder</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameWrapper} style={frameDiv6Style}>
        <div className={styles.rectangleContainer}>
          <div className={styles.frameItem} />
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <div className={styles.frameContainer}>
                <div className={styles.frameParent1}>
                  <div className={styles.bsrihurh3i567384Wrapper}>
                    <div className={styles.markForReminder}>
                      bsrihurh3i567384
                    </div>
                  </div>
                  <div className={styles.ageLimit18}>Age Limit: 18+</div>
                </div>
                <div className={styles.loremIpsumDolor}>
                  Lorem ipsum dolor sit amet, consectetur
                </div>
              </div>
              <div className={styles.date23052023TimeContainer}>
                <p className={styles.time1400Gst}>Date: 23/05/2023</p>
                <p className={styles.time1400Gst}>Time: 14:00 GST</p>
              </div>
            </div>
            <div className={styles.markForReminderWrapper}>
              <div className={styles.markForReminder}>Mark for Reminder</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
