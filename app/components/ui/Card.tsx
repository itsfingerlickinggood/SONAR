import { ReactNode, HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export default function Card({ children, ...props }: CardProps) {
  return (
    <div className="bg-white rounded shadow p-4" {...props}>
      {children}
    </div>
  );
}
