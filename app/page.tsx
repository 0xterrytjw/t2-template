import CustomLink from "@/components/CustomLink";
import { FaGithub } from "react-icons/fa";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

const HomePage = async () => {
  const session = await getServerSession(authOptions);
  console.log("session [on Home Page] -> ", session);

  return (
    <main className="flex h-screen flex-col items-center justify-center p-8 tracking-widest">
      <h1 className="animate-pulse text-3xl font-bold">Let's build. 🚀</h1>
      <CustomLink
        href="https://github.com/terrytjw/t2-template"
        className="flex gap-4 p-8"
      >
        <FaGithub />
        Github repo
      </CustomLink>
    </main>
  );
};

export default HomePage;
