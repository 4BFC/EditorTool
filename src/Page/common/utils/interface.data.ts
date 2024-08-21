export interface TemplateInit {
  key: number;
  element: JSX.Element;
}

//확정 되었을 때 사용해야 하는 방식
// interface IAddTemplate {
//   isTemplate: React.ReactNode[];
//   setTemplate: React.Dispatch<React.SetStateAction<{ key: number, element: React.ReactNode }[]>>;
//   newKey: number;
//   Template: React.ReactNode;
// }

export interface TemplateProps {
  key?: any;
  deleteFunction: () => void;
}


export interface ButtonProps {
  className?: string;
  id?: string;
  // link는 리액트를 위한 인터페이스이다.extends를 사용해서 확장하면 어떨까?
  link?: React.ReactNode | string;
  onClick?: () => void;
}
