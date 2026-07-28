import "./Overview.css"

type OverviewProps = {
  firstParagraph: React.ReactNode;
  secondParagraph: React.ReactNode;
  thirdParagraph?: React.ReactNode;
};

function Overview({
  firstParagraph,
  secondParagraph,
  thirdParagraph,
}: OverviewProps) {
  return (
    <section className="overview">
      <h3 className="overview-header">At a glance</h3>
      <p className="overview-body">{firstParagraph}</p>
      <p className="overview-body">{secondParagraph}</p>
      {thirdParagraph && (
        <div className="overview-third-paragraph-outer">
          <div className="overview-third-paragraph-inner">{thirdParagraph}</div>
        </div>
      )}
    </section>
  );
}

export default Overview;