//import React from "react";

const ItemCard = ({ item, index, deleteItem }) => {
    return (
        <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg">
            <img
                src={item.image}
                alt="item"
                className="w-full h-52 object-cover"
            ></img>
            <div className="p-4 space-y-2">
                <h2 className="text-2xl font-bold text-blue-400">
                    {item.title}
                </h2>
                <p>
                    <span className="font-bold">Type:</span>
                    {""}
                    {item.type}
                </p>

                <p>
                    <span className="font-bold">Location:</span>
                    {""}
                    {item.location}
                </p>

                <p>
                    <span className="font-bold">Phone:</span>
                    {""}
                    {item.phone}
                </p>

                <p className="text-gray-300">{item.description}</p>

                <button
                    onClick={() => deleteItem(index)}
                    className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg mt-3"
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default ItemCard;
