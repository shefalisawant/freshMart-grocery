import { ACHIVEMENTS_SECTION, FEATURES, PARTNER_WITH_US } from "../constants";

const Achievements = () => {
  const {TITLE,SUBTITLE}=ACHIVEMENTS_SECTION ?? {};
  return (
    <div className="px-2 md:px-4 py-4 md:py-8">
      <div className="flex-col content-center justify-center items-center">
        <div className="flex flex-col md:flex-row">
          <div className="flex text-3xl md:text-5xl text-dark-green font-display">
            {TITLE}
          </div>
          <div className="mt-2 text-xs md:text-center md:text-base font-mont md:px-4">
            {SUBTITLE}
          </div>
        </div>
      </div>
      <div
        className="w-full mt-2 h-28 md:h-138 bg-cover bg-center"
        style={{ backgroundImage: `url('/assets/images/bg2.jpg')` }}
      ></div>
      <div className="flex flex-col mt-2 justify-between items-center md:flex-row">
        <div>
          <button className="text-white text-sm font-semibold bg-dark-green px-4 py-2 rounded-full font-mont hover:font-bold">
            {PARTNER_WITH_US}
          </button>
        </div>
        <div className="flex justify-between font-mont md:text-2xl border-y-2 border-dark-green px-2 mt-2 md:mt-0">
          {FEATURES.map((item) => (
            <div className="p-2" key={item?.id}>
              <div className="flex text-dark-green font-display text-2xl md:text-3xl font-semibold mr-1">
                {item?.highlightText}
              </div>
              <div className="flex flex-wrap">{item?.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Achievements;
