import dynamic from "next/dynamic";

//this should make sure that we wont have issues in the future by using client side stuff in the Scene component
const Scene = dynamic(() => import("@/components/Scene"), {
  //this is to tell next.js to load the Scene component dynamically
  // loading: () => <p>Loading...</p>,
  ssr: !!false, //this is to tell next.js to not render the Scene component on the server
});

export default function Home() {
  return (
    <div className="h-dvh w-full font-[family-name:var(--font-geist-sans)]">
      <header className="h-dvh relative">
        <Scene />
      </header>
      <main></main>
      <footer></footer>
    </div>
  );
}
