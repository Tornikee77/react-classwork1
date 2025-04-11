import styles from "./Main.module.css";

const Main = () => {
  return (
    <div>
      <div className={styles.mainContainer}>
        <h2 className={styles.heroTitle}>
          Build Your Own Site like a Lego Constructor
        </h2>
        <p className={styles.siteDescription}>
          We have created a new product that will help designers, developers and
          companies create websites for their startups quickly and easily.
        </p>
        <div className={styles.buttonContainer}>
          <button className={styles.login}>Log In</button>
          <button className={styles.SignUp}>Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Main;
