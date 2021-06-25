import React, { useEffect, useState } from "react";
import DecisionBoard from "../../components/DecisionBoard/DecisionBoard";
import NavBar from "../../components/NavBar/NavBar";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import styles from "./SearchDog.module.css";
import TinderCard from "react-tinder-card";
import { UserDog, UserSitter } from "../../../types";

function SearchDog(): JSX.Element {
  const [users, setUsers] = useState<UserSitter[] | UserDog[]>([]);

  useEffect(() => {
    fetch("/api/users")
      .then((response) => response.json())
      .then((users) => setUsers(users));
  }, []);

  console.log(users);

  const swiped = (dir: string, nameToDelete: string) => {
    console.log("removing: " + nameToDelete + dir);
  };

  const outOfFrame = (name: string) => {
    console.log(name + " left the screen!");
  };

  if (!users) {
    return <div>User not found</div>;
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <NavBar />
      </header>
      <main className={styles.main}>
        {users.map((user) => (
          <TinderCard
            key={user.name}
            onSwipe={(dir) => swiped(dir, user.name)}
            onCardLeftScreen={() => outOfFrame(user.name)}
            preventSwipe={["up", "down"]}
          >
            <ProfileCard
              className={styles.main__profile}
              imgSrc={user.photo}
              name={user.name}
              info={user.type === "sitter" ? user.experience : user.age}
            />
          </TinderCard>
        ))}
      </main>
      <DecisionBoard className={styles.main__decisionBoard} />
    </div>
  );
}

export default SearchDog;
