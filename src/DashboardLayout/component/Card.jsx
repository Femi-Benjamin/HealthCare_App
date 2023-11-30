import PropTypes from 'prop-types';

const Card = ({ date, description, title, imgSrc, txt }) => {
    return (
        <div className="w-[316px h-[240px bg-[#FFF] rounded-xl p-8">
            <div className="pb-5">
                <p className="text-base text-[#00395B] font-normal leading-[146.5%] pb-4">{date}</p>
                <h1 className="text-lg text-[#004C79] font-semibold leading-[146.5%] pb-3">{title}</h1>
                <p className="text-base text-[#00395B] font-medium leading-[146.5%]">{description}</p>
            </div>
            <div className="flex items-center gap-2">
                <img src={imgSrc} alt="" />
                <h1 className="text-base text-[#00395B] font-medium leading-[146.5%]">{txt}</h1>
            </div>
        </div>
    );
};

Card.propTypes = {
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    txt: PropTypes.string.isRequired,
};

export default Card;
