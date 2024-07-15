import React, { useState } from "react";

import saveIcon from "../image/save-icon.png";
import editIcon from "../image/edit-icon.png";
import deleteIcon from "../image/delete-icon.png";

import Button from "../../common/components/Button/Button";
import Tool from "./Tool";

interface TemplateProps {
  key?: any;
  deleteFunction: () => void;
}

const Template: React.FC<TemplateProps> = ({ deleteFunction }) => {
  const [isName, setName] = useState("edit-mode");
  const [isState, setState] = useState(true);

  return (
    <div className={isName}>
      <div className="group">
        <div className="btn">
          <Button
            id="btn"
            onClick={() => {
              console.log("save");
              setName("save-mode");
              setState(false);
            }}
            link={<img src={saveIcon} id="btn" />}
          />

          <Button
            id="btn"
            onClick={() => {
              console.log("edit");
              setName("edit-mode");
              setState(true);
            }}
            link={<img src={editIcon} id="btn" />}
          />

          <Button
            id="btn"
            onClick={() => {
              console.log("delete");
              deleteFunction();
            }}
            link={<img src={deleteIcon} id="btn" />}
          />
        </div>
        <div className="tool">{isState && <Tool />}</div>
        <div className="input">
          <div className="elements">
            <div contentEditable={isState} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template;
