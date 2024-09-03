import Button from "../../common/components/Button/Button";
import { image } from "../../common/utils/img.data";
import { toolStyled } from "../function/toolStyled";

const Tool = () => {
  return (
    <div className="elements">
      <span id="tool">Tool</span>
      <Button
        className="btn"
        link={
          <img
            id=""
            src={image.underLineIcon}
            onClick={() => {
              toolStyled("underline");
            }}
          />
        }
      />
      <Button
        className="btn"
        link={
          <img
            id=""
            src={image.boldIcon}
            onClick={() => {
              toolStyled("bold");
            }}
          />
        }
      />
      <Button
        className="btn"
        link={
          <img
            id=""
            src={image.italicIcon}
            onClick={() => {
              toolStyled("italic");
            }}
          />
        }
      />
      <Button
        className="btn"
        link={
          <img
            id=""
            src={image.lineThroughIcon}
            onClick={() => {
              toolStyled("strikeThrough");
            }}
          />
        }
      />
    </div>
  );
};
export default Tool;
