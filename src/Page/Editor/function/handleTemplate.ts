interface TemplateSetProps {
  setTemplate: React.Dispatch<React.SetStateAction<React.ReactNode[]>>;
}
interface TemplateProps extends TemplateSetProps {
  Template: React.ReactNode;  // 컴포넌트 인스턴스를 직접 받도록 변경
}

export const addTemplate = ({ setTemplate, Template }: TemplateProps) => {
  console.log("add");
  setTemplate((prevTemplates) => [
    ...prevTemplates,
    Template
  ]);
};

export const deleteTemplate = ({ setTemplate }: TemplateSetProps) => {
  console.log("delete");
  setTemplate((prevTemplates) => prevTemplates.slice(0, -1));
};