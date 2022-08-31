import React from "react";
import styles from "./Header.module.scss";
import inst from "../../assets/inst.png";
import telegram from "../../assets/telegram.png";
import youTube from "../../assets/youtobe.png";

const Header = () => {
  const socialUrl = {
    inst: "https://instagram.com/katerina.kexx?igshid=YmMyMTA2M2Y=",
    tele: "https://t.me/Chat_Kexx",
    youTube: "https://youtube.com/channel/UCPFbgsXDaNHEjkuAsz2tbXA",
  };

  return (
    <div className={styles.main}>
      <div className={styles.main}>
        <p className={styles.header}>Wonder Ticket</p>
        <div className={styles.social}>
          <a href={socialUrl.inst} target='_blank' rel='noreferrer'>
            <img src={inst} alt='instagram' width={30} height={30} />
          </a>
          <a href={socialUrl.tele} target='_blank' rel='noreferrer'>
            <img src={telegram} alt='instagram' width={30} height={30} />
          </a>
          <a href={socialUrl.youTube} target='_blank' rel='noreferrer'>
            <img src={youTube} alt='instagram' width={30} height={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
