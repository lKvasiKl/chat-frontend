import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";

import styles from "./AppContainer.module.scss";

const AppContainer = () => {
  return (
    <div className={styles.appConatiner}>
      <Header chatName="Chat Name" />
      <Outlet />
    </div>
  );
};

export default AppContainer;
