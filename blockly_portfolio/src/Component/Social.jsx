import React from "react";
import face from "../assets/Facebook.png"
import insta from "../assets/Instagram.png";
import twit from "../assets/Twitter.png";
import git from "../assets/GitHub.png";
import linkedin from "../assets/LinkedIn.png"
import telegram from "../assets/Telegram.png"
import koo from "../assets/Koo.png"

const Social = () => {
  return (
    <div >
      <div>
        <ul className="flex flex-col gap-2  w-6" >
          <li className="dark:bg-white"> <img src={face}  /> </li>
          <li className="dark:bg-white"> <img src={insta}  /> </li>
          <li className="dark:bg-white"> <img src={twit}  /> </li>
          <li className="dark:bg-white"> <img src={git}  /> </li>
          <li className="dark:bg-white"> <img src={linkedin}  /> </li>
          <li className="dark:bg-white"> <img src={telegram}  /> </li>
          <li className="dark:bg-white"> <img src={koo}  /> </li>
        </ul>
      </div>
    </div>
  );
};

export default Social;
