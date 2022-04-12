import { FaUserAlt } from "react-icons/fa";
import { IconBaseProps } from "react-icons";
import React from "react";

interface Props extends IconBaseProps {}

const Profile = (props: Props) => <FaUserAlt {...props} />;

export default Profile;
