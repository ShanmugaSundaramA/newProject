import { Outlet, Link } from "react-router-dom";

import cx from "classnames";
import s from "../assets/scss/routes/Layout.module.scss";
import Header from "../header/Header";

export default function Layout() {
  return (
    <div className={cx(s.layout)}>
      <Header />
      <div>
        <Outlet />
      </div>
    </div>
  );
}
