interface Props {
  value: string | number;
  title: string;
  withBorderBottom?: boolean;
}

const AboutMe1 = (props: Props) => {
  return (
    <div
      className={`felx flex-col items-center flex-1 py-12 ${
        props.withBorderBottom ? "border-b-2" : "border-b-2 md:border-none"
      }`}>
      <p className="text-primary text-5xl font-bold text-center">
        {props.value}+
      </p>
      <p className="text-white text-xl font-bold text-center">{props.title}</p>
    </div>
  );
};

export default AboutMe1;
