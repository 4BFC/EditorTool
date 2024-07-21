interface TemplateSetProps {
  id?: any,
  setTemplate: React.Dispatch<React.SetStateAction<React.ReactNode[]>>;
}
interface TemplateProps extends TemplateSetProps {
  Template: React.ReactNode;  // 컴포넌트 인스턴스를 직접 받도록 변경
}

export const addTemplate = ({ id, setTemplate, Template }: TemplateProps) => {
  console.log("add");
  setTemplate((prevTemplates) => [
    ...prevTemplates,
    Template
  ]);
};

export const deleteTemplate = ({ id, setTemplate }: TemplateSetProps) => {
  console.log("delete", id);
  setTemplate((prevTemplates) => prevTemplates.slice(0, -1));
  // setTemplate((prevTemplates) => prevTemplates.filter(template => template.id !== id));
};