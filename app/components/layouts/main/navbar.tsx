import { Menu } from "lucide-react";
import { Link } from "react-router";
import AppButton from "~/components/button";

type Props = {};
const navLinks = [
  {
    label: "About",
    to: "#about",
  },
  {
    label: "Project",
    to: "#project",
  },
  {
    label: "Experiences",
    to: "#Experiences",
  },
  {
    label: "Testimonial",
    to: "#Testimonial",
  },
];

const Navbar = (props: Props) => {
  return (
    <header className="fixed top-0 right-0 left-0 bg-transparent py-5">
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <Link to="#" className="text-xl font-bold tracking-tight hover:text-primary">
          RG <span className="text-primary">.</span>
        </Link>
        {/* Desctop Navbar menu */}
        <div className="hidden md:flex items-center gap-1 ">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navLinks.map((item, index) => (
              <Link
                to={item.to}
                key={item.label + index}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="hidden md:block">
          <AppButton>Contact me</AppButton>
        </div>

        <button className="md:hidden p-2 text-foreground">
          <Menu size={24} />
        </button>
      </nav>

      {/* Mobile Menu */}
    </header>
  );
};

export default Navbar;
