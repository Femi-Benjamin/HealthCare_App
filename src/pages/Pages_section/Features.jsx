import Key_features from "../../components/Key_features";

const Features = () => {
  return (
    <>
      <div className="text-center items-center p-28 border-b">
        <div className="pb-24">
          <h1 className="text-5xl font-bold text-[#00395B] leading-[146.5%] pb-10">
            Our key features
          </h1>
          <p className="text-lg font-normal leading-[156.5%] ">
            Access a wide range of features designed to enhance the <br />{" "}
            healthcare management experience
          </p>
        </div>
        <div>
          <Key_features />
        </div>
      </div>
    </>
  );
};

export default Features;

