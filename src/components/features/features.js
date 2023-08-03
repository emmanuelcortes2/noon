import "./features.css";
import StarIcon from "../icons/star-icon";
import InputIcon from "../inputIcon/input-icon";
import OutlineStar from "../icons/star-icon-outline";
import MaterialIcon from "../icons/material-icon";
import AiIcon from "../icons/ai-icon";
import CreativityIcon from "../icons/creativity-icon";

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
            <small>
              <OutlineStar />
              <h3>Style</h3>
            </small>
            <p>Choose your style</p>
          </span>
          <span className="grid-item">
            <small>
              <MaterialIcon />
              <h3>Material</h3>
            </small>
            <p>Choose material</p>
          </span>
          <span className="grid-item">
            <small>
              <CreativityIcon />
              <h3>Creativity</h3>
            </small>
            <p>High-level</p>
          </span>
          <span className="grid-item">
            <small>
              <AiIcon />
              <h3>AI model</h3>
            </small>
            <p>Midjourney 5.0</p>
          </span>
        </div>
      </div>
    </>
  );
}
