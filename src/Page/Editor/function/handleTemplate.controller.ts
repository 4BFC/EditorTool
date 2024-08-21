import React from "react";

import { TemplateInit } from "../../common/utils/interface.data";

export const addTemplate = (setTemplate: React.Dispatch<React.SetStateAction<TemplateInit[]>>, newKey: number, Template: JSX.Element) => {
  setTemplate((prevTemplates) => [
    ...prevTemplates,
    {
      key: newKey,
      element: Template
    },
  ]);
  console.log(newKey);
};

export const deleteTemplate = (setTemplate: React.Dispatch<React.SetStateAction<TemplateInit[]>>, newKey: number) => {
  setTemplate((prevTemplates) =>
    prevTemplates.filter((template) => template.key !== newKey)
  );
};