import React from "react";
import { Menu } from "./model/resturant";

// 1. Type ( extends 방식 )
// type OwnProps = Menu & {
//   showBestMenuName(name: string): string;
// };

// 2. interface ( extends 방식 )
interface OwnProps extends Omit<Menu, "price"> {
  showBestMenuName(name: string): string;
}

const BestMenu: React.FC<OwnProps> = ({ name, category, showBestMenuName }) => {
  return <div>{name}</div>;
};

export default BestMenu;
