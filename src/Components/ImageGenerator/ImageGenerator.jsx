import "./ImageGenerator.css";
import main_img from "../../assets/undraw_image_focus_re_qqxc.svg";

const ImageGenerator = () => {
  return (
    <div className="ai-image-generator">
      <div className="header">
        AI image <span>Generator</span>
      </div>
      <div className="img-loading">
        <div className="image">
          <img src={main_img} alt="" />
        </div>
      </div>
      <div className="search-box">
        <input
          type="text"
          className="search-input"
          placeholder="Describe what you want to see..."
        />
        <div className="generate-btn">Generate</div>
      </div>
    </div>
  );
};

export default ImageGenerator;
