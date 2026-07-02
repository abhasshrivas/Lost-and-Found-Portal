import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
//import ItemCard from "./components/ItemCard";
import Home from "./pages/Home";
import AddItem from "./pages/AddItem";

import "./App.css";

function App() {
    const [items, setItems] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const savedItems = JSON.parse(localStorage.getItem("items"));

        if (savedItems) {
            setItems(savedItems);
        
    }, []);
    useEffect(() => {
        localStorage.setItem("items", JSON.stringify(items));
    }, [items]);

    const addItem = (item) => {
        setItems([item, ...items]);
    };

    const deleteItem = (index) => {
        const updatedItems = items.filter((_, i) => i !== index); 
        setItems(updatedItems);
    };

    const filteredItems = items.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase()),
    );
    return (
        <div>
            <Navbar />
            <div className="p-5">
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="search item"
                    className="w-full p-3 rounded-lg bg-white text-black mb-5"
                ></input>
            </div>

            <div className="grid lg:grid-cols-3 gap-5 p-5">
                <div className="lg:col-span-1 bg-gray-900 rounded-2xl">
                    <AddItem addItem={addItem} />
                </div>
                <div className="lg:col-span-2 bg-gray-900 rounded-2xl">
                    <Home items={filteredItems} deleteItem={deleteItem} />
                </div>
            </div>
        </div>
    );
}

export default App;
