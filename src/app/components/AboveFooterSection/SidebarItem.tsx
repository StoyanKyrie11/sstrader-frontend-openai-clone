import { ReactNode } from "react";
import { Wrapper } from "../Wrapper";

type SidebarItemProps = {
  title: string;
  items: string[];
  icon?: ReactNode;
};

function SidebarItem({ title, items, icon }: SidebarItemProps) {
  return (
    <Wrapper variant={"aboveFooterLayout"}>
      <h4>{title}</h4>
      {items.map((item, index) => {
        if (item === "Try ChatGPT" || item === "Docs") {
          return (
            <span
              key={index}
              className="flex flex-row hover:underline hover:underline-offset-2 hover:decoration-1 cursor-pointer items-center font-normal font-lg"
            >
              <span>{item}</span>
              {icon && <span>{icon}</span>}
            </span>
          );
        } else {
          return (
            <span
              key={index}
              className="hover:underline hover:underline-offset-2 hover:decoration-1 cursor-pointer font-normal font-lg"
            >
              {item}
            </span>
          );
        }
      })}
    </Wrapper>
  );
}

export default SidebarItem;
