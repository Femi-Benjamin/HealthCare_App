import PropTypes from "prop-types";

export const CustomButton = ({ width, content, onClick, backgroundColor }) => {
  return (
    <button
      style={{ width: width, backgroundColor: backgroundColor }}
      className="p-2 rounded-md text-center capitalize text-base cursor-pointer"
      onClick={onClick}
    >
      {content}
    </button>
  );
};

CustomButton.propTypes = {
  width: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  backgroundColor: PropTypes.string, // New prop for background color
};

