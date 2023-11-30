import circle_tick from "../assets/circle_tick.svg";

const Circle_tick = () => {
  return (
    <div>
      <div className="flex gap-3 pb-5">
        <img src={circle_tick} alt="" />
        <p>Enhanced Efficiency</p>
      </div>
      <div className="flex gap-3 pb-5">
        <img src={circle_tick} alt="" />
        <p>Improved Patient Care</p>
      </div>
      <div className="flex gap-3 pb-5">
        <img src={circle_tick} alt="" />
        <p>Universal Adaptability</p>
      </div>
      <div className="flex gap-3 pb-5">
        <img src={circle_tick} alt="" />
        <p>Better Data Management</p>
      </div>
    </div>
  );
};

export default Circle_tick;
