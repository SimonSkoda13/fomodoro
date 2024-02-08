import Counter from "@/components/Counter/Counter";

export default function Home() {
  return (
    <main className="flex flex-col items-center p-6 h-screen justify-center">
      <h1 className="text-6xl font-bold text-white">Fomodoro</h1>
      <Counter />
    </main>
  );
}
