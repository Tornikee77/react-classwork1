import styles from "./Header.module.css";
const Header = () => {
  return (
    <div>
      <div className={styles.headerContainer}>
        <div className={styles.fotoContainer}>
          <a href="#">
            <img src="/img/svg/logo (3).svg" alt="siteLogo" />
          </a>
        </div>
        <div className={styles.navContainer}>
          <nav>
            <ul>
              <li>
                {" "}
                <a href="#">Tour</a>
              </li>
              <li>
                <a href="#">Prices</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">F.A.Q.</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
