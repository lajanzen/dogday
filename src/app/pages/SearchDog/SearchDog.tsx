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
        <ProfileCard
          className={styles.main__profile}
          imgSrc={imgSrc}
          name={name}
          info={info}
        />
        <DecisionBoard className={styles.main__decisionBoard} />
      </main>
    </div>
  );
}

export default SearchDog;
