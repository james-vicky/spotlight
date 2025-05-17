import { MdOutlineWorkspacePremium } from "react-icons/md";
import { FaTelegramPlane } from 'react-icons/fa';
import { GiRank1 } from "react-icons/gi";
import { SiLeetcode } from "react-icons/si";

function Achievements() {
  return (
    <div className="mt-6 text-sm rounded-2xl border border-zinc-300 p-6 dark:border-zinc-700/40 dark:text-zinc-100">
      <span className='flex'>
        <MdOutlineWorkspacePremium className='text-gray-500 text-2xl mr-2' />
        <h3 className="font-semibold mb-5">Achievements</h3>
      </span>
      <ul className="space-y-3 ml-1 tracking-wide">
        <li>
          <div className="flex items-center">
            <FaTelegramPlane className="mr-3 text-teal-500 text-lg" />
            <h4 className="font-medium">20K+ Subscribers on Telegram Notes Channel</h4>
          </div>
          <p className="ml-[30px] text-zinc-500 dark:text-zinc-400">Handwritten Notes for GATE 2024</p>
        </li>
        <li>
          <div className="flex items-center">
            <SiLeetcode className="mr-3 text-teal-500 text-lg" />
            <h4 className="font-medium">
              Top 10% on Leetcode
            </h4>
          </div>
          <p className="ml-[30px] text-zinc-500 dark:text-zinc-400">Weekly Contests 2024</p>
        </li>
        <li>
          <div className="flex items-center">
            <GiRank1 className="mr-3 text-teal-500 text-xl" />
            <h4 className="font-medium">
              Qualified GATE 2024 in CSIT paper. 
            </h4>
          </div>
          <p className="ml-[30px] text-zinc-500 dark:text-zinc-400">GATE 2024 IISC</p>
        </li>
      </ul>
    </div>
  );
}

export default Achievements;