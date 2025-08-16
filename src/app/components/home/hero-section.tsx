import { Button } from "@/components/ui/button";
import DarkVeil from "@/rb/DarkVeil/DarkVeil";
import Link from "next/link";

export default function HomeHeroSection() {
  return (
    <div className="w-full h-screen relative p-4">
      <div className="w-full h-screen justify-center items-center flex flex-col gap-4 sm:gap-8 text-center">
        <h1 className="text-4xl sm:text-7xl font-bold">Hi, I’m Krisnu 👋</h1>
        <p className="text-sm sm:text-lg  max-w-2xl sm:text-neutral-300 text-neutral-100 ">
          A passionate <span className="font-semibold">Web Developer</span> who
          loves building modern, fast, and user-friendly applications using
          <span className="font-semibold"> Next.js, React,</span> and
          <span className="font-semibold"> TypeScript</span>.
        </p>
        <div className="flex gap-4 mt-4 ">
          <Button size="lg" variant={"default"} asChild>
            <Link href="#projects" className="hover:underline">
              View Projects
            </Link>
          </Button>
          <Button
            size="lg"
            variant={"outline"}
            className="rounded-full"
            asChild
          >
            <Link href="#contact" className="hover:underline">
              {" "}
              Contact Me
            </Link>
          </Button>
        </div>
      </div>
      <div className="h-full inset-0 absolute -z-1">
        <DarkVeil warpAmount={0.6} />
      </div>
    </div>
  );
}
