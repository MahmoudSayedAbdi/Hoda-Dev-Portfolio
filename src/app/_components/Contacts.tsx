import React from "react";

export default function Contacts() {
  return (
    <div id="contact" className="grid grid-cols-1 lg:grid-cols-3 gap-10 p-10 mt-10">
      {/* left side */}
      <div className="col-span-1 flex flex-col">
        {/* header */}
        <div className="flex flex-col gap-4 mb-8">
          <p className="text-lg font-semibold">Contact</p>
          <p className="text-3xl font-bold uppercase">get in touch</p>
        </div>

        <p className="text-gray-500 mb-10">
          I&apos;m here to help! Whether you have questions, need support, or want to collaborate,
          feel free to reach out. Let&apos;s connect and make something great together!
        </p>

        <h5 className="font-bold">+201113404148</h5>
        <h5 className="font-bold">MahmoudSayed.2003.8@gmail.com</h5>
      </div>

      {/* right side */}
      <div className="col-span-1 lg:col-span-2 flex flex-col gap-10 bg-gradient text-white rounded-2xl p-10 lg:me-40">
        <h6 className="uppercase font-bold text-5xl text-black">Any projects?</h6>

        <form action="" method="post" className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <label className="uppercase" htmlFor="name">
              Name
            </label>
            <input
              className="border-b border-b-white"
              type="text"
              id="name"
              placeholder="Year name"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label className="uppercase" htmlFor="email ">
              Email
            </label>
            <input
              className="border-b border-b-white"
              type="text"
              id="email"
              placeholder="Year email"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label className="uppercase" htmlFor="message ">
              Message
            </label>
            <input
              className="border-b border-b-white"
              type="text"
              id="message"
              placeholder="Write year message"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
