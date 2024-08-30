interface IAddTemplate {
  isTemplate: React.ReactNode[];
  setTemplate: React.Dispatch<React.SetStateAction<{ key: number, element: React.ReactNode }[]>>;
  newKey: number;
  Template: React.ReactNode;
}
//addTemplate의 매개변수는 객체 형태이다. 그래서 타입 또한 객체 `{}`로 지정이 되어야한다.
export const addTemplate = ({ setTemplate, newKey, Template }: IAddTemplate) => {
  setTemplate((prevTemplates) => [
    ...prevTemplates,
    {
      key: newKey,
      element: Template
    },
  ]);
  console.log(newKey);
};

export const deleteTemplate = ({ setTemplate, newKey }: IAddTemplate) => {
  //templateKey = 삭제를 하기 위해 선택된 template
  setTemplate((prevTemplates) =>
    prevTemplates.filter((template) => template.key !== newKey)
  );
};