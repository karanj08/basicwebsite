import Banner from "../shared/Banner";
import ballon from "../assets/ballon.png";

function NewsLetter() {
  return (
    <div className="md:px-14 p-4 max-w-screen-2xl mx-auto my-12">
      <Banner
        banner={ballon}
        heading="Each student an share their discount code for friends"
        subheading="Lorem ipsum dolor sit amet consectetur adipisicing elit.Necessitatibus dolorum, eligendi mollitia reiciendis temporibus quo optio fugiat accusantium voluptates aliquid."
        btn1="I have a code"
        btn2="Know more"
      />
    </div>
  );
}

export default NewsLetter;
