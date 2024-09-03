
enum ToolType {
  underLineIcon,
  boldIcon,
  italicIcon,
  lineThroughIcon,
}

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