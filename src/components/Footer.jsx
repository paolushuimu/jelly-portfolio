import { useState } from "react";
import { useNavigate } from "react-router-dom";

import bilibiliImg from "../assets/profile/bilibili.png";
import xiaohongshu from "../assets/profile/xiaohongshu.jpg";

function Footer() {
  const [openEmail, setOpenEmail] = useState(false);
  const [openSocial, setOpenSocial] = useState(false);
  const navigate = useNavigate();
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer className="max-w-5xl m-auto mt-36 mb-12">
      <div className="flex justify-between items-start mb-56 text-gray-500">
        {/* EMAIL */}
        <div className="relative">
          <button
            className="w-full px-none"
            onClick={() => setOpenEmail(!openEmail)}
          >
            EMAIL
          </button>
          <div
            className={`absolute text-xs text-left left-0 w-40 overflow-hidden transition-all duration-500 ${
              openEmail
                ? "max-h-40 top-6 opacity-100"
                : "max-h-0 top-0 opacity-0"
            }`}
          >
            <p className="block py-2">211906758@qq.com</p>
          </div>
        </div>
        {/* SOCIAL */}
        <div className="relative">
          <button className="w-full" onClick={() => setOpenSocial(!openSocial)}>
            SOCIAL
          </button>
          <div
            className={`absolute text-xs text-left left-0 w-20 overflow-hidden transition-all duration-500 ${
              openSocial
                ? "max-h-60 top-6 opacity-100"
                : "max-h-0 top-0 opacity-0"
            }`}
          >
            <p className="block py-2">小红书</p>
            <img className="w-16 h-16" src={xiaohongshu} alt="小红书" />
            <p className="block pt-4 pb-2">哔哩哔哩</p>
            <img className="w-16 h-16" src={bilibiliImg} alt="哔哩哔哩" />
          </div>
        </div>
        <div>ABOUT ME</div>
        <div>DISCUSSION</div>
      </div>

      <button onClick={scrollTop} className="mx-auto font-bold">
        BACK TO TOP
      </button>
    </footer>
  );
}

export default Footer;
