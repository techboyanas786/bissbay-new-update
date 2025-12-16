import React from "react";
import { MdOutlineEmail } from "react-icons/md";

function Newsletter() {
  return (
    <section className="md:px-12 md:pb-6">
      <div className="container mx-auto">
        <div className="relative overflow-hidden w-full max-w-4xl mx-auto flex flex-col items-center">
          <div className="flex flex-col justify-center items-center gap-4">
            <h3 className="!text-black !text-center ">
              <span className="hover:text-[#ff4200] transition-colors duration-200 cursor-pointer">
                Sign up{" "}
              </span>
              for the Sales{" "}
              Professionals{" "}
              Newsletter
            </h3>
            <div className="flex flex-row justify-center items-center gap-3">
              <p className="text-center">
                Stay ahead in sales with insights delivered straight to your
                inbox.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
