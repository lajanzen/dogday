import React from "react";
import styles from "./SearchProfileCard.module.css";

export type SearchProfileCardProps = {
  type: string;
  imgSrc?: string;
  name: string;
  info: string | number;
  className?: string;
};

function SearchProfileCard({
  type,
  className,
  imgSrc,
  name,
  info,
}: SearchProfileCardProps): JSX.Element {
  return (
    <div className={`${styles.container} ${className}`}>
      <div className={styles.profileImageWrapper}>
        <img className={styles.profileImage} src={imgSrc} alt="" />
      </div>
      <span className={styles.profileName}>{name}</span>
      <span className={styles.profileInfo}>
        {type === "dog" ? `${info} Jahre alt` : info}
      </span>
    </div>
  );
}

export default SearchProfileCard;
