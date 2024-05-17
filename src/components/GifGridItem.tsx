import { GifsArrayType } from "./GifGrid";

export const GifGridItem = ({ title, url }: GifsArrayType) => {
  return (
    <div className="card">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};

// GifGridItem.propTypes = {
//   title: PropTypes.string.isRequired,
//   url: PropTypes.string.isRequired,
// };
