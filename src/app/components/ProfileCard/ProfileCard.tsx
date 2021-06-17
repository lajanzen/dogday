import React from "react";
import styles from "./ProfileCard.module.css";

type ProfileCardProps = {
  imgSrc: string;
  name: string;
  info: string;
};

function ProfileCard({ imgSrc, name, info }: ProfileCardProps): JSX.Element {
  return (
    <div className={styles.container}>
      <img className={styles.profileImage} src={imgSrc} alt="" />
      <span className={styles.profileName}>{name}</span>
      <span className={styles.profileInfo}>{info}</span>
    </div>
  );
}

export default ProfileCard;
