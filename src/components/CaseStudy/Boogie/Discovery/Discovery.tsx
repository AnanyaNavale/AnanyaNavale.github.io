import "./Discovery.css";
import { useRef, useEffect } from "react";

import Section from "@/components/Section/Section";
import SectionHeader from "@/components/Section/SectionHeader/SectionHeader";
import TextBlock, { type TextBlockItem } from "@/components/Section/TextBlock/TextBlock";
import Quote from "../../Quote/Quote";

import map from "@/assets/images/boogie/flexigo-map.png";
import center from "@/assets/images/boogie/flexigo-center-pin.png";
import multiPin from "@/assets/images/boogie/flexigo-multiple-pins.png";
import iphone from "@/assets/images/iphone-no-camera.svg";
import list from "@/assets/images/boogie/list-scroll.mp4";
import line1 from "@/assets/images/boogie/line-1.svg";
import line2 from "@/assets/images/boogie/line-2.svg";

function Discovery({ id }: { id: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;

    // 1. Force the mute property on mount
    vid.muted = true;

    // 2. Try normal autoplay first
    vid.play().catch(() => {
      // 3. Fallback: If blocked by Low Power Mode, wait for a user touch or scroll
      const playVideoOnGesture = () => {
        vid
          .play()
          .then(() => {
            cleanUp(); // Playback succeeded! Remove listeners.
          })
          .catch((err) => console.log("Playback still blocked:", err));
      };

      const cleanUp = () => {
        window.removeEventListener("touchstart", playVideoOnGesture);
        window.removeEventListener("scroll", playVideoOnGesture);
      };

      // Add listeners to catch the very first user interaction
      window.addEventListener("touchstart", playVideoOnGesture, {
        passive: true,
      });
      window.addEventListener("scroll", playVideoOnGesture, { passive: true });
    });
  }, []);

  return (
    <Section innerWidth={1200} className="boogie-discovery" id={id}>
      <SectionHeader
        title="Discovery"
        tagline="The system wasn’t accessible to the people it was built for."
      />

      <TextBlock text={textContent.firstParagraph} />

      <div className="discovery-flexigo-diagram">
        <div className="discovery-flexigo-diagram-label">Flexigo Screens</div>
        <div className="discovery-flexigo-diagram-screens">
          <div className="discovery-flexigo-diagram-column">
            <p>
              Imagine having to navigate a map like this <br />
              <br />
            </p>
            <img src={map} alt="" />
          </div>
          <div className="discovery-flexigo-diagram-column">
            <div className="discovery-flexigo-diagram-column-img-wrapper">
              <img className="center-pin" src={center} alt="" />
            </div>
            <img className="line" src={line1} />
            <div className="discovery-flexigo-diagram-column-text">
              <p style={{ textAlign: "start" }}>
                Some location pins sit in the middle of buildings, making it
                unclear which entrance/exit the rider and driver should meet at.
              </p>
            </div>
          </div>
          <div className="discovery-flexigo-diagram-column reverse">
            <div className="discovery-flexigo-diagram-column-img-wrapper">
              <img className="multi-pin" src={multiPin} alt="" />
            </div>
            <img className="line" src={line2} />
            <div className="discovery-flexigo-diagram-column-text">
              <p style={{ textAlign: "start" }}>
                Other location pins sit side by side for the same entrance,
                increasing visual clutter and confusion.
              </p>
            </div>
          </div>
          <div className="discovery-flexigo-diagram-column">
            <p>
              <strong>1,400+</strong> addresses and locations to scroll* <br />{" "}
              <i>*Search was added after our initial evaluation</i>
            </p>
            <div className="discovery-flexigo-diagram-column-vid-wrapper">
              <img src={iphone} alt="" />
              <video
                ref={videoRef}
                src={list}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="discovery-quotes">
        <Quote
          content={
            <>
              "Instead of being able to input a search keyword… I kind of have
              this mental model of where my preferred locations are. Around 80%
              of the scroll bar is where 'O' appears, so 2 above that will get
              me to… where I live…"
            </>
          }
          attr={
            <>
              — <strong>Disgo</strong> user & master’s student identifying as
              blind
            </>
          }
        />
      </div>
      <TextBlock text={textContent.secondParagraph} />
    </Section>
  );
}

export default Discovery;

const textContent: {
  firstParagraph: TextBlockItem[];
  secondParagraph: TextBlockItem[];
} = {
  firstParagraph: [
    {
      size: "body",
      content: (
        <>
          DisGo relies on a third-party booking platform called{" "}
          <strong>Flexigo</strong> to coordinate rides. Several accessibility
          issues originate from the interface itself.
        </>
      ),
    },
  ],
  secondParagraph: [
    {
      size: "body",
      content: (
        <>
          We shared our findings with the <strong>Flexigo</strong> team, who
          then implemented a <strong>Search</strong> feature while we were
          developing our redesign.
        </>
      ),
    },
  ],
};