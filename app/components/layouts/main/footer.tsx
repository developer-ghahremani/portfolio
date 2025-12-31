import { Link } from "react-router";
import SocialLinks from "~/components/social-links";
import { navLinks } from "~/utils/constants";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center container mx-auto py-8 gap-4 px-6">
      <div className="flex flex-col items-center md:items-start">
        <p className="text-lg font-black">RG</p>
        <p className="text-sm text-muted-foreground">@ 2025 Reza Ghahremani. All rights reserved</p>
      </div>

      <div className="flex md:gap-2 gap-1">
        {navLinks.map((item, index) => (
          <Link
            key={item.label + item.to + index}
            to={item.to}
            className="text-muted-foreground text-sm hover:text-white duration-200">
            {item.label}
          </Link>
        ))}
      </div>

      <SocialLinks withDescription={false} />
    </div>
  );
};

export default Footer;
