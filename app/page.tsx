import Image from "next/image";

export default function Home() {
  const techStack = {
    "Back-end Development": [
      { name: "Java", proficiency: 90 },
      { name: "Spring Boot", proficiency: 85 },
      { name: "Spring Cloud", proficiency: 80 },
      { name: "JPA", proficiency: 75 },
    ],
    "Front-end Development": [
      { name: "JavaScript", proficiency: 80 },
      { name: "TypeScript", proficiency: 75 },
      { name: "Next.js", proficiency: 70 },
      { name: "HTML", proficiency: 90 },
      { name: "CSS", proficiency: 85 },
      { name: "Dart", proficiency: 65 },
      { name: "Flutter", proficiency: 60 },
    ],
    "DevOps & Cloud Infrastructure": [
      { name: "Docker", proficiency: 70 },
      { name: "AWS RDS", proficiency: 75 },
      { name: "AWS EC2", proficiency: 70 },
      { name: "AWS Amplify", proficiency: 65 },
      { name: "AWS Route 53", proficiency: 60 },
      { name: "AWS ECS", proficiency: 65 },
      { name: "GitHub Actions", proficiency: 70 },
    ],
    Database: [
      { name: "PlanetScale", proficiency: 60 },
      { name: "Prisma", proficiency: 70 },
      { name: "Firebase Firestore", proficiency: 75 },
    ],
    "Firebase Services": [
      { name: "Firebase", proficiency: 80 },
      { name: "Firebase Storage", proficiency: 75 },
      { name: "Firebase Functions", proficiency: 70 },
      { name: "Firebase Messaging", proficiency: 65 },
    ],
    "Collaboration Tools": [
      { name: "GitHub", proficiency: 90 },
      { name: "Slack", proficiency: 85 },
      { name: "Notion", proficiency: 80 },
    ],
  };
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      <main className="ml-16 p-10 space-y-16">
        {/* 이름과 짧은 문구 */}
        <div className="text-center">
          <h1 className="text-5xl font-bold">이규성</h1>
        </div>

        {/* 사진, 설명, 프로필 섹션 */}
        <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-10">
          {/* 좌측 사진 */}
          <div className="relative">
            <Image
              src="/profile.jpeg"
              alt="Profile Picture"
              width={250}
              height={160}
              className="rounded-3xl object-cover mb-5 md:mb-0"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center py-2 rounded-b-3xl">
              도담 규성 다혜
            </div>
          </div>

          {/* 우측 설명과 프로필 */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-lg">
                5년차 백엔드 개발자이며, 페이프로토콜에서 개발팀장으로 근무
                중입니다.
              </p>
              <p className="text-lg">
                주로 Java와 Spring Framework를 사용하여 서버 개발을 하고
                있습니다.
              </p>
              <p className="text-lg">
                최근에는 프론트엔드 기술에도 관심을 가지고 공부하고 있습니다.
              </p>
            </div>

            <div className="bg-gray-100 dark:bg-gray-700 p-6 m-6 rounded-lg shadow-md">
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="mr-2">🎂</span>
                  1995.05.05
                </li>
                <li className="flex items-center">
                  <span className="mr-2">📞</span>
                  010.9101.9320
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✉️</span>
                  ks5050577@gmail.com
                </li>
                <li className="flex items-center">
                  <span className="mr-2">🔗</span>
                  <a
                    href="https://github.com/LeeKyuSung"
                    className="text-blue-500 hover:underline"
                  >
                    GitHub
                  </a>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">🔗</span>
                  <a
                    href="https://www.instagram.com/kyusung2"
                    className="text-blue-500 hover:underline"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-300 dark:border-gray-600" />

        {/* 기술스택 섹션 */}
        <div className="space-y-6">
          {Object.entries(techStack).map(([category, stacks]) => (
            <div key={category}>
              <h3 className="text-2xl font-bold mb-2">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {stacks.map((stack) => (
                  <div key={stack.name} className="relative group">
                    {/* Chip 형태 */}
                    <div className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded-full cursor-pointer">
                      {stack.name}
                    </div>

                    {/* 프로그레스바 */}
                    <div className="absolute left-0 top-full mt-1 w-full opacity-0 group-hover:opacity-100 group-hover:scale-100 scale-0 transition-opacity transition-transform duration-300">
                      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-600">
                        <div
                          className="bg-blue-600 h-2.5 rounded-full"
                          style={{ width: `${stack.proficiency}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <hr className="my-6 border-gray-300 dark:border-gray-600" />

        {/* 경력 섹션 */}
        <div>
          <h2 className="text-3xl font-semibold mb-4">경력</h2>
          <ul className="space-y-2">
            <li>페이프로토콜 - 개발팀장 (2018 - 현재)</li>
            <li>ABC 회사 - 백엔드 개발자 (2015 - 2018)</li>
          </ul>
        </div>

        <hr className="my-6 border-gray-300 dark:border-gray-600" />

        {/* 프로젝트 섹션 */}
        <div>
          <h2 className="text-3xl font-semibold mb-4">프로젝트</h2>
          <ul className="space-y-2">
            <li>프로젝트 A - 설명</li>
            <li>프로젝트 B - 설명</li>
            <li>프로젝트 C - 설명</li>
          </ul>
        </div>

        <hr className="my-6 border-gray-300 dark:border-gray-600" />

        {/* 공부중 섹션 */}
        <div>
          <h2 className="text-3xl font-semibold mb-4">공부중</h2>
          <ul className="space-y-2">
            <li>프론트엔드 기술</li>
            <li>클라우드 컴퓨팅</li>
            <li>데이터베이스 최적화</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
