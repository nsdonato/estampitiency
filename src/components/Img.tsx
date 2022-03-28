type Props = {
  src: string;
  alt?: string;
  props?: any;
};

const Img: React.FC<Props> = ({ src, alt, ...props }) => {
  return <img src={src} alt={alt} {...props} />;
};

export default Img;
