import { Header } from "../components";

const Home = () => {
  return (
    <main className="w-full h-screen">
      <Header />
      <div className="h-[calc(50vh-28px)] "></div>
      <div className="h-[calc(50vh-28px)] bg-blue-800">hola</div>
    </main>
  );
};

export default Home;
