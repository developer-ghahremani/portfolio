import { FiMenu } from "react-icons/fi";
import { IconBaseProps } from "react-icons";
import React from "react";

interface Props extends IconBaseProps {}

const Menu = (props: Props) => <FiMenu {...props} />;

export default Menu;
