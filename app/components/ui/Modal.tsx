import { ReactNode, HTMLAttributes } from "react";

interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export default function Modal({ children, ...props }: ModalProps) {
  return <div {...props}>{children}</div>;
}
