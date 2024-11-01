import { MdOutlineWorkspacePremium } from "react-icons/md";
import { FaChalkboardTeacher, FaCamera, FaDumbbell, FaCube, FaKeyboard, FaCode } from 'react-icons/fa';

function Interests() {
  return (
    <div className="mt-6 text-sm rounded-2xl border border-zinc-300 p-6 dark:border-zinc-700/40 dark:text-zinc-100">
      <span className='flex'>
        <MdOutlineWorkspacePremium className='text-gray-500 text-2xl mr-2' />
        <h3 className="font-semibold mb-4">Interests</h3>
      </span>
      
      <ul className="space-y-2 ml-1 tracking-wide">
        <li className="flex items-center">
          <FaCode className="mr-3 text-teal-500" />
          <span>Programming</span>
        </li>
        <li className="flex items-center">
          <FaChalkboardTeacher className="mr-3 text-teal-500" />
          <span>Teaching</span>
        </li>
        <li className="flex items-center">
          <FaKeyboard className="mr-3 text-teal-500" />
          <span>Speed Typing</span>
        </li>
        <li className="flex items-center">
          <FaCamera className="mr-3 text-teal-500" />
          <span>Photography</span>
        </li>
        <li className="flex items-center">
          <FaDumbbell className="mr-3 text-teal-500" />
          <span>Weight Training</span>
        </li>
        <li className="flex items-center">
          <FaCube className="mr-3 text-teal-500" />
          <span>Cubing</span>
        </li>
      </ul>
    </div>
  );
}

export default Interests;
