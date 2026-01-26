"use client";

import { useState } from "react";

const Page = () => {
  const [roomName, setRoomName] = useState("");
  const [roomNumber, setRoomNumber] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [roomSize, setRoomSize] = useState("");
  const [floor, setFloor] = useState("");
  const [maxGuests, setMaxGuests] = useState("");
  const [minStay, setMinStay] = useState(1);

  const [bedType, setBedType] = useState("Single Bed");
  const [bathroom, setBathroom] = useState("Private Bathroom");
  const [viewType, setViewType] = useState("City View");
  const [smoking, setSmoking] = useState("Non Smoking");

  const [extraBed, setExtraBed] = useState("No");
  const [extraBedPrice, setExtraBedPrice] = useState("");

  const [refundPolicy, setRefundPolicy] = useState("Refundable");
  const [amenities, setAmenities] = useState([]);
  const [description, setDescription] = useState("");
  const [availability, setAvailability] = useState("Available");

  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);

  const [loading, setLoading] = useState(false);

  const amenityList = [
    "Free Wi-Fi",
    "Air Conditioning",
    "TV",
    "Mini Bar",
    "Balcony",
    "Breakfast Included",
    "Room Service",
    "Heater",
  ];

  const handleAmenityChange = (amenity) => {
    setAmenities((prev) =>
      prev.includes(amenity)
        ? prev.filter((a) => a !== amenity)
        : [...prev, amenity]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!roomName || !roomNumber || !price || !maxGuests) {
      return alert("Please fill all required fields");
    }

    if (!image1 || !image2 || !image3) {
      return alert("Please upload all 3 images");
    }

    if (extraBed === "Yes" && !extraBedPrice) {
      return alert("Please enter extra bed price");
    }

    setLoading(true);
    setTimeout(() => {
      alert("Room added successfully!");
      setLoading(false);
    }, 1000);
  };

  return (
    <section className="pt-24 md:pt-32 pb-16 bg-[#f4fbfb] min-h-screen">
      {/* 🔽 HERE */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-10">
          Add New Room
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 sm:p-8 md:p-10 rounded-3xl shadow-lg grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6"
        >
          {/* Room Name */}
          <div>
            <label className="block mb-1 text-sm font-medium">Room Name *</label>
            <input className="input w-full" placeholder="Deluxe Sea View" value={roomName} onChange={(e) => setRoomName(e.target.value)} />
          </div>

          {/* Room Number */}
          <div>
            <label className="block mb-1 text-sm font-medium">Room Number *</label>
            <input className="input w-full" placeholder="A-101" value={roomNumber} onChange={(e) => setRoomNumber(e.target.value)} />
          </div>

          {/* Price */}
          <div>
            <label className="block mb-1 text-sm font-medium">Price per Night *</label>
            <input type="number" className="input w-full" placeholder="5000" value={price} onChange={(e) => setPrice(e.target.value)} />
          </div>

          {/* Discount */}
          <div>
            <label className="block mb-1 text-sm font-medium">Discount (%)</label>
            <input type="number" className="input w-full" placeholder="10" value={discount} onChange={(e) => setDiscount(e.target.value)} />
          </div>

          {/* Room Size */}
          <div>
            <label className="block mb-1 text-sm font-medium">Room Size</label>
            <input className="input w-full" placeholder="35 m²" value={roomSize} onChange={(e) => setRoomSize(e.target.value)} />
          </div>

          {/* Floor */}
          <div>
            <label className="block mb-1 text-sm font-medium">Floor</label>
            <input className="input w-full" placeholder="3" value={floor} onChange={(e) => setFloor(e.target.value)} />
          </div>

          {/* Max Guests */}
          <div>
            <label className="block mb-1 text-sm font-medium">Max Guests *</label>
            <input type="number" className="input w-full" placeholder="3" value={maxGuests} onChange={(e) => setMaxGuests(e.target.value)} />
          </div>

          {/* Min Stay */}
          <div>
            <label className="block mb-1 text-sm font-medium">Minimum Stay</label>
            <input type="number" className="input w-full" placeholder="1" value={minStay} onChange={(e) => setMinStay(e.target.value)} />
          </div>

          {/* Bed Type */}
          <div>
            <label className="block mb-1 text-sm font-medium">Bed Type</label>
            <select className="input w-full" value={bedType} onChange={(e) => setBedType(e.target.value)}>
              <option>Single Bed</option>
              <option>Double Bed</option>
              <option>King Size Bed</option>
              <option>Twin Beds</option>
            </select>
          </div>

          {/* View */}
          <div>
            <label className="block mb-1 text-sm font-medium">View Type</label>
            <select className="input w-full" value={viewType} onChange={(e) => setViewType(e.target.value)}>
              <option>City View</option>
              <option>Sea View</option>
              <option>Garden View</option>
            </select>
          </div>

          {/* Extra Bed */}
          <div>
            <label className="block mb-1 text-sm font-medium">Extra Bed</label>
            <select className="input w-full" value={extraBed} onChange={(e) => setExtraBed(e.target.value)}>
              <option>No</option>
              <option>Yes</option>
            </select>
          </div>

          {extraBed === "Yes" && (
            <div>
              <label className="block mb-1 text-sm font-medium">Extra Bed Price</label>
              <input type="number" className="input w-full" placeholder="1500" value={extraBedPrice} onChange={(e) => setExtraBedPrice(e.target.value)} />
            </div>
          )}

          {/* Amenities */}
          <div className="md:col-span-2">
            <label className="block mb-2 text-sm font-medium">Amenities</label>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {amenityList.map((a) => (
                <label key={a} className="text-sm flex items-center gap-2">
                  <input type="checkbox" checked={amenities.includes(a)} onChange={() => handleAmenityChange(a)} />
                  {a}
                </label>
              ))}
            </div>
          </div>

          {/* Images */}
          <div className="md:col-span-2">
            <label className="block mb-3 text-sm font-medium">Room Images (3)</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <input type="file" className="input w-full" onChange={(e) => setImage1(e.target.files[0])} />
              <input type="file" className="input w-full" onChange={(e) => setImage2(e.target.files[0])} />
              <input type="file" className="input w-full" onChange={(e) => setImage3(e.target.files[0])} />
            </div>
          </div>

          {/* Submit */}
          <button
            disabled={loading}
            className="md:col-span-2 w-full bg-blue-600 text-white py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg"
          >
            {loading ? "Adding Room..." : "Add Room"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Page;
