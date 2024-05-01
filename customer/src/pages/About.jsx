import React from "react";
import backgroundImage from "./images/about.jpg";
import photo1 from "./gallery/wanchu.png";
import photo3 from "./gallery/vikash.jpg";
import photo2 from "./gallery/akansha.jpeg";
import terms from "./files/Terms and Conditions.pdf"; // Import the PDF file

const PhotoWithDescription = ({ photoUrl, description, contact, email }) => (
  <div className="flex flex-col items-center">
    <img src={photoUrl} alt="Photo" className="w-40 h-40 border rounded-full" />
    <p className="text-white text-center font-semibold mt-2">{description}</p>
    <p className="text-white text-center font-semibold">{contact}</p>
    <p className="text-white text-center font-bold">{email}</p>
  </div>
);

export default function About() {
  return (
    <div
      className="bg-cover bg-center bg-fixed min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="py-30 px-4 max-w-6xl max-h-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-2 text-white">About TVA Group</h1>
        <p className="mb-6 text-slate-200">
          One of the top real estate companies, TVA Group, focuses on assisting
          customers in purchasing, renting out, and selling real estate in the
          most sought-after areas. Our seasoned team of agents is committed to
          provide outstanding customer service and facilitating a seamless
          buying and selling process. Our purpose is to assist our customers in
          reaching their real estate objectives by offering knowledgeable
          counsel, individualised attention, and in-depth knowledge of the
          regional real estate market. We can assist you at any stage of the
          process, whether you're wanting to purchase, sell, or rent a property.
          Our team of agents is dedicated to giving our clients the best
          possible service, and we have a plethora of real estate industry
          expertise and knowledge. We are committed to making it a reality for
          each and every one of our clients because we think that purchasing or
          selling a property should be an exciting and fulfilling process.
        </p>
        <h1 className="text-2xl font-bold mb-2 p-2  text-white">TVA Management</h1>
        {/* Display photos with descriptions */}
        <div className="flex justify-between ">
        <PhotoWithDescription
            photoUrl={photo1}
            description="Tsering Wangchu"
            contact="Contact :+91 91274 27442"
            email="Email : tseringwang4039@gmail.com"
          />
          <PhotoWithDescription
            photoUrl={photo3}
            description="Vikash Verma"
            contact="Contact :+91 93540 40507"
            email="Email : vkvermavk96@gmail.com"
          />
          <PhotoWithDescription
            photoUrl={photo2}
            description="Akansha Kumari"
            contact="Contact :+91 99052 60820 "
            email="Email : akankuma2302@gmail.com"
          />
          
        </div>
        {/* Downloadable button for PDF file */}
        <div className="flex justify-center mt-10">
          <a
            href={terms}
            download="Terms and Conditions.pdf"
            className="p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Terms & Conditions
          </a>
        </div>
      </div>
    </div>
  );
}
