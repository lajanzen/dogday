import React from "react";
import styles from "./ProfileCard.module.css";

export type ProfileCardProps = {
  imgSrc: string;
  name: string;
  info: string;
  className?: string;
};

function ProfileCard({
  className,
  imgSrc,
  name,
  info,
}: ProfileCardProps): JSX.Element {
  return (
    <div className={`${styles.container} ${className}`}>
      <img className={styles.profileImage} src={imgSrc} alt="" />
      <span className={styles.profileName}>{name}</span>
      <span className={styles.profileInfo}>{info}</span>
    </div>
  );
}

export default ProfileCard;
