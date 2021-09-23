import React from "react";
import HeartIcon from "../Icons/HeartIcon";
import ProfileIcon from "../Icons/ProfileIcon";
import SearchIcon from "../Icons/SearchIcon";
import LinkComponent from "../LinkComponent/LinkComponent";
import styles from "./NavBar.module.css";

type NavBarProps = {
  activeLink?: "profile" | "matches" | "searchmatch";
};

function NavBar({ activeLink }: NavBarProps): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        <LinkComponent
          link="/profile"
          variant="round"
          active={activeLink === "profile"}
        >
          <ProfileIcon />
        </LinkComponent>
        <LinkComponent
          link="/matches"
          variant="round"
          active={activeLink === "matches"}
        >
          <HeartIcon />
        </LinkComponent>
        <LinkComponent
          link="/searchmatch"
          variant="round"
          active={activeLink === "searchmatch"}
        >
          <SearchIcon />
        </LinkComponent>
      </div>
      <img className={styles.logo} src="/smallLogo.png" />
    </div>
  );
}

export default NavBar;
