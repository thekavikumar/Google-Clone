import Image from "next/image";
import { useRouter } from "next/router";
import React, { useRef } from "react";
import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

function Header() {
  const router = useRouter();
  const searchRef = useRef(null);
  const search = (e) => {
    e.preventDefault();
    const term = searchRef.current.value;
    if (!term) return;
    router.push(`/search?term=${term}`);
  };
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          alt="logo"
          src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          height={40}
          width={120}
          className="cursor-pointer"
          onClick={() => {
            router.push(`/`);
          }}
        />

        <form className="flex flex-grow px-6 py-2 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center">
          <input
            type="text"
            ref={searchRef}
            className="flex-grow w-full focus:outline-none"
          />
          <XIcon
            className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125"
            onClick={() => {
              searchRef.current.value = "";
            }}
          />
          <MicrophoneIcon className="mr-3 h-6 hidden sm:inline-flex border-l-2 pl-4 border-gray-300 text-blue-500" />
          <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex" />
          <button hidden type="submit" onClick={search}>
            Search
          </button>
        </form>
        {/* Avatar */}
        <Avatar
          className="ml-auto"
          url="https://media.discordapp.net/attachments/1012227636312944650/1037397113207791756/mypic_crop.jpg?width=610&height=617"
        />
      </div>
      {/* HeaderOptions */}
      <HeaderOptions />
    </header>
  );
}

export default Header;
