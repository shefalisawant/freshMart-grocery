import { DOWNLOAD_SECTION } from "../constants";

const DownloadApp = () => {
  const {TITLE,SUBTITLE}=DOWNLOAD_SECTION
  return (
    <div className="p-2 md:px-4 bg-white md:pt-28">
      <div className="flex p-4 bg-dark-green rounded-2xl max-h-50 items-center md:items-start">
        <div className="flex-col text-white font-mont md:w-1/2">
          <div className="md:text-4xl font-semibold">
            {TITLE}
          </div>
          <div className="text-xs md:text-sm mt-2">
           {SUBTITLE}
          </div>
          <div className="flex">
            <img
              src={"/assets/images/app-store-badge.png"}
              className="h-8 md:h-12 mr-2 cursor-pointer"
              alt="appstore"
            />
            <img
              src={"/assets/images/google-play-badge.png"}
              className="h-8 md:h-12 cursor-pointer"
              alt="playstore"
            />
          </div>
        </div>
        <div className="relative bottom:10 md:bottom-60">
          <img src={"/assets/images/dw2.png"} alt="download" />
        </div>
      </div>
    </div>
  );
};
export default DownloadApp;
