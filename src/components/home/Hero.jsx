import React from "react";

const Hero = () => {
  return (
    <div
      className="w-full h-[540px] relative"
      style={{
        backgroundImage:
          "url(https://ft.com/partnercontent/netjets/2/Hero2.jpg)",
        backgroundSize: "cover",
        position: "center center",
      }}
    >
      <div className="absolute top-[405px] flex justify-evenly items-top  shadow-md rounded-2xl h-[100px] z-[0S] w-[30%] bg-blue-500  left-[35%]">
        <p className="text-white p-3  xl:px-5 px-2 text-lg">One way</p>
        <p className="bg-white pt-3 xl:px-5 px-2 rounded-md text-lg">
          Round Trip
        </p>
        <p className="text-white pt-3  xl:px-5 px-2 text-lg">Multi city</p>
      </div>
      <div className="relative top-[455px] bg-white flex justify-center items-center w-[80%] mx-auto h-[max-content] rounded-lg shadow-lg">
        <form class="p-6 bg-white ">
          <div class="registration-form text-dark text-start">
            <div class="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-4">
         

              <div>
                <label class="form-label font-medium text-slate-900 ">
                  From:
                </label>
                <div class="relative mt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    class="feather feather-calendar size-[18px] absolute top-[10px] start-3"
                  >
                    <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
                  </svg>
                  <input
                    name="name"
                    type="text"
                    id="job-keyword"
                    class="w-full py-2 px-3 ps-10 h-10 bg-transparent  rounded-md outline-none border border-gray-100  focus:ring-0 start"
                    placeholder="Select Place"
                    fdprocessedid="dp0cnk"
                  />
                </div>
              </div>

              <div>
                <label class="form-label font-medium text-slate-900 ">To</label>
                <div class="relative mt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    class="feather feather-calendar size-[18px] absolute top-[10px] start-3"
                  >
                    <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
                  </svg>

                  <input
                    name="name"
                    type="text"
                    id="job-keyword"
                    class="w-full py-2 px-3 ps-10 h-10 bg-transparent  rounded-md outline-none border border-gray-100  focus:ring-0 end"
                    placeholder="Select Place"
                    fdprocessedid="sfvvm5"
                  />
                </div>
              </div>

              <div className="">
                <label class="form-label font-medium text-slate-900 ">Select your Date</label>
                <div class="relative mt-2 ">
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
                    class="feather feather-calendar size-[18px] absolute top-[10px] start-3"
                  >
                    <rect
                      x="3"
                      y="4"
                      width="18"
                      height="18"
                      rx="2"
                      ry="2"
                    ></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  <input
                    name="name"
                    type="text"
                    id="job-keyword"
                    class="w-full py-2 px-3 ps-10 h-10 bg-transparent  rounded-md outline-none border border-gray-100 focus:ring-0 start"
                    placeholder="Select Your Date"
                    fdprocessedid="dp0cnk"
                  />
                </div>
              </div>

              <div>
                <label class="form-label font-medium text-slate-900 ">
                  No. of person:
                </label>
                <div class="relative mt-2">
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
                    class="feather feather-users size-[18px] absolute top-[10px] start-3"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                  <select
                    class="form-select w-full py-2 px-3 ps-10 h-10 bg-transparent  rounded-md outline-none border border-gray-100  focus:ring-0"
                    fdprocessedid="ysenkp"
                  >
                    <option disabled="" selected="">
                      No. of person
                    </option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
              </div>

              <div class="lg:mt-[35px]">
                <input
                  type="submit"
                  id="search-buy"
                  name="search"
                  class="py-1 px-5 h-10 inline-block tracking-wide align-middle duration-500 text-base text-center bg-blue-500 text-white rounded-md w-full cursor-pointer"
                  value="Search"
                  fdprocessedid="8nyyj"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Hero;
