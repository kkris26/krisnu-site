import { Button } from "@/components/ui/button";
import {
  Menubar,
  MenubarLabel,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Menu, MessageCircle } from "lucide-react";
import Link from "next/link";

export function MenuBar() {
  const menuBar: MenuBar[] = [
    { menu: "Home", path: "/" },
    { menu: "About", path: "/about" },
    { menu: "Projects", path: "/projects" },
    { menu: "Skills", path: "/skills" },
    { menu: "Blog", path: "/blog" },
    { menu: "Contact", path: "/contact" },
  ];
  return (
    <nav className="w-full flex justify-center">
      <Menubar className="bg-transparent fixed rounded-full p-5 gap-6 top-4 backdrop-blur-sm z-1 hidden sm:flex">
        <MenubarMenu>
          {menuBar.map((m, i) => (
            <MenubarLabel
              className=" hover:underline focus:bg-transparent"
              key={i}
            >
              <Link href={m.path}>{m.menu}</Link>
            </MenubarLabel>
          ))}
        </MenubarMenu>
      </Menubar>

      <Menubar className="bg-transparent fixed rounded-full w-[95%] py-6 px-2 gap-6 top-4 backdrop-blur-sm z-1 justify-between flex sm:hidden">
        <Button size={"sm"}>
          <Menu />
        </Button>
        <Button size={"sm"}>
          <MessageCircle />
        </Button>
      </Menubar>
    </nav>
  );
}
