import { useState } from "react";

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);
  const packages = [
    {
      name: "start",
      monthlyPrice: 19,
      yearlyPrice: 199,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum incidunt labore maxime aut ex iste",
      green: "src/assets/green.png",
      pink: "src/assets/pink.png",
    },
    {
      name: "Advance",
      monthlyPrice: 39,
      yearlyPrice: 399,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum incidunt labore maxime aut ex iste",
      green: "src/assets/green.png",
      pink: "src/assets/pink.png",
    },
    {
      name: "Premium",
      monthlyPrice: 59,
      yearlyPrice: 599,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum incidunt labore maxime aut ex iste",
      green: "src/assets/green.png",
      pink: "src/assets/pink.png",
    },
  ];
  // const features = [
  //   "Videos of Lessons",
  //   "Homework check",
  //   "Additional practical task",
  //   "Monthly conference",
  //   "Personal advice from teacher",
  // ];

  return (
    <div className="md:px-14 p-4 max-w-s mx-auto py-10" id="pricing">
      <div className="text-center">
        <h2 className="md:text-5xl text-3xl font-extrabold text-primary mb-2">
          Here are all our plans
        </h2>
        <p className="text-tartiary md:w-1/3 mx-auto px-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus harum
          tenetur amet, animi quos soluta?
        </p>
        {/* toggle pricing */}
        <div className="mt-16">
          <label
            htmlFor="toggle"
            className="inline-flex items-center cursor-pointer"
          >
            <span className="mr-8 text-2xl font-semibold">Monthlhy</span>
            <div className="w-14 h-6 bg-gray-300 rounded-full">
              <div
                className={`w-6 h-6 rounded-full ${
                  isYearly ? "bg-primary ml-8" : "bg-gray-500"
                }`}
              ></div>
            </div>
            <span className="ml-8 text-2xl font-semibold">Yearly</span>
          </label>
          <input
            type="checkbox"
            id="toggle"
            className="hidden"
            checked={isYearly}
            onChange={() => setIsYearly(!isYearly)}
          />
        </div>
      </div>

      {/* pricing cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 max-w-screen gap-6 mt-20 md:w-11/12 mx-auto">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className="border py-10 md:px-6 px-4 rounded-lg shadow-3xl"
          >
            <h3 className="text-3xl font-bold text-center text-primary">
              {pkg.name}
            </h3>
            <p className="text-tartiary text-center my-5">{pkg.description}</p>
            <p className="mt-5 text-center text-secondary text-4xl font-bold">
              ${isYearly ? `${pkg.yearlyPrice}` : `${pkg.monthlyPrice}`}
              <span className="text-base text-tartiary font-medium">
                /{isYearly ? "year" : "month"}
              </span>
            </p>

            <ul className="mt-4 space-y-2 px-4">
              <li className="flex gap-3 items-center">
                <img src={pkg.green} alt="" className="h-4 w-4" /> Videos of
                Lessons
              </li>
              <li className="flex gap-3 items-center">
                <img src={pkg.green} alt="" className="h-4 w-4" /> Homework
                check
              </li>
              <li className="flex gap-3 items-center">
                <img src={pkg.green} alt="" className="h-4 w-4" /> Additional
                practical task
              </li>
              <li className="flex gap-3 items-center">
                <img src={pkg.green} alt="" className="h-4 w-4" /> Monthly
                conference
              </li>
              <li className="flex gap-3 items-center">
                <img src={pkg.green} alt="" className="h-4 w-4" /> Personal
                advice from teacher
              </li>
            </ul>

            <div className="w-full mx-auto mt-8 flex items-center justify-center">
              <button className="btnprimary">Get started</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
