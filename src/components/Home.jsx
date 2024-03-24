import banner from "../assets/banner.png";
import Banner from "../shared/Banner";
function Home() {
  return (
    <div className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-24" id="home">
      <Banner
        banner={banner}
        heading="Develope your skills without diligence"
        subheading="Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus dolorum, eligendi mollitia reiciendis temporibus
              quo optio fugiat accusantium voluptates aliquid."
        btn1="Get started"
        btn2="Discount"
      />
    </div>
  );
}

export default Home;
