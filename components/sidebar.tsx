import Link from "next/link";
import DarkModeToggle from "./dark-mode-toggle";

export default function Sidebar() {
  return (
    <div className="w-1/4 bg-gray-200 dark:bg-gray-800 text-black dark:text-white p-5">
      <ul>
        <li>
          <Link href="/introduction">소개글</Link>
        </li>
        <li>
          <Link href="/experience">경력</Link>
        </li>
        <li>
          <Link href="/techstack">기술스택</Link>
        </li>
        <li>
          <Link href="/projects">프로젝트</Link>
        </li>
      </ul>
      <div className="mt-5">
        <DarkModeToggle />
      </div>
    </div>
  );
}
