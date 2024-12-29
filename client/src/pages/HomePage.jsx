import React from "react";
import { Link } from "react-router-dom";
import PropertyPage from "./PropertyPage";

const HomePage = () => {
  return (
    <div className="h-full w-full overflow-x-hidden">
      <main className="w-[90%] mx-auto flex flex-col items-center justify-center mt-16">
        {/* Hero Section */}
        <section className="w-full max-w-6xl text-center">
          <h1 className="text-5xl font-bold text-blue-700 mb-4">
            Find Your Dream Home
          </h1>
          <p className="text-gray-600 mb-8">
            Explore the best properties at the best prices.
          </p>
          <div className="flex justify-center">
            <input
              type="text"
              placeholder="Search properties..."
              className="w-1/2 p-4 border border-blue-300 rounded-lg mr-2"
            />
            <button className="px-6 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Search
            </button>
          </div>
        </section>

        {/* Featured Properties */}
        <section className="w-full max-w-6xl mt-20 mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Featured Properties
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="property-image-1.jpg"
                alt="Modern Family Home"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Modern Family Home
                </h3>
                <p className="text-gray-600 mb-4">3 beds, 2 baths, 2000 sqft</p>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  View Details
                </button>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="property-image-2.jpg"
                alt="Luxury Villa"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Luxury Villa</h3>
                <p className="text-gray-600 mb-4">5 beds, 4 baths, 3500 sqft</p>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  View Details
                </button>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="property-image-3.jpg"
                alt="Cozy Apartment"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Cozy Apartment</h3>
                <p className="text-gray-600 mb-4">2 beds, 1 bath, 1000 sqft</p>
                <Link to={"/properties"}>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Projects */}
        <section className="w-full max-w-6xl mt-20 mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Upcoming Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="property-image-2.jpg"
                alt="Sunrise Villas"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Sunrise Villas</h3>
                <p className="text-gray-600 mb-4">
                  Luxury villas with modern amenities.
                </p>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="property-image-3.jpg"
                alt="Green Valley Apartments"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Green Valley Apartments
                </h3>
                <p className="text-gray-600 mb-4">
                  Eco-friendly apartments with a view.
                </p>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="property-image-1.jpg"
                alt="Skyline Towers"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Skyline Towers</h3>
                <p className="text-gray-600 mb-4">
                  High-rise apartments in the heart of the city.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Projects */}
        <section className="w-full max-w-6xl mt-20 mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Popular Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="property-image-3.jpg"
                alt="Central Park Residences"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Central Park Residences
                </h3>
                <p className="text-gray-600 mb-4">
                  Top-rated apartments with exclusive amenities.
                </p>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="property-image-1.jpg"
                alt="Oceanfront Condos"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Oceanfront Condos
                </h3>
                <p className="text-gray-600 mb-4">
                  Beachside condos with stunning views.
                </p>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="property-image-2.jpg"
                alt="Riverside Estates"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Riverside Estates
                </h3>
                <p className="text-gray-600 mb-4">
                  Spacious estates along the river.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Latest News */}
        <section className="w-full max-w-6xl mt-20 mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Latest News
          </h2>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Market Trends</h3>
              <p className="text-gray-600 mb-4">
                Stay updated with the latest real estate market trends.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Investment Tips</h3>
              <p className="text-gray-600 mb-4">
                Get valuable investment tips from industry experts.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">New Regulations</h3>
              <p className="text-gray-600 mb-4">
                Learn about the latest regulations affecting the real estate
                sector.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full max-w-6xl mt-20 mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            What Our Clients Say
          </h2>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <p className="text-gray-600 mb-4">
                "Absolutely amazing service! Found our dream home in no time."
              </p>
              <p className="font-semibold">- John Doe</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <p className="text-gray-600 mb-4">
                "Highly recommend! Professional and efficient."
              </p>
              <p className="font-semibold">- Jane Smith</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <p className="text-gray-600 mb-4">
                "A seamless experience from start to finish."
              </p>
              <p className="font-semibold">- Mark Johnson</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="w-full max-w-6xl mt-20 mb-16 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Get in Touch
          </h2>
          <p className="text-gray-600 mb-8">
            Have any questions? We're here to help.
          </p>
          <button className="px-6 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700">
            Contact Us
          </button>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 w-full shadow mt-20 py-6">
        <div className="w-[90%] mx-auto text-center">
          <p className="text-slate-100">
            &copy; 2024 Your Real Estate Company. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
