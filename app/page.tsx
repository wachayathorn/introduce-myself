import Experience from "./components/experience/experience";
import Stack from "./components/stack/stack";
import Welcome from "./components/welcome/welcome";

export default function Home() {
  return (
    <div>
      <Welcome />
      <Experience />
      <Stack />
    </div>
  );
}
