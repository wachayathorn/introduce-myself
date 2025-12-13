import Experience from "./components/experience/experience";
import Stack from "./components/stack/stack";
import Welcome from "./components/welcome/welcome";

export default function Home() {
  return (
    <div className="snap-y snap-mandatory overflow-y-scroll h-screen">
      <Welcome />
      <Experience />
      <Stack />
    </div>
  );
}
