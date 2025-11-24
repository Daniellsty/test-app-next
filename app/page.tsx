import { LoginForm } from "@/components/shared";
import ThemeToggle from "@/components/ui/ThemeToggle/ThemeToggle";

const Home = () => {
  return (
    <div className="flex  items-center justify-center  w-full h-screen">
      <div className="absolute top-10 left-10">
        <ThemeToggle />
      </div>
      <div className="min-h-60  min-w-[20rem] ">
        <LoginForm />
      </div>
    </div>
  );
};

export default Home;
