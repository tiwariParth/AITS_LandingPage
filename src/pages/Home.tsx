import NavBar from "../components/NavBar.tsx";
import img from "../assets/unseen-studio-s9CC2SKySJM-unsplash.jpg";
import { Link } from "react-router-dom";
import Cards from "../components/Cards.tsx";

const Home = () => {
  return (
    <div>
      <NavBar />
      <section
        className="h-screen bg-cover bg-center "
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
        <div className=" bg-black bg-opacity-50 h-full flex items-center px-[3rem]">
          <div className="max-w-3xl text-left">
            <h1 className="text-4xl font-bold text-white mb-4 ">
              Unfold CCIE Expertise More than Just Training
            </h1>
            <p className="text-lg text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id velit
              natus debitis, alias iusto possimus qui esse dicta explicabo
              pariatur culpa libero iste illo quaerat quasi soluta dolores harum
              vel error quam fuga ipsum minus! Hic, cupiditate quasi. Itaque
              excepturi sequi cumque repellendus, aut eaque eum voluptatem odit.
              Quasi impedit doloribus esse necessitatibus vero, distinctio
              beatae dolor minima? Ullam, rerum consequuntur.
            </p>
            <Link to={"/course"}>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 transition-all delay-100 rounded-lg mt-4">
                Join Now
              </button>
            </Link>
          </div>
        </div>
        <Cards />
      </section>
    </div>
  );
};

export default Home;
