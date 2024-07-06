import Home from "./pages/Home";
import prisma from "@/lib/prisma";

const HomePage = async () => {
  const users = await prisma.user.findMany();
  console.log(users);

  return <Home />;
};

export default HomePage;
