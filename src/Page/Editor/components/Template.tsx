import React, { useState } from "react";
import { image } from "../../common/utils/img.data";

import Button from "../../common/components/Button/Button";
import Tool from "./Tool";

import { TemplateProps } from "../../common/utils/interface.data";

const Template: React.FC<TemplateProps> = (Props) => {
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
            link={<img src={image.saveIcon} id="btn" />}
          />

          <Button
            id="btn"
            onClick={() => {
              console.log("edit");
              setName("edit-mode");
              setState(true);
            }}
            link={<img src={image.editIcon} id="btn" />}
          />

          <Button
            id="btn"
            onClick={() => {
              console.log("delete");
              Props.deleteFunction();
            }}
            link={<img src={image.deleteIcon} id="btn" />}
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
