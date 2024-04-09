import { BENEFITS, DETAILS_SECTION } from "../constants";

const Details = () => {
  const {TITLE,SUBTITLE}=DETAILS_SECTION
  const renderBenefits = () => (
    <div>
      {BENEFITS.map((item, idx) => (
        <div
          className={`flex font-mont rounded-xl mt-2 p-2 ${
            idx % 2 === 0 ? "bg-pale-green" : "bg-dark-green text-white"
          }`}
          key={idx}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mr-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>

          <div className="flex-col">
            <div className="font-semibold">{item.title}</div>
            <div className="text-xs">{item.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
  return (
    <div className="py-4 md:py-8 bg-white">
      <div className="flex-col content-center justify-center items-center px-2 md:pl-4 md:pr-0">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:mr-2">
            <div className="flex text-3xl md:text-6xl text-dark-green font-display">
              {TITLE}
            </div>
            <div className="mt-2 font-mont text-xs">
              {SUBTITLE}
            </div>
            {renderBenefits()}
          </div>
          <div className="mt-2">
            <img src={"/assets/images/section2.jpg"} alt="delivery" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Details;
