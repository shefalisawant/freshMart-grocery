import { useGSAP } from "@gsap/react";
import { HERO_SECTION, SHOP_NOW } from "../constants";
import gsap from "gsap";

const Heading = () => {
  const {TITLE,SUBTITLE}=HERO_SECTION
  useGSAP(()=>{
    let tl = gsap.timeline();
    tl
    .fromTo('#title',{
      opacity:0,
      y:-20
    },{
      opacity:1,
      y:0
    })
    .fromTo('#subtitle',{
      opacity:0,
      y:-40
    },{
      opacity:1,
      y:0
    })

    tl
    .fromTo("#delivery",{
      x:0,
      y:90,
      rotate:-45,
      ease:'power2.in',
    },
    {
      x:80,
      y:-70,
      rotate:0,
      ease:'power2.inOut',
    }   
  ,0.5)
  .to(
    "#delivery",{
      x:750,
      ease:'power2.in',
    }
  ,"-=0.5")
  },[])
  return (
    <div className="mt-4">
      <div className="flex-col content-center justify-center items-center px-8">
        <div id="title" className="flex text-center text-7xl font-semibold text-dark-green font-display">
          {TITLE}
        </div>
        <div id="subtitle" className="mt-2 text-center font-mont px-4">
          {SUBTITLE}
        </div>
      </div>
      <form className="max-w-md mx-auto border-2 border-dark-green rounded-full font-mont mt-2 ">
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="bg-white block w-full p-2 ps-8 text-sm rounded-full border-2 border-dark-green focus:outline-none"
            placeholder="Find Nearby Shops..."
          />
          <button
            type="submit"
            className="absolute right-1 bottom-1 top-1 bg-dark-green px-2 py-2 text-white rounded-full flex items-center"
          >
            {SHOP_NOW}
          </button>
        </div>
      </form>
      <div id="delivery" className="w-8 h-8 bg-cover" style={{backgroundImage: `url('/assets/images/delivery-boy.png')`}}></div>
      <div
        className="w-full rounded-tl-full rounded-tr-full h-96 -mt-1"
        style={{ backgroundImage: `url('/assets/images/bg1.jpg')` }}
      ></div>
    </div>
  );
};
export default Heading;
