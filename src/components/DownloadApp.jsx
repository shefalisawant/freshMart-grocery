import { DOWNLOAD_SECTION } from "../constants";

const DownloadApp = () => {
  const {TITLE,SUBTITLE}=DOWNLOAD_SECTION
  return (
    <div className="p-4 bg-white pt-28">
      <div className="flex p-4 bg-dark-green rounded-2xl max-h-50">
        <div className="flex-col text-white font-mont w-1/2">
          <div className="text-4xl font-semibold">
            {TITLE}
          </div>
          <div className="text-sm mt-2">
           {SUBTITLE}
          </div>
          <div className="flex">
            <img
              src={"/assets/images/app-store-badge.png"}
              className="h-12 mr-2 cursor-pointer"
              alt="appstore"
            />
            <img
              src={"/assets/images/google-play-badge.png"}
              className="h-12 cursor-pointer"
              alt="playstore"
            />
          </div>
        </div>
        <div className="relative bottom-60">
          <img src={"/assets/images/dw2.png"} alt="download" />
        </div>
      </div>
    </div>
  );
};
export default DownloadApp;
