
enum ToolType {
  none,
  underLineIcon,
  boldIcon,
  italicIcon,
  lineThroughIcon,
}
//enum으로 반환된 key값으로 적용
export const toolStyled = (style: any) => {

  const selection = window.getSelection();
  if (selection && selection.rangeCount > 0) {
    const range = selection.getRangeAt(0);
    const span = document.createElement("span");
    if (style === "bold") {
      span.style.fontWeight = "bold";
    }
    if (style === "italic") {
      span.style.fontStyle = "italic";
    }
    if (style === "underline") {
      span.style.textDecoration = "underline";
    }
    if (style === "strikeThrough") {
      span.style.textDecoration = "line-through";
    }
    range.surroundContents(span);
  }
};

export const noneStyled = (style: any) => {

  const selection = window.getSelection();
  if (selection && selection.rangeCount > 0) {
    const range = selection.getRangeAt(0);
    const span = document.createElement("span");
    if (style === "bold") {
      span.style.fontWeight = "bold";
    }
    if (style === "italic") {
      span.style.fontStyle = "italic";
    }
    if (style === "underline") {
      span.style.textDecoration = "underline";
    }
    if (style === "strikeThrough") {
      span.style.textDecoration = "line-through";
    }
    range.surroundContents(span);
  }
};