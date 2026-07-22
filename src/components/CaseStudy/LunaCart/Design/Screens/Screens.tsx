import "./Screens.css";

export type ScreenItem = {
  image: string;
  title: React.ReactNode;
  content: React.ReactNode;
  reverse?: boolean;
  video?: string;
}

type ScreensProps = {
  screens: ScreenItem[];
  label?: string;
  className?: string;
}

function Screens({ screens, label }: ScreensProps) {
  return (
    <div className="screens">
      {label && <div className="screens-label">{label}</div>}
      <div className="screens-inner">
        {screens.map((item) => (
          <div className={`screen ${item.reverse && "reverse"}`}>
            <div className="screen-text">
              <h6>{item.title}</h6>
              <p>{item.content}</p>
            </div>
            {item.video ? (
              <div className="screen-video-container">
                <img src={item.video} alt="" />
                <video
                  className="screen-video"
                  src={item.image}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>
            ) : (
              <div>
                <img src={item.image} alt="" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Screens;