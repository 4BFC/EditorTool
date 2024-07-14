import React from "react";
import { Link } from "react-router-dom";
import Button from "../../common/components/Button/Button";
import mainLogo from "../../../image/logo-icon.svg";
import "../scss/main.scss";

const Main = () => {
  return (
    <div className="main">
      <div className="logo-image">
        <img src={mainLogo} />
      </div>
      <div className="group">
        <Button
          className="btn"
          id="todo"
          link={<Link to="/editor">ToDo</Link>}
        />
        <Button
          className="btn"
          id="not-yet"
          link={
            <Link
              to="#"
              onClick={() => {
                alert("아직 준비 중입니다.😌");
              }}
            >
              준비 중
            </Link>
          }
        />
      </div>
    </div>
  );
};

export default Main;
