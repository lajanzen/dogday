import React from "react";
import HeartIcon from "../Icons/HeartIcon";
import ProfileIcon from "../Icons/ProfileIcon";
import SearchIcon from "../Icons/SearchIcon";
import LinkComponent from "../LinkComponent/LinkComponent";
import styles from "./NavBar.module.css";

function NavBar(): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        <LinkComponent link="#" variant="round">
          <ProfileIcon />
        </LinkComponent>
        <LinkComponent link="#" variant="round">
          <HeartIcon />
        </LinkComponent>
        <LinkComponent link="#" variant="round">
          <SearchIcon />
        </LinkComponent>
      </div>
      <img className={styles.logo} src="/smallLogo.png" />
    </div>
  );
}

export default NavBar;
