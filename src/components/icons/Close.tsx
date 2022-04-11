import { IconBaseProps } from "react-icons";
import { IoMdClose } from "react-icons/io";

interface Props extends IconBaseProps {}

const Close = (props: Props) => <IoMdClose {...props} />;

export default Close;
