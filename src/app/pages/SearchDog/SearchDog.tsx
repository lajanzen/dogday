import React from "react";
import DecisionBoard from "../../components/DecisionBoard/DecisionBoard";
import NavBar from "../../components/NavBar/NavBar";
import ProfileCard, {
  ProfileCardProps,
} from "../../components/ProfileCard/ProfileCard";
import styles from "./SearchDog.module.css";

function SearchDog({ imgSrc, name, info }: ProfileCardProps): JSX.Element {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <NavBar />
      </header>
      <main className={styles.main}>
        <div className={styles.main__profile}>
          <ProfileCard imgSrc={imgSrc} name={name} info={info} />
        </div>
        <div className={styles.main__decisionBoard}>
          <DecisionBoard />
        </div>
      </main>
    </div>
  );
}

export default SearchDog;
