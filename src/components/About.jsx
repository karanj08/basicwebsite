import img1 from "../assets/Aboutimg1.png";
import img2 from "../assets/Aboutimg2.png";

const About = () => {
  return (
    <div className="md:px-14 p-4 mx-auto space-y-10" id="about">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="md:w-1/2">
          <img src={img1} alt="" className="h-[380px] object-contain" />
        </div>
        {/* aboit content */}
        <div className="md:w-2/5">
          <h2 className="md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal ">
            We have been improving our product{" "}
            <span className="text-tartiary">for many years</span>
          </h2>
          <p className="text-tartiary text-lg mb-7">
            A good example of a paragraph contains a topic conclusion.'Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Eaque similique
            ad asperiores.'
          </p>
          <button className="btnprimary">Get started</button>
        </div>
      </div>

      {/* second part */}
      <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-8">
        <div className="md:w-1/2">
          <img src={img2} alt="" className="h-[380px] object-contain" />
        </div>
        {/* about content */}
        <div className="md:w-2/5">
          <h2 className="md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal ">
            You can practice any{" "}
            <span className="text-tartiary">time convinient for you</span>
          </h2>
          <p className="text-tartiary text-lg mb-7">
            A good example of a paragraph contains a topic conclusion.'Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Eaque similique
            ad asperiores.'
          </p>
          <button className="btnprimary">Get started</button>
        </div>
      </div>
    </div>
  );
};

export default About;
