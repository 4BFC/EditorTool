interface IAddTemplate {
  isTemplate: React.ReactNode[];
  setTemplate: React.Dispatch<React.SetStateAction<{ key: number, element: React.ReactNode }[]>>;
  newKey: number;
  Template: React.ReactNode;
}

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