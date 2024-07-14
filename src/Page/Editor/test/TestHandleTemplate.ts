interface DeleteTemplateProps {
  isTemplate: React.ReactNode[];
  setTemplate: React.Dispatch<React.SetStateAction<React.ReactNode[]>>;
}

interface AddTemplateProps {
  setTemplate: React.Dispatch<React.SetStateAction<React.ReactNode[]>>;
  Template: React.ReactNode;  // 컴포넌트 인스턴스를 직접 받도록 변경
}

export const addTemplate = ({ setTemplate, Template }: AddTemplateProps) => {
  console.log("add");
  setTemplate((prevTemplates) => [
    ...prevTemplates,
    Template
  ]);
};

export const deleteTemplate = ({ setTemplate, isTemplate }: DeleteTemplateProps) => {
  console.log("delete");
  setTemplate(isTemplate.slice(0, -1));
};

/**
 * 위의 인터페이스는 아래와같은 방식으로 jsx로 사용된다.
 * <div className="group">
          <Button
            id="btn-add"
            onClick={() => {
              addTemplate({
                setTemplate: setTemplates,
                Template: <Template key={isTemplates.length} />,
              });
            }}
            link="추가"
          />
          <Button
            id="btn-delete"
            onClick={() => {
              deleteTemplate({
                setTemplate: setTemplates,
                isTemplate: isTemplates,
              });
            }}
            link="삭제"
          />
        </div>
 */