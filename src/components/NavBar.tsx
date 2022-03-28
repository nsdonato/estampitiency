import { ReactChildren } from "react";

const NavBar = (children: string | ReactChildren) => <nav>{children}</nav>;

export default NavBar;
