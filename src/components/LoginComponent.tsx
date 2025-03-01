
import { Link } from "react-router-dom";

const LoginComponent = () => {
  return (
    <section className="h-screen">
      <div className="container h-full px-6 py-24">
        <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
          {/* Left column container with background */}
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
            <img
              src="/login.svg"
              className="w-full"
              alt="Login illustration"
            />
          </div>

          {/* Right column container with form */}
          <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
            <form>
              {/* Email input */}
              <div className="mb-6">
                <label 
                  className="block text-sm font-medium mb-2" 
                  htmlFor="email"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#08AFF1]"
                />
              </div>

              {/* Password input */}
              <div className="mb-6">
                <label 
                  className="block text-sm font-medium mb-2" 
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#08AFF1]"
                />
              </div>

              {/* Remember me checkbox */}
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    type="checkbox"
                    className="h-4 w-4 border-gray-300 rounded"
                    defaultChecked
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-700"
                  >
                    Remember me
                  </label>
                </div>

                {/* Forgot password link */}
                <a
                  href="#!"
                  className="text-[#08AFF1] text-sm hover:text-[#AACF45] transition-colors"
                >
                  Forgot password?
                </a>
              </div>

              {/* Submit button */}

              <Link to="/registration" onClick={() => window.scrollTo(0, 0)}>
              <button className="inline-block w-full rounded bg-[#08AFF1] px-7 py-3 text-sm font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-[#AACF45] hover:shadow-lg focus:shadow-lg focus:outline-none">Sign In</button>
            </Link>

              {/* Divider */}
              <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                  OR
                </p>
              </div>

              {/* Social login buttons */}
              <a
                className="mb-3 flex w-full items-center justify-center rounded bg-[#08AFF1] px-7 py-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-[#AACF45] hover:shadow-lg focus:shadow-lg focus:outline-none"
                href="#!"
                role="button"
              >
                {/* Facebook */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 h-3.5 w-3.5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
                Continue with Facebook
              </a>
              
              <a
                className="mb-3 flex w-full items-center justify-center rounded bg-[#AACF45] px-7 py-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-[#08AFF1] hover:shadow-lg focus:shadow-lg focus:outline-none"
                href="#!"
                role="button"
              >
                {/* Twitter */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 h-3.5 w-3.5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
                Continue with Twitter
              </a>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginComponent;