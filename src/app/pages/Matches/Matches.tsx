import React, { useEffect, useState } from "react";
import { UserType } from "../../../types";
import DogIcon from "../../components/Icons/DogIcon";
import MatchCard from "../../components/MatchCard/MatchCard";
import NavBar from "../../components/NavBar/NavBar";
import { calculateAge } from "../../utils/dates";
import styles from "./Matches.module.css";

function Matches(): JSX.Element {
  const [users, setUsers] = useState<UserType[]>([]);

  useEffect(() => {
    fetch("/api/users")
      .then((response) => response.json())
      .then((users) => setUsers(users));
  }, []);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <NavBar activeLink="matches" />
      </header>
      <main className={styles.main}>
        {users.map((user) => (
          <MatchCard
            type={user.type}
            imgSrc={user.photo}
            name={user.name}
            mail={user.email}
            phone={user.phone}
            info={
              user.type === "dog"
                ? `${calculateAge(user.birthYear)}`
                : user.experience
            }
          />
        ))}
        <footer className={styles.footer}>
          <DogIcon />
        </footer>
      </main>
    </div>
  );
}

export default Matches;
