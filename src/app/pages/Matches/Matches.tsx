import React, { useEffect, useState } from "react";
import { UserDog, UserSitter } from "../../../types";
import DogIcon from "../../components/Icons/DogIcon";
import MatchCard from "../../components/MatchCard/MatchCard";
import NavBar from "../../components/NavBar/NavBar";
import styles from "./Matches.module.css";

function Matches(): JSX.Element {
  const [users, setUsers] = useState<UserSitter[] | UserDog[]>([]);
  const [loggedInUser, setloggedInUser] = useState<UserSitter | UserDog | null>(
    null
  );

  useEffect(() => {
    fetch("/api/matches")
      .then((response) => response.json())
      .then((users) => setUsers(users));

    fetch("/api/users/me")
      .then((response) => response.json())
      .then((user) => setloggedInUser(user));
  }, []);

  function age(birthYear: number): number {
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
  }

  if (!loggedInUser) {
    return <p>Please log in</p>;
  }

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
