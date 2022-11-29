import { Header } from "../components";
import { Gallery, Main } from "../models/home";

const Home = () => {
  return (
    <main className="w-full h-screen">
      <Header />
      <Main />
      <Gallery />
    </main>
  );
};

export default Home;
