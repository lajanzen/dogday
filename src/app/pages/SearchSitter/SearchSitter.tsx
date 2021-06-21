import React from "react";
import DecisionBoard from "../../components/DecisionBoard/DecisionBoard";
import NavBar from "../../components/NavBar/NavBar";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import styles from "./SearchSitter.module.css";

function SearchSitter(): JSX.Element {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <NavBar />
      </header>
      <main className={styles.main}>
        <ProfileCard
          className={styles.main__profile}
          imgSrc="/sitter.png"
          name="Jana"
          info="Hunde-Profi"
        />
        <DecisionBoard className={styles.main__decisionBoard} />
      </main>
    </div>
  );
}

export default SearchSitter;
