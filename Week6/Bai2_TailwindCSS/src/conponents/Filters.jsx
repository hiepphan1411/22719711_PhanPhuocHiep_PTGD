import { useState } from "react";

function Filters() {
    const [typeOpen, setTypeOpen] = useState(true);
    const [timeOpen, setTimeOpen] = useState(true);
    const [ratingOpen, setRatingOpen] = useState(true);

    return (
        <aside className="bg-white w-64 p-5 rounded-lg shadow-lg font-sans">
            <div className="flex items-center gap-3 mb-3">
                <img src="../public/list_filter.png" alt="Filter Icon" className="w-8 h-8" />
                <h3 className="text-lg font-semibold">FILTERS</h3>
            </div>

            <div className="mt-4">
                <h4 className="flex justify-between items-center text-base cursor-pointer" onClick={() => setTypeOpen(!typeOpen)}>
                    Type <span className="text-pink-500">{typeOpen ? "▲" : "▼"}</span>
                </h4>
                {typeOpen && (
                    <div className="flex gap-2 pt-2">
                        <div className="w-1/2 space-y-1">
                            <label className="flex items-center"><input type="checkbox" className="mr-2" /> Pan-fried</label>
                            <label className="flex items-center"><input type="checkbox" className="mr-2" defaultChecked /> Grilled</label>
                            <label className="flex items-center"><input type="checkbox" className="mr-2" /> Sauteed</label>
                            <label className="flex items-center"><input type="checkbox" className="mr-2" /> Steamed</label>
                        </div>
                        <div className="w-1/2 space-y-1">
                            <label className="flex items-center"><input type="checkbox" className="mr-2" /> Stir-fried</label>
                            <label className="flex items-center"><input type="checkbox" className="mr-2" defaultChecked /> Roasted</label>
                            <label className="flex items-center"><input type="checkbox" className="mr-2" /> Baked</label>
                            <label className="flex items-center"><input type="checkbox" className="mr-2" /> Stewed</label>
                        </div>
                    </div>
                )}
            </div>

            <div className="mt-4">
                <h4 className="flex justify-between items-center text-base cursor-pointer" onClick={() => setTimeOpen(!timeOpen)}>
                    Time <span className="text-pink-500">{timeOpen ? "▲" : "▼"}</span>
                </h4>
                {timeOpen && (
                    <div className="pt-2">
                        <input type="range" min="30" max="50" className="w-full accent-pink-500" />
                        <div className="flex justify-between text-sm text-gray-600 mt-1">
                            <span>30 minutes</span>
                            <span>50 minutes</span>
                        </div>
                    </div>
                )}
            </div>

            <div className="mt-4">
                <h4 className="flex justify-between items-center text-base cursor-pointer" onClick={() => setRatingOpen(!ratingOpen)}>
                    Rating <span className="text-pink-500">{ratingOpen ? "▲" : "▼"}</span>
                </h4>
                {ratingOpen && (
                    <div className="flex flex-col space-y-1 pt-2">
                        <label className="flex items-center"><input type="checkbox" className="mr-2" /> ⭐⭐⭐⭐⭐</label>
                        <label className="flex items-center"><input type="checkbox" className="mr-2" /> ⭐⭐⭐⭐</label>
                        <label className="flex items-center"><input type="checkbox" className="mr-2" /> ⭐⭐⭐</label>
                        <label className="flex items-center"><input type="checkbox" className="mr-2" /> ⭐⭐</label>
                        <label className="flex items-center"><input type="checkbox" className="mr-2" /> ⭐</label>
                    </div>
                )}
            </div>

            <button className="w-full bg-pink-500 text-white mt-4 py-2 rounded-md hover:bg-pink-600">Apply</button>
        </aside>
    );
}

export default Filters;