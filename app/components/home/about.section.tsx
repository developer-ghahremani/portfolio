import { Code2 } from "lucide-react";
const About = () => {
  return (
    <div className="py-32 container mx-auto px-3 ">
      <p className="text-lg text-primary mb-8">About Me</p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-8">
          <h2 className="text-5xl font-bold text-primary ">
            Building the future,
            <span className="text-white! font-serif  italic tracking-wide">
              one component at a time.
            </span>
          </h2>
          <p className="text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad suscipit minima asperiores
            porro culpa cumque. Perspiciatis officia, eius, illum quasi nam veniam ducimus itaque
            unde nemo esse molestias earum aspernatur.
          </p>
          <p className="text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad suscipit minima asperiores
            porro culpa cumque. Perspiciatis officia, eius, illum quasi nam veniam ducimus itaque
            unde nemo esse molestias earum aspernatur.
          </p>

          <p className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300 text-lg font-medium italic text-foreground">
            Perspiciatis, explicabo quis eaque impedit voluptatum consequatur totam alias id omnis,
            delectus animi!
          </p>
        </div>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
          {[
            {
              icon: Code2,
              title: "Clean Code",
              description: "man residam be injaaaa asdlkj fasdf asdf asdfasdfasdf sadf",
            },
            {
              icon: Code2,
              title: "Clean Code2",
              description: "man residam be injaaaa asdlkj fasdf asdf asdfasdfasdf sadf",
            },
            {
              icon: Code2,
              title: "Clean Code4",
              description: "man residam be injaaaa asdlkj fasdf asdf asdfasdfasdf sadf",
            },
            {
              icon: Code2,
              title: "Clean Code8",
              description: "man residam be injaaaa asdlkj fasdf asdf asdfasdfasdf sadf",
            },
          ].map((item, index) => (
            <div
              className="flex flex-col gap-2 items-start glass p-4 rounded-2xl animate-fade-in"
              style={{ animationDelay: `${(index + 4) * 500}ms` }}
              key={item.title + item.description}>
              <div className="bg-primary/10 p-2 flex items-center justify-center rounded-xl">
                <item.icon className="text-primary" />
              </div>
              <p className="text-white text-lg font-bold">{item.title}</p>
              <p className="text-muted-foreground ">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
