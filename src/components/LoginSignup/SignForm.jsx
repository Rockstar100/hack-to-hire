import React from "react";

const SignForm = () => {
  return (
    <div
      className="w-full h-screen m-0 pt-[120px]  md:pt-0"
      style={{
        backgroundImage:
          'url("https://media.licdn.com/dms/image/C561BAQFfTqlfuXzRiQ/company-background_10000/0/1584586648261/cabin_crew_international_cover?e=2147483647&v=beta&t=jrEmNWpVsmHCAwLpb5CNux3YHEOzVAeUv2a-OtQ8PQQ")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="bg-white md:w-[585px] md:h-screen md:mx-0 mx-auto my-auto md:pt-[100px] py-[25px]  md:rounded-none rounded-md md:my-auto w-[300px] h-[93%] p-5">
        <img
          src="https://www.goindigo.in/content/dam/s6web/in/en/assets/logo/IndiGo_logo_2x.png"
          className="mx-auto md:w-[270px] w-[200px]"
        />
        <h1 className=" text-4xl font-semibold md:ms-20  mt-5">Sign In</h1>
        <div class="max-w-sm  md:ms-20  mt-5">
          <form>
            <div class="mb-5">
              <label
                for="fullName"
                class="block mb-2 text-xl font-medium text-gray-900 "
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder=""
                required
              />
            </div>
            <div class="mb-5">
              <label
                for="email"
                class="block mb-2 text-xl font-medium text-gray-900 "
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div class="mb-5">
              <label
                for="password"
                class="block mb-2 text-xl font-medium text-gray-900 "
              >
                Your password
              </label>
              <input
                type="password"
                id="password"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                required
              />
            </div>
            <div class="mb-5">
              <label
                for="confirmpassword"
                class="block mb-2 text-xl font-medium text-gray-900 "
              >
                Confirm password
              </label>
              <input
                type="password"
                id="confirmpassword"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                requiredz
              />
            </div>
            <div class="flex items-start mb-5">
              <div class="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300   "
                  required
                />
              </div>
              <label
                for="remember"
                class="ms-2 text-sm font-medium text-gray-900 "
              >
                Remember me
              </label>
            </div>
            <button
              type="submit"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </form>
          <button class="inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60 mt-5">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              class="h-[18px] w-[18px] "
            />
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignForm;