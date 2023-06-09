import "./PlansScreen.css";

const PlansScreen = () => {
  return (
    <div className="plansScreen">
    <div className="plansScreen__plan">
      <div className="plansScreen__info">
        <h5>Premium</h5>
        <h6>4K + HDR</h6>
      </div>
      <button className="plansScreen__subscribe">Subscribe</button>
    </div>
    <div className="plansScreen__plan">
      <div className="plansScreen__info">
        <h5>Standard</h5>
        <h6>1080p</h6>
      </div>
      <button className="plansScreen__subscribe">Subscribe</button>
    </div>
    <div className="plansScreen__plan">
      <div className="plansScreen__info">
        <h5>Basic</h5>
        <h6>720p</h6>
      </div>
      <button className="plansScreen__subscribe">Subscribe</button>
    </div>
    </div>
  );
};

export default PlansScreen;
