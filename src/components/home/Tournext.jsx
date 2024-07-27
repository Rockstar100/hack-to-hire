import React from "react";

const Tournext = () => {
  return (
    <div className="flex justify-center p-10 items-center">
      <div  className="container relative md:mt-24 mt-16">
        <div  className="grid md:grid-cols-12 grid-cols-1 items-center gap-6 relative">
          <div  className="md:col-span-5">
            <div  className="relative">
              <img
                src="https://shreethemes.in/travosy/layouts/assets/images/about.jpg"
                 className="mx-auto rounded-3xl shadow  w-[90%]"
                alt=""
              />

              <div  className="absolute flex items-center bottom-16 md:-start-10 -start-5 p-4 rounded-lg shadow-md   bg-white   w-56 m-3">
                <div  className="flex items-center justify-center h-[65px] min-w-[65px] bg-red-500/5 text-red-500 text-center rounded-xl me-3">
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
                     className="feather feather-users size-6"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <div  className="flex-1">
                  <span  className="text-slate-400">Visitor</span>
                  <p  className="text-xl font-bold">
                    <span  className="counter-value" data-target="4589">
                      4589
                    </span>
                  </p>
                </div>
              </div>

              <div  className="absolute flex items-center top-16 md:-end-10 -end-5 p-4 rounded-lg shadow-md   bg-white   w-60 m-3">
                <div  className="flex items-center justify-center h-[65px] min-w-[65px] bg-red-500/5 text-red-500 text-center rounded-xl me-3">
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
                     className="feather feather-globe size-6"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                </div>
                <div  className="flex-1">
                  <span  className="text-slate-400">Travel Packages</span>
                  <p  className="text-xl font-bold">
                    <span  className="counter-value" data-target="50">
                      50
                    </span>
                    +
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div  className="md:col-span-7">
            <div  className="lg:ms-8">
              <h3  className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">
                World Best Travel <br /> Agency: Travosy
              </h3>

              <p  className="text-slate-400 max-w-xl mb-6">
                Get instant helpful resources about anything on the go, easily
                implement secure money transfer solutions, boost your daily
                efficiency, connect to other app users and create your own
                Travosy network, and much more with just a few taps. commodo
                consequat. Duis aute irure.
              </p>

              <a
                href=""
                 className="py-2 px-5 inline-block tracking-wide align-middle duration-500 text-base text-center bg-red-500 text-white rounded-md"
              >
                Read More{" "}
                <i  className="mdi mdi-chevron-right align-middle ms-0.5"></i>
              </a>
            </div>
          </div>

          <div  className="absolute bottom-0 start-1/3 -z-1">
            <img
              src="https://shreethemes.in/travosy/layouts/assets/images/map-plane-big.png"
               className="lg:w-[600px] w-96"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tournext;
