import "./Vision.css";

import Section from "@/components/Section/Section";
import SectionHeader from "@/components/Section/SectionHeader/SectionHeader";
import TextBlock, {
  type TextBlockItem,
} from "@/components/Section/TextBlock/TextBlock";

import storyboard from "@/assets/images/theo/storyboard.png"
import videoContainer from "@/assets/images/theo/video-container.svg"
import theo from "@/assets/images/theo/theo.png"
import theoLogo from "@/assets/images/theo/theo-logo.png"
import { useIsMobile } from "@/hooks/useIsMobile";

function Vision({ id }: { id: string }) {
  const isMobile = useIsMobile();

  return (
    <Section className="theo-vision" id={id}>
      <SectionHeader
        title="Vision"
        tagline={"But the feeling had to take root\nbefore the form."}
      />

      <TextBlock text={textContent.firstParagraph} />

      <div className="vision-storyboard">
        <h5>The Storyboard</h5>
        <img src={storyboard} alt="" />
      </div>

      {isMobile ? (
        <div className="vision-video-container">
          <img src={videoContainer} alt="" />
          <iframe
            className="vision-video"
            src="https://www.youtube.com/embed/h_XQMDgb8Sk?si=wGzuZNiROAlZZIfP&modestbranding=1&rel=0&showinfo=0"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
          <div className="vision-video-award">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div className="vision-video-award-text">
                <span className="vision-video-award-light">Winner:</span>
                <span className="vision-video-award-dark">
                  Best Production Values
                </span>
              </div>
              <div className="vision-video-award-text">
                <span className="vision-video-award-light">
                  Stanford CS 147 <br /> Film Festival
                </span>
              </div>
            </div>

            <div className="vision-video-award-text">
              <span className="vision-video-award-light">Runner-Up:</span>
              <span className="vision-video-award-dark">
                Best Overall
                <br />
                Best Project Concept
                <br />
                Staff Pick
                <br />
                Best Acting
                <br />
                Best Music
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div className="vision-video-container">
          <img src={videoContainer} alt="" />
          <iframe
            className="vision-video"
            src="https://www.youtube.com/embed/h_XQMDgb8Sk?si=wGzuZNiROAlZZIfP"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
          <div className="vision-video-award">
            <div className="vision-video-award-text">
              <span className="vision-video-award-light">Winner:</span>
              <span className="vision-video-award-dark">
                Best Production Values
              </span>
            </div>
            <div className="vision-video-award-text">
              <span className="vision-video-award-light">Runner-Up:</span>
              <span className="vision-video-award-dark">
                Best Overall
                <br />
                Best Project Concept
                <br />
                Staff Pick
                <br />
                Best Acting
                <br />
                Best Music
              </span>
            </div>
            <div className="vision-video-award-text">
              <span className="vision-video-award-light">
                Stanford CS 147 <br /> Film Festival
              </span>
            </div>
          </div>
        </div>
      )}

      <div className="vision-backstory-container">
        <div className="vision-backstory-img">
          <img src={theo} alt="" />
        </div>
        <div className="vision-backstory-text-block">
          <p className="case-study-body-text">You might be wondering...</p>
          <p className="case-study-large-text">Why a teddy bear?</p>
          <p className="case-study-body-text">
            Inspired by the comfort and neutrality of a childhood stuffed
            animal, <strong>Theo</strong> was designed to feel gentle,
            supportive, and judgment-free.
          </p>
          <p className="case-study-body-text">
            <p className="case-study-large-text">Classic. Kind. Calm.</p>
            That’s <img src={theoLogo} alt="" />. Everyone’s new friend who’s
            always down to study together.
          </p>
        </div>
      </div>
    </Section>
  );
}

export default Vision;

const textContent: {
  firstParagraph: TextBlockItem[];
} = {
  firstParagraph: [
    {
      size: "body",
      content: (
        <>
          Our two successful approaches shared one defining quality: they felt
          the most personal.
        </>
      ),
    },
    {
      size: "large",
      content: (
        <>
          So we aimed to recreate that feeling digitally, first bringing it to
          life through our award-winning concept video.
        </>
      ),
    },
  ],
};
