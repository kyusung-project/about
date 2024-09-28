import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      <main className="ml-16 p-10 space-y-16">
        {/* 이름과 짧은 문구 */}
        <div className="text-center">
          <h1 className="text-5xl font-bold">Kyusung Lee</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mt-2">
            &quot;Striving to build impactful digital experiences.&quot;
          </p>
        </div>

        {/* 좌측 사진 + 우측 설명 */}
        <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-10">
          <Image
            src="/profile.jpeg"
            alt="Profile Picture"
            width={160}
            height={160}
            className="rounded-full object-cover mb-5 md:mb-0"
          />
          <div className="space-y-4">
            <p className="text-lg">
              I am a software engineer focused on web development.
            </p>
            <p className="text-lg">
              I enjoy solving complex problems with elegant solutions.
            </p>
            <p className="text-lg">
              Passionate about learning new technologies and improving skills.
            </p>
          </div>
        </div>

        {/* Profile 섹션 */}
        <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold mb-4">Profile</h2>
          <div className="space-y-2">
            <p>
              <strong>Birthdate:</strong> January 1, 1990
            </p>
            <p>
              <strong>Contact:</strong> kyusung.lee@example.com
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
