import React from "react";

const Tour = () => {
  return (
    <div className="flex justify-center items-center">
		<div class="container relative md:mt-24 mt-16">
      <div class="grid grid-cols-1 pb-8 text-center">
        <h3 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">
          Tours Packages
        </h3>

        <p class="text-slate-400 max-w-xl mx-auto">
          Planning for a trip? We will organize your trip with the best places
          and within best budget!
        </p>
      </div>

      <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
        <div class="group rounded-md shadow ">
          <div class="relative overflow-hidden rounded-t-md shadow  mx-3 mt-3">
            <img
              src="https://shreethemes.in/travosy/layouts/assets/images/listing/1.jpg"
              class="scale-125 group-hover:scale-100 duration-500"
              alt=""
            />
            <div class="absolute top-0 start-0 p-4">
              <span class="bg-red-500 text-white text-[12px] px-2.5 py-1 font-medium rounded-md h-5">
                10% Off
              </span>
            </div>

            <div class="absolute top-0 end-0 p-4">
              <a
                href="javascript:void(0)"
                class="size-8 inline-flex justify-center items-center bg-white rounded-full text-slate-100 focus:text-red-500   hover:text-red-500 "
              >
                <i class="mdi mdi-heart text-[20px] align-middle"></i>
              </a>
            </div>
          </div>

          <div class="p-4">
            <p class="flex items-center text-slate-400 font-medium mb-2">
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
                class="feather feather-map-pin text-red-500 size-4 me-1"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>{" "}
              Dubai
            </p>
            <a
              href="tour-detail-one.html"
              class="text-lg font-medium hover:text-red-500 duration-500 ease-in-out"
            >
              Cuba Sailing Adventure
            </a>

            <div class="flex items-center mt-2">
              <span class="text-slate-400">Rating:</span>
              <ul class="text-lg font-medium text-amber-400 list-none ms-2">
                <li class="inline">
                  <i class="mdi mdi-star align-middle"></i>
                </li>
                <li class="inline">
                  <i class="mdi mdi-star align-middle"></i>
                </li>
                <li class="inline">
                  <i class="mdi mdi-star align-middle"></i>
                </li>
                <li class="inline">
                  <i class="mdi mdi-star align-middle"></i>
                </li>
                <li class="inline">
                  <i class="mdi mdi-star align-middle"></i>
                </li>
                <li class="inline text-black  text-sm">
                  5.0(30)
                </li>
              </ul>
            </div>

            <div class="mt-4 pt-4 flex justify-between items-center border-t border-slate-100  ">
              <h5 class="text-lg font-medium text-red-500">$ 58 / Day</h5>

              <a href="" class="text-slate-400 hover:text-red-500">
                Explore Now <i class="mdi mdi-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>

        <div class="group rounded-md shadow  ">
          <div class="relative overflow-hidden rounded-t-md shadow   mx-3 mt-3">
            <img
              src="https://shreethemes.in/travosy/layouts/assets/images/listing/2.jpg"
              class="scale-125 group-hover:scale-100 duration-500"
              alt=""
            />

            <div class="absolute top-0 end-0 p-4">
              <a
                href="javascript:void(0)"
                class="size-8 inline-flex justify-center items-center bg-white   rounded-full text-slate-100   focus:text-red-500   hover:text-red-500  "
              >
                <i class="mdi mdi-heart text-[20px] align-middle"></i>
              </a>
            </div>
          </div>

          <div class="p-4">
            <p class="flex items-center text-slate-400 font-medium mb-2">
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
                class="feather feather-map-pin text-red-500 size-4 me-1"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>{" "}
              Italy
            </p>
            <a
              href="tour-detail-one.html"
              class="text-lg font-medium hover:text-red-500 duration-500 ease-in-out"
            >
              Tour in New York
            </a>

            <div class="flex items-center mt-2">
              <span class="text-slate-400">Rating:</span>
              <ul class="text-lg font-medium text-amber-400 list-none ms-2">
                <li class="inline">
                  <i class="mdi mdi-star align-middle"></i>
                </li>
                <li class="inline">
                  <i class="mdi mdi-star align-middle"></i>
                </li>
                <li class="inline">
                  <i class="mdi mdi-star align-middle"></i>
                </li>
                <li class="inline">
                  <i class="mdi mdi-star align-middle"></i>
                </li>
                <li class="inline">
                  <i class="mdi mdi-star align-middle"></i>
                </li>
                <li class="inline text-black   text-sm">
                  5.0(30)
                </li>
              </ul>
            </div>

            <div class="mt-4 pt-4 flex justify-between items-center border-t border-slate-100  ">
              <h5 class="text-lg font-medium text-red-500">$ 58 / Day</h5>

              <a href="" class="text-slate-400 hover:text-red-500">
                Explore Now <i class="mdi mdi-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>

        <div class="group rounded-md shadow  ">
          <div class="relative overflow-hidden rounded-t-md shadow   mx-3 mt-3">
            <img
              src="https://shreethemes.in/travosy/layouts/assets/images/listing/3.jpg"
              class="scale-125 group-hover:scale-100 duration-500"
              alt=""
            />

            <div class="absolute top-0 end-0 p-4">
              <a
                href="javascript:void(0)"
                class="size-8 inline-flex justify-center items-center bg-white   rounded-full text-slate-100   focus:text-red-500   hover:text-red-500  "
              >
                <i class="mdi mdi-heart text-[20px] align-middle"></i>
              </a>
            </div>
          </div>

          <div class="p-4">
            <p class="flex items-center text-slate-400 font-medium mb-2">
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
                class="feather feather-map-pin text-red-500 size-4 me-1"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>{" "}
              Maldivas
            </p>
            <a
              href="tour-detail-one.html"
              class="text-lg font-medium hover:text-red-500 duration-500 ease-in-out"
            >
              Discover Greece
            </a>

            <div class="flex items-center mt-2">
              <span class="text-slate-400">Rating:</span>
              <ul class="text-lg font-medium text-amber-400 list-none ms-2">
                <li class="inline">
                  <i class="mdi mdi-star align-middle"></i>
                </li>
                <li class="inline">
                  <i class="mdi mdi-star align-middle"></i>
                </li>
                <li class="inline">
                  <i class="mdi mdi-star align-middle"></i>
                </li>
                <li class="inline">
                  <i class="mdi mdi-star align-middle"></i>
                </li>
                <li class="inline">
                  <i class="mdi mdi-star align-middle"></i>
                </li>
                <li class="inline text-black   text-sm">
                  5.0(30)
                </li>
              </ul>
            </div>

            <div class="mt-4 pt-4 flex justify-between items-center border-t border-slate-100  ">
              <h5 class="text-lg font-medium text-red-500">$ 58 / Day</h5>

              <a href="" class="text-slate-400 hover:text-red-500">
                Explore Now <i class="mdi mdi-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>

        <div class="group rounded-md shadow  ">
          <div class="relative overflow-hidden rounded-t-md shadow   mx-3 mt-3">
            <img
              src="https://shreethemes.in/travosy/layouts/assets/images/listing/4.jpg"
              class="scale-125 group-hover:scale-100 duration-500"
              alt=""
            />

            <div class="absolute top-0 end-0 p-4">
              <a
                href="javascript:void(0)"
                class="size-8 inline-flex justify-center items-center bg-white   rounded-full text-slate-100   focus:text-red-500   hover:text-red-500  "
              >
                <i class="mdi mdi-heart text-[20px] align-middle"></i>
              </a>
            </div>
          </div>

          <div class="p-4">
            <p class="flex items-center text-slate-400 font-medium mb-2">
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
                class="feather feather-map-pin text-red-500 size-4 me-1"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>{" "}
              USA
            </p>
            <a
              href="tour-detail-one.html"
              class="text-lg font-medium hover:text-red-500 duration-500 ease-in-out"
            >
              Museum of Modern Art
            </a>

            <div class="flex items-center mt-2">
              <span class="text-slate-400">Rating:</span>
              <ul class="text-lg font-medium text-amber-400 list-none ms-2">
                <li class="inline">
                  <i class="mdi mdi-star align-middle"></i>
                </li>
                <li class="inline">
                  <i class="mdi mdi-star align-middle"></i>
                </li>
                <li class="inline">
                  <i class="mdi mdi-star align-middle"></i>
                </li>
                <li class="inline">
                  <i class="mdi mdi-star align-middle"></i>
                </li>
                <li class="inline">
                  <i class="mdi mdi-star align-middle"></i>
                </li>
                <li class="inline text-black   text-sm">
                  5.0(30)
                </li>
              </ul>
            </div>

            <div class="mt-4 pt-4 flex justify-between items-center border-t border-slate-100  ">
              <h5 class="text-lg font-medium text-red-500">$ 58 / Day</h5>

              <a href="" class="text-slate-400 hover:text-red-500">
                Explore Now <i class="mdi mdi-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>

        <div class="group rounded-md shadow  ">
          <div class="relative overflow-hidden rounded-t-md shadow   mx-3 mt-3">
            <img
              src="https://shreethemes.in/travosy/layouts/assets/images/listing/5.jpg"
              class="scale-125 group-hover:scale-100 duration-500"
              alt=""
            />

            <div class="absolute top-0 end-0 p-4">
              <a
                href="javascript:void(0)"
                class="size-8 inline-flex justify-center items-center bg-white   rounded-full text-slate-100   focus:text-red-500   hover:text-red-500  "
              >
                <i class="mdi mdi-heart text-[20px] align-middle"></i>
              </a>
            </div>
          </div>

          <div class="p-4">
            <p class="flex items-center text-slate-400 font-medium mb-2">
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
                class="feather feather-map-pin text-red-500 size-4 me-1"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>{" "}
              Bali
            </p>
            <a
              href="tour-detail-one.html"
              class="text-lg font-medium hover:text-red-500 duration-500 ease-in-out"
            >
              Peek Mountain View
            </a>

            <div class="flex items-center mt-2">
              <span class="text-slate-400">Rating:</span>
              <ul class="text-lg font-medium text-amber-400 list-none ms-2">
                <li class="inline">
                  <i class="mdi mdi-star align-middle"></i>
                </li>
                <li class="inline">
                  <i class="mdi mdi-star align-middle"></i>
                </li>
                <li class="inline">
                  <i class="mdi mdi-star align-middle"></i>
                </li>
                <li class="inline">
                  <i class="mdi mdi-star align-middle"></i>
                </li>
                <li class="inline">
                  <i class="mdi mdi-star align-middle"></i>
                </li>
                <li class="inline text-black   text-sm">
                  5.0(30)
                </li>
              </ul>
            </div>

            <div class="mt-4 pt-4 flex justify-between items-center border-t border-slate-100  ">
              <h5 class="text-lg font-medium text-red-500">$ 58 / Day</h5>

              <a href="" class="text-slate-400 hover:text-red-500">
                Explore Now <i class="mdi mdi-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>

        <div class="group rounded-md shadow  ">
          <div class="relative overflow-hidden rounded-t-md shadow   mx-3 mt-3">
            <img
              src="https://shreethemes.in/travosy/layouts/assets/images/listing/6.jpg"
              class="scale-125 group-hover:scale-100 duration-500"
              alt=""
            />
            <div class="absolute top-0 start-0 p-4">
              <span class="bg-red-500 text-white text-[12px] px-2.5 py-1 font-medium rounded-md h-5">
                25% Off
              </span>
            </div>

            <div class="absolute top-0 end-0 p-4">
              <a
                href="javascript:void(0)"
                class="size-8 inline-flex justify-center items-center bg-white   rounded-full text-slate-100   focus:text-red-500   hover:text-red-500  "
              >
                <i class="mdi mdi-heart text-[20px] align-middle"></i>
              </a>
            </div>
          </div>

          <div class="p-4">
            <p class="flex items-center text-slate-400 font-medium mb-2">
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
                class="feather feather-map-pin text-red-500 size-4 me-1"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>{" "}
              Bangkok
            </p>
            <a
              href="tour-detail-one.html"
              class="text-lg font-medium hover:text-red-500 duration-500 ease-in-out"
            >
              Hot Baloon Journey
            </a>

            <div class="flex items-center mt-2">
              <span class="text-slate-400">Rating:</span>
              <ul class="text-lg font-medium text-amber-400 list-none ms-2">
                <li class="inline">
                  <i class="mdi mdi-star align-middle"></i>
                </li>
                <li class="inline">
                  <i class="mdi mdi-star align-middle"></i>
                </li>
                <li class="inline">
                  <i class="mdi mdi-star align-middle"></i>
                </li>
                <li class="inline">
                  <i class="mdi mdi-star align-middle"></i>
                </li>
                <li class="inline">
                  <i class="mdi mdi-star align-middle"></i>
                </li>
                <li class="inline text-black   text-sm">
                  5.0(30)
                </li>
              </ul>
            </div>

            <div class="mt-4 pt-4 flex justify-between items-center border-t border-slate-100  ">
              <h5 class="text-lg font-medium text-red-500">$ 58 / Day</h5>

              <a href="" class="text-slate-400 hover:text-red-500">
                Explore Now <i class="mdi mdi-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-6 text-center">
        <a
          href="grid-right-sidebar.html"
          class="text-slate-400 hover:text-red-500 inline-block"
        >
          See More Tours <i class="mdi mdi-arrow-right align-middle"></i>
        </a>
      </div>
    </div>
	</div>
  );
};

export default Tour;
