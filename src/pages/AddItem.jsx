import { useState } from "react";

const AddItem = ({ addItem }) => {
    const [title, setTitle] = useState("");
    const [type, setType] = useState("Lost");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    const [phone, setPhone] = useState("");
    const [image, setImage] = useState("");

    const handleImage = (e) => {
        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onloadend = () => {
                setImage(reader.result);
            };

            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newItem = {
            title,
            type,
            location,
            phone,
            description,
            image,
        };

        addItem(newItem);
        setTitle("");
        setType("Lost");
        setLocation("");
        setPhone("");
        setDescription("");
        setImage("");
    };
    return (
        <div className="p-5">
            <h2 className="text-3xl font-bold mb-5">Add Item</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    placeholder="Item Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full p-3 rounded-lg bg-white text-black"
                    required
                ></input>

                <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className="w-full p-3 rounded-lg bg-white text-black"
                >
                    <option>Lost</option>
                    <option>Found</option>
                </select>

                <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Enter loaction"
                    className="w-full p-3 rounded-lg bg-white text-black"
                    required
                ></input>

                <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter phone"
                    className="w-full p-3 rounded-lg bg-white text-black"
                    required
                ></input>

                <textarea
                    placeholder="Enter description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full p-3 rounded-lg bg-white text-black"
                ></textarea>

                <input
                    type="file"
                    onChange={handleImage}
                    className="w-full "
                    required
                ></input>

                <button className="bg-blue-500 hover:bg-blue-600 px-5 py-3 rounded-lg">
                    Add Item
                </button>
            </form>
        </div>
    );
};

export default AddItem;
