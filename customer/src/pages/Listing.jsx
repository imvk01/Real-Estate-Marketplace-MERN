import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { useSelector } from 'react-redux';
import { Navigation } from "swiper/modules";
import "swiper/css/bundle";
import {
  FaBath,
  FaBed,
  FaChair,
  FaMapMarkerAlt,
  FaParking,
  FaShare,
  FaUtensils,
  FaBuilding,
  FaSwimmingPool,
  FaRegBuilding,
} from "react-icons/fa";

import Contact from '../components/Contact';

export default function Listing() {
  SwiperCore.use([Navigation]);
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [copied, setCopied] = useState(false);
  const [contact, setContact] = useState(false);
  const params = useParams();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    const fetchListing = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/listing/get/${params.listingId}`);
        const data = await res.json();
        console.log(data);
        if (data.success === false) {
          setError(true);
          setLoading(false);
          return;
        }
        setListing(data);
        setLoading(false);
        setError(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchListing();
  }, [params.listingId]);

  const goBack = () => {
    navigate(-1);
  };

  const goList = () => {
    navigate("/create-listing");
  };

  return (
    <div className="bg-slate-200 min-h-screen">
      <main className="container mx-auto">
        {loading && <p className="text-center my-7 text-2xl">Loading...</p>}
        {error && (
          <p className="text-center my-7 text-2xl">Something went wrong!</p>
        )}
        {listing && !loading && !error && (
          <div>
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              loop={true}
              navigation={true}
              className="bg-slate-300"
            >
              {listing.imageUrls.map((url, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="h-[670px]"
                    style={{
                      background: `url(${url}) center no-repeat`,
                      backgroundSize: "cover",
                    }}
                  ></div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="fixed top-5 right-5 z-10 rounded-full w-8 h-8 flex justify-center items-center bg-slate-400 cursor-pointer">
              <FaShare
                className="text-white"
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  setCopied(true);
                  setTimeout(() => {
                    setCopied(false);
                  }, 2000);
                }}
              />
            </div>
            {copied && (
              <p className="fixed top-16 right-8 z-10 border rounded-xl text-white bg-slate-400 p-1">
                Link Copied
              </p>
            )}

            <div className="flex flex-col max-w-4xl mx-auto p-5 mt-3 gap-3 rounded-2xl bg-blue-300 shadow-2xl">
              <p className="font-semibold uppercase">
                {listing.name} -  ₹{" "}
                {
               
                   listing.regularPrice.toLocaleString("en-US")
                  }
                {listing.type === "Rent" && (
                  <span style={{ textTransform: "lowercase" }}> / month</span>
                )}
              </p>

              <p className="flex items-center gap-2 text-sm">
                <FaMapMarkerAlt className="text-green-700" />
                {listing.address}
              </p>

              <div className="flex gap-4">
                <p className="bg-red-700 w-full max-w-[200px] text-white text-center p-1 rounded-xl">
                  {listing.type === "Rent" ? "For Rent" : "For Sale"}
                </p>
                {listing.offer && (
                  <p className="bg-green-700 w-full max-w-[200px] text-white text-center p-1 rounded-xl">
                    ₹ {listing.discountPrice} Off
                  </p>
                )}
              </div>

              <p className="text-slate-800">
                <span className="font-bold text-black">Description - </span>
                {listing.description}
              </p>

              <div className="flex flex-col">
                <ul className="text-green-900 font-semibold text-sm flex flex-wrap items-center gap-4 sm:gap-6">
                  <li className="flex items-center gap-1 whitespace-nowrap ">
                    <FaBed className="text-lg" />
                    {listing.bedrooms > 1
                      ? `${listing.bedrooms} Bedrooms `
                      : `${listing.bedrooms} Bedroom `}
                  </li>
                  <li className="flex items-center gap-1 whitespace-nowrap ">
                    <FaBath className="text-lg" />
                    {listing.bathrooms > 1
                      ? `${listing.bathrooms} Bathrooms `
                      : `${listing.bathrooms} Bathroom `}
                  </li>
                  <li className="flex items-center gap-1 whitespace-nowrap ">
                    <FaUtensils className="text-lg" />
                    {listing.kitchens > 1
                      ? `${listing.kitchens} Kitchens`
                      : listing.kitchens === 1
                      ? `${listing.kitchens} Kitchen`
                      : "No Kitchen"}
                  </li>
                  <li className="flex items-center gap-1 whitespace-nowrap ">
                    <FaBuilding className="text-lg" />
                    {listing.halls > 1
                      ? `${listing.halls} Halls`
                      : listing.halls === 1
                      ? `${listing.halls} hall`
                      : "No Hall"}
                  </li>
                </ul>

                <ul className="text-green-900 font-semibold text-sm flex flex-wrap mt-4 items-center gap-4">
                  <li className="flex items-center gap-1 whitespace-nowrap ">
                    <FaParking className="text-lg" />
                    {listing.parking ? "Parking spot" : "No Parking"}
                  </li>
                  <li className="flex items-center gap-1 whitespace-nowrap ">
                    <FaChair className="text-lg" />
                    {listing.furnished ? "Furnished" : "Unfurnished"}
                  </li>
                  <li className="flex items-center gap-1 whitespace-nowrap ">
                    <FaSwimmingPool className="text-lg" />
                    {listing.swimmingpool
                      ? "Swimming Pool"
                      : "No Swimming Pool"}
                  </li>
                  <li className="flex items-center gap-1 whitespace-nowrap ">
                    <FaRegBuilding className="text-lg" />
                    {listing.balcony ? "Balcony" : "No Balcony"}
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex justify-between max-w-4xl mx-auto mt-2 p-2">
              <button
                onClick={goList}
                className="bg-green-600 hover:bg-opacity-85 text-center w-[20%] text-white rounded-3xl p-2"
              >
                List Property
              </button>

              {currentUser && listing.userRef !== currentUser._id && !contact && (
              <button
                onClick={() => setContact(true)}
                className='bg-green-800 hover:bg-opacity-85 text-center w-[30%] text-white rounded-3xl p-2'
              >
                Contact Agent
              </button>
            )}
            {contact && <Contact listing={listing} />}
            
              <button
                onClick={goBack}
                className="bg-blue-600 hover:bg-opacity-85 text-center w-[20%] text-white rounded-3xl p-2"
              >
                Back
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}