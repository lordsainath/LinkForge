import { MdOutlineFileDownload } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";

const QrCardLayout = ({ url }) => {

    const handledownload = () => {
        const link = document.createElement('a');
        link.href = url.qrCode;
        link.download = 'qr-code.png',
        link.click();
    }


  return (
    <div className=" max-w-xl flex justify-center items-center rounded-lg shadow-md hover:shadow-xl transition bg-white px-5 py-4">
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="flex flex-col gap-1.5 justify-center items-center">
          <div className="px-5 py-2 bg-gray-100 rounded-2xl">
            <img src={url.qrCode} alt="" />
          </div>
          <p className="text-blue-500 font-bold">{url.shortCode}</p>
          <div className="w-64 text-center">
            <p className="text-zinc-600 truncate">{url.originalUrl}</p>
          </div>
        </div>

        <div className="flex justify-between px-5 py-3 border-t border-b border-gray-400 w-full items-center text-center">
          <div>
            <p>{url.clicks}</p>
            <p>Scans</p>
          </div>
          <div>
            <p>{new Date(url.createdAt).toDateString()}</p>
            <p>Created</p>
          </div>
        </div>

        <div className="flex w-full  justify-between items-center">
          <div>
            <button onClick={handledownload}
              title="download qr"
              className="flex shadow hover:shadow-lg cursor-pointer  px-5 py-2 rounded-md font-medium items-center gap-2"
            >
              <span>
                <MdOutlineFileDownload />
              </span>{" "}
              Download
            </button>
          </div>
          <div className=" flex gap-2">
            <div
              title="delete qr"
              className="bg-white-100 shadow  rounded-md px-3 flex items-center justify-center py-2 cursor-pointer"
            >
              <button className="cursor-pointer">
                <MdDeleteOutline />
              </button>
            </div>
            <div
              title="redirect url"
              className="bg-white-100 shadow  rounded-md px-3 flex items-center justify-center py-2 cursor-pointer"
            >
              <a href={url.shortUrl} target="_blank" rel="noopener noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-external-link h-4 w-4"
                >
                  <path d="M15 3h6v6"></path>
                  <path d="M10 14 21 3"></path>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QrCardLayout;
