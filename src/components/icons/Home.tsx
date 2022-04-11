import { FaHome } from "react-icons/fa";
import { IconBaseProps } from "react-icons";

interface Props extends IconBaseProps {}

const Home = (props: Props) => <FaHome {...props} />;

export default Home;
