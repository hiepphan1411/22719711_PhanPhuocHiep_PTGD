import "./App.css";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SectionEditor from "./components/SectionEditor";
import SectionRecipes from "./components/SectionRecipes";
import SectionRecipesWVideo from "./components/SectionRecipesWVideo";

function App() {
  return (
    <div className="font-sans">
      {/* Header */}
      <Header />
      {/* Hero Section */}
      <Banner />

      {/* This Summer Recipes */}
      <SectionRecipes />

      {/* Recipes With Videos */}
      <SectionRecipesWVideo />

      {/* Editor's Pick */}
      <SectionEditor />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
