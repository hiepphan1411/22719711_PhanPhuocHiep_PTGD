import Content from "./Content";
import Filters from "./Filters";
import Footer from "./FooterCustom";
import Menu from "./Menu";

export default function AppLoad() {
  return (
    <div className="grid grid-cols-4 grid-rows-[auto_1fr_auto] gap-2 bg-white/80 p-2 text-black w-[98vw]">
      <div className="col-span-4">
        <Menu />
      </div>

      <div className="col-span-1">
        <Filters />
      </div>

      <div className="col-span-3">
        <Content />
      </div>

      <div className="col-span-4">
        <Footer />
      </div>
    </div>
  );
}
