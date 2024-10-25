import List from "../components/List";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className="hero">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold sec_font">ETHERPUMP MEME</h1>
            <p className="py-6 text-xl">
              The First Meme Fair Launch Platform on Etherum. Meme Your Way to
              the Moon
            </p>
          </div>
        </div>
      </div>

      <List />
      <Footer />
    </div>
  );
};

export default HomePage;
