import "./features.css";
import StarIcon from "../starIcon/star-icon";
import InputIcon from "../inputIcon/input-icon";

export default function Features() {
  return (
    <>
      <div className="features">
        <div className="features-flex">
          <InputIcon />
          <p>AI trained to generate realistic 3D objects.</p>
          <StarIcon />
        </div>
        <hr />
        <div className="features-grid">
          <span className="grid-item">
            <h3>Style</h3>
            <p>Choose your style</p>
          </span>
          <span className="grid-item">
            <h3>Style</h3>
            <p>Choose your style</p>
          </span>
          <span className="grid-item">
            <h3>Style</h3>
            <p>Choose your style</p>
          </span>
          <span className="grid-item">
            <h3>Style</h3>
            <p>Choose your style</p>
          </span>
        </div>
      </div>
    </>
  );
}
