import "./ExpProto.css"

import { MdOutlineThumbUp, MdOutlineThumbDown } from "react-icons/md";

export type ContentItem = {
  title: string;
  content: string;
}

type ExpProtoProps = {
  header: string;
  color: string;
  headerColor: string;
  title: string;
  description: React.ReactNode;
  images: string[];
  text: ContentItem[];
  icon: "up" | "down";
  iconBackground: string;
}

export default function ExpProto({ header, color, headerColor, title, description, images, text, icon, iconBackground }: ExpProtoProps) {

  const Icon = icon === "up" ? MdOutlineThumbUp : MdOutlineThumbDown;

  return (
    <section className="exp-proto">
      <div className="exp-proto-card">
        <div
          className="exp-proto-header"
          style={{ background: color, color: headerColor }}
        >
          {header}
        </div>
        <div className="exp-proto-content">
          <div className="exp-proto-title-container">
            <h4 className="exp-proto-title">{title}</h4>
            <p className="exp-proto-description">{description}</p>
          </div>

          {images.length === 1 ? (
            <img className="exp-proto-img" src={images[0]} alt="" />
          ) : (
            <div className="exp-proto-img-container">
              {images.map((img) => (
                <img key={img} src={img} alt="" />
              ))}
            </div>
          )}

          <div className="exp-proto-text">
            {text.map((item) => (
              <div className="exp-proto-text-section">
                <h5 className="exp-proto-text-title">{item.title}</h5>
                <p className="exp-proto-text-content">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        className="exp-proto-icon-frame"
        style={{ backgroundColor: iconBackground }}
      >
        <Icon className="exp-proto-icon" style={{ color: color }}/>
      </div>
    </section>
  );
}
