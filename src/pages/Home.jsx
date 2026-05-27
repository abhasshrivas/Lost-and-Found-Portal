//import React from "react";
import ItemCard from "../components/ItemCard";

const Home = ({ items, deleteItem }) => {
    return (
        <div className="p-5">
            <h2 className="text-3xl font-bold mb-5">All Lost & Found Items</h2>

            {items.length === 0 ? (
                <p>No items yet</p>
            ) : (
                <div className="grid md:grid-cols-3 gap-5">
                    {items.map((items, index) => (
                        <ItemCard
                            key={index}
                            item={items}
                            index={index}
                            deleteItem={deleteItem}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Home;
