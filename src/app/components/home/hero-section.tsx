import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import DarkVeil from "@/rb/DarkVeil/DarkVeil";
import Link from "next/link";
import AnimatedButton from "../button/animation-button";

export default function HomeHeroSection() {
  return (
    <div className="w-full h-dvh relative p-4 overflow-x-hidden">
      <div className="w-full h-full justify-center items-center flex flex-col gap-4 sm:gap-8 text-center">
        <Badge variant="outline" className="gap-1.5 rounded-full text-sm">
          <span
            className="size-1.5 rounded-full bg-white"
            aria-hidden="true"
          ></span>
          welcome
        </Badge>
        <h1 className="text-4xl sm:text-7xl font-bold">Hi, I’m Krisnu 👋</h1>
        <p className="text-sm sm:text-lg  max-w-2xl sm:text-neutral-300 text-neutral-100 ">
          A passionate <span className="font-semibold">Web Developer</span> who
          loves building modern, fast, and user-friendly applications using
          <span className="font-semibold"> Next.js, React,</span> and
          <span className="font-semibold"> TypeScript</span>.
        </p>
        <div className="flex gap-4 mt-4 ">
          <Button size="lg" variant={"default"} asChild>
            <Link href="#projects">
              <AnimatedButton>Contact Me</AnimatedButton>
            </Link>
          </Button>
          <Button
            size="lg"
            variant={"outline"}
            className="rounded-full"
            asChild
          >
            <Link href="#contact">
              {" "}
              <AnimatedButton>Contact Me</AnimatedButton>
            </Link>
          </Button>
        </div>
      </div>
      <div className="h-full inset-0 absolute -z-1">
        <DarkVeil warpAmount={2} hueShift={15} speed={2} />
      </div>
    </div>
  );
}
