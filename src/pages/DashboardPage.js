import { useCallback, useContext } from "react";
import Header from "../components/Header";
import Container from "../components/container";
import styles from "./DashboardPage.module.css";
import { React } from "react";
const DashboardPage = () => {
  const onFrameContainer2Click = useCallback(() => {
    window.location.href = "eventhost";
  }, []);
  const onFrameContainer6Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='discoverEventsText']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onFrameContainer1Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer1']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start" });
    }
  }, []);

  const onFrameContainer107Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onFrameContainer108Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onFrameContainer109Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);
  return (
    <div className={styles.dashboardPage}>
      <img className={styles.sssquiggly1Icon} alt="" src="/sssquiggly-1.svg" />
      <img className={styles.groupIcon} alt="" src="/group.svg" />
      <div className={styles.loremIpsumDolor}>
        Cryptic chambers,Under the Veil
      </div>
      <div className={styles.discoverEvents}>
        Discover Events
        <div
          className={styles.anchorDiscoverEvents}
          data-scroll-to="discoverEventsText"
        />
      </div>
      <div className={styles.filterByTopic}>Filter by topic</div>
      <div className={styles.loremIpsumDolor1}>
        At Cypherveil, we invite you to explore our captivating events and
        immersive rooms, each a gateway to unfiltered discussions. From
        thought-provoking debates to intimate heart-to-heart conversations, our
        platform is your haven to connect, share.
      </div>
      <Header onFrameContainer2Click={onFrameContainer2Click} />
      <div
        className={styles.exploreEventsWrapper}
        onClick={onFrameContainer6Click}
      >
        <div className={styles.exploreEvents}>Explore Events</div>
      </div>
      <div className={styles.frameParent} data-scroll-to="frameContainer">
        <Container />
      </div>
      <div className={styles.frameGroup}>
        <div
          className={styles.allEventsWrapper}
          data-scroll-to="frameContainer1"
          onClick={onFrameContainer1Click}
        >
          <div className={styles.exploreEvents}>All Events</div>
        </div>
        <div
          className={styles.ongoingEventsWrapper}
          onClick={onFrameContainer107Click}
        >
          <div className={styles.exploreEvents}>Ongoing Events</div>
        </div>
        <div
          className={styles.ongoingEventsWrapper}
          onClick={onFrameContainer108Click}
        >
          <div className={styles.exploreEvents}>Past Events</div>
        </div>
        <div
          className={styles.ongoingEventsWrapper}
          onClick={onFrameContainer109Click}
        >
          <div className={styles.exploreEvents}>Future Events</div>
        </div>
      </div>
      <div className={styles.whisper2023}>© CypherVeil 2023</div>
      <img className={styles.filterIcon} alt="" src="/filter.svg" />
    </div>
  );
};

export default DashboardPage;
