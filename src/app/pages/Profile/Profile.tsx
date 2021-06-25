import React, { useEffect, useState } from "react";
import styles from "./Profile.module.css";
import NavBar from "../../components/NavBar/NavBar";
import ProfileCardDog from "../../components/ProfileCardDog/ProfileCardDog";
// import { UserDog, UserSitter } from "../../../types";
import DogIcon from "../../components/Icons/DogIcon";

function Profile(): JSX.Element {
  // const [users, setUsers] = useState<UserSitter[] | UserDog[]>([]);

  useEffect(() => {
    fetch("/api/users")
      .then((response) => response.json())
      .then((users) => setUsers(users));
  }, []);

  // function age(birthYear: number): number {
  //   const currentYear = new Date().getFullYear();
  //   return currentYear - birthYear;
  // }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <NavBar />
      </header>
      <main className={styles.main}>
        {/* {users.map((user) => ( */}
        <ProfileCardDog
          imgSrc="/dog.png"
          name="Karl"
          mail="karl@mail.de"
          phone="0165283553"
          city="Köln"
          age={2}
          // imgSrc={user.photo}
          // name={user.name}
          // mail={user.email}
          // phone={user.phone}
          // city={user.city}
          // age={age(user.birthYear)}
        />
        {/* ))} */}
      </main>
      <footer className={styles.footer}>
        <DogIcon />
      </footer>
    </div>
  );
}

export default Profile;
