import Drop_down from "../../components/Drop_down";
import Find from "../../components/Find";

const FAQs = () => {

    return (
        <div>
            <div className="text-center items-center p-28 border-b">
                <h1 className="text-5xl font-bold text-[#00395B] leading-[146.5%] pb-10">Frequently Asked Questions</h1>
                <p className="text-lg font-normal leading-[156.5%] pb-">Do you have questions about our platform? <br /> We&apos;ve got you covered</p>
            </div>
            <Drop_down />
            <Find />
        </div>
    );
};

export default FAQs;
