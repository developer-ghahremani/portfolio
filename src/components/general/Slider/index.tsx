import Slider, { Settings as SldierProps } from "react-slick";

interface Props extends SldierProps {
  items?: { image?: string; title?: string }[];
}

const ISlider = ({ items, children, ...props }: Props) => {
  if (!items)
    return (
      <Slider
        speed={1000}
        infinite
        className="w-[100%]"
        slidesToScroll={1}
        slidesToShow={1}
        autoplay
        fade
        {...props}>
        {children}
      </Slider>
    );
  return (
    <Slider
      speed={1000}
      infinite
      className="w-[100%]"
      slidesToScroll={1}
      slidesToShow={1}
      autoplay
      fade>
      {items?.map((item, index) => (
        <div key={item.title || index}>
          <img
            src={item.image}
            className="w-[100%] h-[100%] object-cover"
            alt=""
          />
        </div>
      ))}
    </Slider>
  );
};

export default ISlider;
