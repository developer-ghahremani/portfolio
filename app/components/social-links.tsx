import GithubIcon from "./icons/github";
import TwitterIcon from "./icons/twitter";

type Props = { withDescription?: boolean };

const SocialLinks = ({ withDescription = true }: Props) => {
  return (
    <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
      {withDescription && <span className="text-sm text-muted-foreground">Follow me: </span>}
      {[
        { icon: GithubIcon, href: "#" },
        { icon: TwitterIcon, href: "#" },
      ].map((social, idx) => (
        <a
          key={idx}
          href={social.href}
          className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300">
          {<social.icon className="w-5 h-5" />}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
