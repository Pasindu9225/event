import Hero from "./components/Hero";
import ShowComment from "./components/ShowComment";

export default function Home() {
  return (
    <div className=" flex flex-col">
      <Hero />
      <ShowComment />
    </div>
  );
}
