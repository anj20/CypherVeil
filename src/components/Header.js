import { useMemo, useContext, useEffect } from "react";
import styles from "./Header.module.css";
import { ContractContext } from "../context/MeetingContext";
import { React } from "react";
const Header = ({
  propTop,
  propLeft,
  propCursor,
  propFlex,
  propTextAlign,
  onFrameContainer2Click,
}) => {
  const { connectWallet, currentAccount, checkIfWalletIsConnected } =
    useContext(ContractContext);
  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);
  const frameDivStyle = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  const frameDiv1Style = useMemo(() => {
    return {
      cursor: propCursor,
    };
  }, [propCursor]);

  const hostStyle = useMemo(() => {
    return {
      flex: propFlex,
      textAlign: propTextAlign,
    };
  }, [propFlex, propTextAlign]);

  return (
    <div className={styles.whisperParent} style={frameDivStyle}>
      <div className={styles.whisper}>Whisper</div>
      <div className={styles.dashboard}>Dashboard</div>
      <div className={styles.frameParent}>
        <div
          className={styles.hostWrapper}
          onClick={onFrameContainer2Click}
          style={frameDiv1Style}
        >
          <div className={styles.host} style={hostStyle}>
            Host
          </div>
        </div>
        <div className={styles.bsrihurh3i567384Wrapper}>
          <div className={styles.whisper}>
            {!currentAccount ? (
              <button onClick={connectWallet()}>Connect Wallet</button>
            ) : (
              <div>{currentAccount.slice(0, 12)}...</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
