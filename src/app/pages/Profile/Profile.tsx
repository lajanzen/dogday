import React, { useEffect, useState } from "react";
import styles from "./Profile.module.css";
import NavBar from "../../components/NavBar/NavBar";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import { UserType } from "../../../types";
import DogIcon from "../../components/Icons/DogIcon";

function Profile(): JSX.Element {
  const [user, setUser] = useState<UserType | null>(null);

  useEffect(() => {
    fetch("/api/users/me")
      .then((response) => response.json())
      .then((user) => setUser(user));
  }, []);

  function calculateAge(birthYear: number): number {
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
  }

  if (!user) {
    return <p>No user found</p>;
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <NavBar />
      </header>
      <main className={styles.main}>
        <ProfileCard
          type={user.type}
          imgSrc={user.photo}
          name={user.name}
          mail={user.email}
          phone={user.phone}
          city={user.city}
          {...(user.type === "dog"
            ? { age: calculateAge(user.birthYear) }
            : { experience: user.experience })}
        />
      </main>
      <footer className={styles.footer}>
        <DogIcon />
      </footer>
    </div>
  );
}

export default Profile;
