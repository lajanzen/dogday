import React, { useEffect, useState } from "react";
import { UserDog, UserSitter } from "../../../types";
import DogIcon from "../../components/Icons/DogIcon";
import MatchCard from "../../components/MatchCard/MatchCard";
import NavBar from "../../components/NavBar/NavBar";
import { age } from "../../utils/helpFunctions";
import styles from "./Matches.module.css";

function Matches(): JSX.Element {
  const [users, setUsers] = useState<UserSitter[] | UserDog[]>([]);

  useEffect(() => {
    fetch("/api/users")
      .then((response) => response.json())
      .then((users) => setUsers(users));
  }, []);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <NavBar />
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
              user.type === "dog" ? `${age(user.birthYear)}` : user.experience
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
