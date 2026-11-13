import Contact from "@/app/components/sections/contact";
import Education from "@/app/components/sections/education";
import Experience from "@/app/components/sections/experience";
import Stack from "@/app/components/sections/stack";
import Welcome from "@/app/components/sections/hero";

export default function Home() {
  return (
    <div>
      <Welcome />
      <Experience />
      <Stack />
      <Education />
      <Contact />
    </div>
  );
}
