import PropTypes from "prop-types";

const StatisticCard = ({ imgSrc, paragraphText, headingText }) => {
  return (
    <div className="w-[232p h-[117px] rounded-xl bg-white flex items-center p-7 gap-7 cursor-pointer">
      <img src={imgSrc} alt="" />
      <div>
        <p className="text-[#00395B] text-2xl font-bold">{paragraphText}</p>
        <h1 className="text-[#555] text-base font-medium leading-[146.5%]">{headingText}</h1>
      </div>
    </div>
  );
};

// Prop type validation
StatisticCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  paragraphText: PropTypes.string.isRequired,
  headingText: PropTypes.string.isRequired,
};

export default StatisticCard;