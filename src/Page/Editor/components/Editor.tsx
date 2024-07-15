import React, { useState } from "react";
import { Link } from "react-router-dom";
import mainLogo from "../../../image/logo-icon.svg";

import saveIcon from "../image/save-icon.png";
import editIcon from "../image/edit-icon.png";
import deleteIcon from "../image/delete-icon.png";

import "../scss/editor.scss";
import Button from "../../common/components/Button/Button";
import Template from "./Template";
// import { addTemplate, deleteTemplate } from "../function/handleTemplate";

const Editor = () => {
  interface TemplateInit {
    key: number;
    element: JSX.Element;
  }
  // const [isTemplates, setTemplates] = useState<React.ReactNode[]>([
  //   <Template
  //     deleteFunction={() => deleteTemplate({ setTemplate: setTemplates })}
  //     key={isKey}
  //   />,
  // ]);

  const [isTemplates, setTemplates] = useState<TemplateInit[]>([
    {
      key: 0,
      element: <Template key={0} deleteFunction={() => deleteTemplate(0)} />,
    },
  ]);

  const addTemplate = () => {
    const newKey = isTemplates[isTemplates.length - 1].key + 1;
    setTemplates((prevTemplates) => [
      ...prevTemplates,
      {
        key: newKey,
        element: (
          <Template
            key={newKey}
            deleteFunction={() => deleteTemplate(newKey)}
          />
        ),
      },
    ]);
    console.log(newKey);
    console.log(isTemplates.length);
  };

  const deleteTemplate = (templateKey: number) => {
    setTemplates((prevTemplates) =>
      prevTemplates.filter((template) => template.key !== templateKey)
    );
  };

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
        {isTemplates.map((template) => (
          <div className="template" key={template.key}>
            {template.element}
          </div>
        ))}
        <div className="group">
          <Button id="btn-add" onClick={addTemplate} link="추가" />
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
