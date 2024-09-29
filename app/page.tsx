import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      <main className="ml-16 p-10 space-y-16">
        {/* 이름과 짧은 문구 */}
        <div className="text-center">
          <h1 className="text-5xl font-bold">이규성</h1>
        </div>

        {/* 좌측 사진 + 우측 설명 */}
        <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-10">
          <div className="relative">
            <Image
              src="/profile.jpeg"
              alt="Profile Picture"
              width={160}
              height={160}
              className="rounded-3xl object-cover mb-5 md:mb-0"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center py-2 rounded-b-3xl">
              도담 규성 다혜
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-lg">
              5년차 백엔드 개발자이며, 페이프로토콜에서 개발팀장으로 근무
              중입니다.
            </p>
            <p className="text-lg">
              주로 Java와 Spring Framework를 사용하여 서버 개발을 하고 있습니다.
            </p>
            <p className="text-lg">
              최근에는 프론트엔드 기술에도 관심을 가지고 공부하고 있습니다.
            </p>
          </div>
        </div>

        <hr className="my-6 border-gray-300 dark:border-gray-600" />

        {/* Profile 섹션 */}
        <div>
          <h2 className="text-3xl font-semibold mb-4">Profile</h2>
          <ul className="space-y-2">
            <li className="flex items-center">
              <span className="material-icons mr-2">🎂</span>
              1995.05.05
            </li>
            <li className="flex items-center">
              <span className="material-icons mr-2">📞</span>
              010.9101.9320
            </li>
            <li className="flex items-center">
              <span className="material-icons mr-2">✉️</span>
              ks5050577@gmail.com
            </li>
            <li className="flex items-center">
              <span className="material-icons mr-2">🔗</span>
              <a
                href="https://github.com/LeeKyuSung"
                className="text-blue-500 hover:underline"
              >
                GitHub
              </a>
            </li>
            <li className="flex items-center">
              <span className="material-icons mr-2">🔗</span>
              <a
                href="https://www.instagram.com/kyusung2"
                className="text-blue-500 hover:underline"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
