import Hero from "./Pages_section/Hero";
import ChooseUs from "./Pages_section/ChooseUs";
import Features from "./Pages_section/Features";
import Students from "./Pages_section/Students";
import FAQs from "./Pages_section/FAQs";
import Footer from "./Pages_section/Footer";

const Home = () => {
  return (
    <>
      <div className="Hd bg-neutral-100">
        <Hero />
        <ChooseUs />
        <Features />
        <Students />
        <FAQs />
        <Footer />
      </div>
    </>
  );
};

export default Home;
