import React, { useState } from "react";
import { Link } from "react-router-dom";
import { image } from "../../common/utils/img.data";

import "../scss/editor.scss";
import Button from "../../common/components/Button/Button";
import Template from "./Template";
import {
  addTemplate,
  deleteTemplate,
} from "../function/handleTemplate.controller";
import { TemplateInit } from "../../common/utils/interface.data";

const Editor = () => {
  const [isTemplates, setTemplates] = useState<TemplateInit[]>([
    {
      key: 0,
      element: (
        <Template
          key={0}
          deleteFunction={() => deleteTemplate(setTemplates, 0)}
        />
      ),
    },
  ]);

  //?
  const newKey =
    isTemplates.length === 0 ? 0 : isTemplates[isTemplates.length - 1].key + 1;

  return (
    <div className="editor">
      <div className="logo-image">
        <img src={image.mainLogo} />
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
            {/* 해당 버튼이 Template 안으로 들어가야함 */}
            <Button
              id="btn-delete"
              onClick={() => {
                deleteTemplate(setTemplates, template.key);
              }}
              link="삭제"
            />
          </div>
        ))}
        <div className="group">
          <Button
            id="btn-add"
            onClick={() => {
              addTemplate(
                setTemplates,
                newKey,
                <Template
                  key={newKey}
                  deleteFunction={() => deleteTemplate(setTemplates, newKey)}
                />
              );
            }}
            link="추가"
          />
        </div>
      </div>
    </div>
  );
};

export default Editor;
