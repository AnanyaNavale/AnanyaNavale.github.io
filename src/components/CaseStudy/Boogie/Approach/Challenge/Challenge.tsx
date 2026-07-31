import "./Challenge.css";

import SectionHeader from "@/components/Section/SectionHeader/SectionHeader";
import TextBlock, {
  type TextBlockItem,
} from "@/components/TextBlock/TextBlock";
import ChatConversation, { type ChatItem } from "./ChatConversation/ChatConversation";

function Challenge({ id }: { id: string }) {
  return (
    <section className="boogie-challenge" id={id}>
      <SectionHeader
        title="Challenge"
        tagline="human ambiguity."
        subSectionTagline="But digital dispatchers still had to navigate"
      />
      <TextBlock text={textContent.firstParagraph} />

      <div className="challenge-chats">
        <ChatConversation
          label="Need for input repetition"
          labelColor="var(--color-boogie-tertiary)"
          chats={chatContent.firstConvo}
        />
        <ChatConversation
          label="Response misinterpretation"
          labelColor="#4E6CD9"
          chats={chatContent.secondConvo}
        />
        <ChatConversation
          label="Location hallucination"
          labelColor="var(--color-boogie-secondary)"
          chats={chatContent.thirdConvo}
        />
      </div>
    </section>
  );
}

export default Challenge;

const textContent: {
  firstParagraph: TextBlockItem[];
} = {
  firstParagraph: [
    {
      size: "body",
      content: (
        <>
          By turning to AI, we introduced some new natural language conundrums
          to the discussion. We wanted to create a system that was more
          intuitive and stress-free to use, so we had to refine our prompting
          and parsing techniques to prevent our new interface from becoming even
          more frustrating than the old.
        </>
      ),
    },
  ],
};

const chatContent: {
  firstConvo: ChatItem[];
  secondConvo: ChatItem[];
  thirdConvo: ChatItem[];
} = {
  firstConvo: [
    {
      sender: "You",
      message: (
        <>
          I want to be picked up at <br /> Green Library at the entrance <br />{" "}
          by Coupa Cafe.
        </>
      ),
      maxWidth: "clamp(159px, 15.486vw, 223px)",
    },
    {
      sender: "BoogieBot",
      message: (
        <>
          I've set your pickup at{" "}
          <strong className="chat-highlight">
            Green <br /> Library
          </strong>
          . Which entrance <br />
          would you like to be picked <br />
          up from?
        </>
      ),
      maxWidth: "clamp(159px, 15.486vw, 223px)",
    },
  ],
  secondConvo: [
    {
      sender: "BoogieBot",
      message: (
        <>
          I've confirmed your pickup <br /> and dropoff locations. To <br />
          continue to finalizing your <br />
          booking, say "That's it!"
        </>
      ),
      maxWidth: "clamp(159px, 15.486vw, 223px)",
    },
    {
      sender: "You",
      message: <>That's it!</>,
      maxWidth: "clamp(61px, 5.972vw, 86px)",
    },
    {
      sender: "BoogieBot",
      message: (
        <>
          I've set your dropoff at the{" "}
          <strong className="chat-highlight">
            IT <br />
            Building
          </strong>
          . Which entrance <br />
          would you like to be picked <br />
          up from?
        </>
      ),
      maxWidth: "clamp(159px, 15.486vw, 223px)",
    },
  ],
  thirdConvo: [
    {
      sender: "You",
      message: (
        <>
          Can you set my dropoff <br />
          location at the Harvard <br />
          Building?
        </>
      ),
      maxWidth: "clamp(134px, 13.056vw, 188px)",
    },
    {
      sender: "BoogieBot",
      message: (
        <>
          I can set your dropoff at <br />
          <strong className="chat-highlight">Harvard</strong>. Can you confirm{" "}
          <br />
          which entrance you would <br />
          like to be picked up from?
        </>
      ),
      maxWidth: "clamp(143px, 13.889vw, 200px)",
    },
  ],
};