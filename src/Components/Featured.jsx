import React from "react";

const Featured = () => {
  return (
    <>
      <hr />
      <h1 className="text-gray-400 text-2xl uppercase pt-4 mt-5 px-4">
        Featured Posts
      </h1>
      <div className="grid md:grid-col-2 w-full gap-8 md:grid-flow-col py-6 px-10">
        <div className="rounded">
          <img
            src="https://assets.website-files.com/5b47286ba09814724c5a5ff4/5b472cc1731aa11ef4a6482f_image_large.jpg"
            alt="image"
            className="w-100% rounded-md h-[500px]"
          />
          <div className="text-start px-4">
            <h3 className="text-gray-400 py-2 text-xs">GRAPHIC DESIGN</h3>
            <h1 className="font-semibold text-black text-xl uppercase py-3">
              A BRIEF HISTORY OF THE FIFA WORLD CUP LOGO
            </h1>
            <p className="uppercase text-xs">
              By <span>CLEM ONOJEGHUO</span>
            </p>
          </div>
        </div>
        <div className="rounded">
          <img
            src="https://assets.website-files.com/5b47286ba09814724c5a5ff4/5b47310949f3e1fdefa251cd_image-1.jpg"
            alt=""
            className="w-100% rounded-md h-[500px]"
          />
          <div className="text-start px-4">
            <h3 className="text-gray-400 py-2 text-xs">GRAPHIC DESIGN</h3>
            <h1 className="font-semibold text-black text-xl uppercase py-3">
              NEED A GUIDE TO LA’S GRAPHIC DESIGN SCENE? SHOPLIFTERS’ NEW ISSUE
              HAS GOT YOUR BACK
            </h1>
            <p className="uppercase text-xs">
              By <span>ALESSANDRA ORTIZ</span>
            </p>
          </div>
        </div>
      </div>
      <div className="grid md:grid-col-2 w-full gap-8 md:grid-flow-col py-6 px-10">
        <div className="rounded">
          <img
            src="https://assets.website-files.com/5b47286ba09814724c5a5ff4/5b473124a0981400825a6a48_image-2.jpg"
            alt=""
            className="w-100% rounded-md h-[500px]"
          />
          <div className="text-start px-4">
            <h3 className="text-gray-400 py-2 text-xs">PHOTOGRAPHY</h3>
            <h1 className="font-semibold text-black text-xl uppercase py-3">
              FRED ROWSON DIRECTS FILM FOR YEARS AND YEARS
            </h1>
            <p className="uppercase text-xs">
              By <span>COBY GOTTLIEB</span>
            </p>
          </div>
        </div>
        <div className="rounded">
          <img
            src="https://assets.website-files.com/5b47286ba09814724c5a5ff4/5b47313c49f3e112b8a251e3_image-3.jpg"
            alt=""
            className="w-100% rounded-md h-[500px]"
          />
          <div className="text-start px-4">
            <h3 className="text-gray-400 py-2 text-xs">ILLUSTRATION</h3>
            <h1 className="font-semibold text-black text-xl uppercase py-3">
              M&C SAATCHI AND FONTSMITH COLLABORATE ON FONT COLLECTION FOR HOUSE
              OF ST BARNABAS
            </h1>
            <p className="uppercase text-xs">
              By <span>ANNIE LUEILWITZ</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;
