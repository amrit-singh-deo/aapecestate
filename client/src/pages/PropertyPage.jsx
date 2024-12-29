import React from "react";

import mainImage from "/property-image-3.jpg";
import image1 from "/property-image-1.jpg";
import image2 from "/property-image-2.jpg";

const sampleProperty = {
  title: "Luxury Family Home",
  description:
    "This luxurious family home is located in a prime location with stunning views and modern amenities. It offers spacious rooms, a beautiful garden, and state-of-the-art facilities.",
  price: "75,00,000",
  bedrooms: 4,
  bathrooms: 3,
  size: 3500,
  location: "Mumbai, Maharashtra",
  mainImage: mainImage,
  images: [image1, image2],
  amenities: [
    "Swimming Pool",
    "Gym",
    "Garden",
    "24/7 Security",
    "Parking Space",
  ],
};

const PropertyPage = () => {
  const property = sampleProperty;

  return (
    <div className="container mx-auto py-10 px-6">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="relative w-full">
          <img src={property.mainImage} alt={property.title} className="w-full h-72 object-cover" />
          <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-4 py-2 rounded-lg">
            <h1 className="text-2xl font-bold">{property.title}</h1>
            <p className="text-lg">₹{property.price}</p>
          </div>
        </div>
        <div className="p-8">
          <p className="text-gray-700 mb-4">{property.description}</p>
          <ul className="list-disc list-inside mb-6">
            <li>{property.bedrooms} Bedrooms</li>
            <li>{property.bathrooms} Bathrooms</li>
            <li>{property.size} sqft</li>
            <li>Location: {property.location}</li>
          </ul>
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-3">Amenities</h2>
            <ul className="list-disc list-inside">
              {property.amenities.map((amenity, index) => (
                <li key={index}>{amenity}</li>
              ))}
            </ul>
          </div>
          <button className="px-8 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700">Contact Us</button>
        </div>
        <div className="p-8 bg-gray-100">
          <h2 className="text-2xl font-bold mb-4">Property Images</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {property.images.map((image, index) => (
              <img key={index} src={image} alt={`${property.title} ${index + 1}`} className="h-48 w-full object-cover rounded-lg shadow-lg" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyPage;