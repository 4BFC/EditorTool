import React, { useState } from "react";
import { Link } from "react-router-dom";
import mainLogo from "../../../image/logo-icon.svg";

import saveIcon from "../image/save-icon.png";
import editIcon from "../image/edit-icon.png";
import deleteIcon from "../image/delete-icon.png";

import underLineIcon from "../image/underline-icon.png";
import boldIcon from "../image/bold-icon.png";
import italicIcon from "../image/italic-icon.png";
import lineThroughIcon from "../image/line-through-icon.png";
import "../scss/editor.scss";
import Button from "../../common/components/Button/Button";
import Template from "./Template";
import { addTemplate, deleteTemplate } from "../function/handleTemplate";

const Editor = () => {
  const [isTemplates, setTemplates] = useState<React.ReactNode[]>([
    <Template
      deleteFunction={() => deleteTemplate({ setTemplate: setTemplates })}
      key={0}
    />,
  ]);

  return (
    <div className="editor">
      <div className="logo-image">
        <img src={mainLogo} />
        <div className="group">
          <Button className="main-btn" link={<Link to="/">메인으로</Link>} />
          <div id="info-bg">
            <div id="info-icon">?</div>
          </div>
        </div>
      </div>
      <div className="edit">
        <hr />
        <h3>ToDoList</h3>
        {isTemplates.map((element, index) => (
          <div className="template" key={index}>
            {element}
          </div>
        ))}
        <div className="group">
          <Button
            id="btn-add"
            onClick={() => {
              addTemplate({
                setTemplate: setTemplates,
                Template: (
                  <Template
                    deleteFunction={() =>
                      deleteTemplate({ setTemplate: setTemplates })
                    }
                    key={isTemplates.length}
                  />
                ),
              });
            }}
            link="추가"
          />
          {/* <Button
            id="btn-delete"
            onClick={() => {
              deleteTemplate({
                setTemplate: setTemplates,
              });
            }}
            link="삭제"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Editor;
