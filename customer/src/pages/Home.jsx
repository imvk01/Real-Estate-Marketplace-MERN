import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css/bundle";
import ListingItem from "../components/ListingItem";
import exploreImage from "./gallery/ann.jpg";
import photo1 from "./gallery/wanchu.png";
import photo3 from "./gallery/vikash.jpg";
import photo2 from "./gallery/akansha.jpeg";



const PhotoWithDescription = ({ photoUrl, description, contact, email }) => (
  <div className="container flex flex-col items-center ">
    <img src={photoUrl} alt="Photo" className="w-40 h-40 border rounded-full shadow-xl" />
    <p className="text-black text-center font-semibold mt-2">{description}</p>
    <p className="text-black text-center font-semibold">{contact}</p>
    <p className="text-black text-center font-bold">{email}</p>
  </div>
);

export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  const [searchTerm,setSearchTerm]=useState('');

  SwiperCore.use([Navigation]);
  console.log(offerListings);

  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch("/api/listing/get?offer=true&limit=6");
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };
    const fetchRentListings = async () => {
      try {
        const res = await fetch("/api/listing/get?type=Rent&limit=6");
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings(); 
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSaleListings = async () => {
      try {
        const res = await fetch("/api/listing/get?type=Sale&limit=6");
        const data = await res.json();
        console.log(data)
        setSaleListings(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchOfferListings();
  }, []);

  const [isSearchVisible, setIsSearchVisible] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 297; // Adjust this value as needed
      
      if (scrollPosition > threshold) {
        setIsSearchVisible(false);
      } else {
        setIsSearchVisible(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  

  return (
    <div className="bg-blue-100 pb-7 pr-1 pl-1  rounded-2xl">
      <div
        style={{
          background: `url(${exploreImage}) center fixed no-repeat`,
          backgroundSize: "cover",
        }}
        className="h-[710px] mb-9 mx-auto rounded-sm relative"
      >
        {isSearchVisible && (
          <form
          onSubmit={handleSubmit} className=" absolute p-2 gap-3 rounded-2xl inset-0  flex items-center justify-center">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e)=> setSearchTerm(e.target.value)}
              className="p-2 fixed bg-slate-200 top-[35%] rounded-full w-[25%] focus:outline-none"
            />  
             <div className="fixed px-80 container max-w-7xl mx-auto  top-[44%] text-white">
        <p>
         <span className=" text-xl font-bold text-orange-400 text-border rounded-2xl p-1">TVA Group</span>, <span className="font-semibold  item-center">is your trusted partner for
          buying, selling, and renting Luxury Property. Our dedicated and experienced team of agents are committed to providing
          service and support, ensuring a seamless experience for
          our clients.</span> 
        </p>
      </div>
     </form>
     
     )}  
    </div>
      {/* top */}
      <div className=" flex flex-col gap-6 p-20 px-3 max-w-7xl mx-auto items-center bg-blue-300 rounded-2xl">
        <h1 className="text-slate-700 font-bold text-3xl lg:text-6xl">
          Trendy Cosmopolitan Beachfront
          <br />
          Living Meets Luxury with <span className="text-slate-500">TVA</span>
        </h1>
        <div className="text-gray-600 sm:text-sm">
          <span className="text-blue-600 font-semibold">TVA Group</span> is the
          best place to find your next perfect place to live.
          <br />
          We have a wide range of properties for you to choose from.
        </div>
        <Link
          to={"/search"}
          className="text-xs sm:text-sm text-blue-800 font-bold hover:underline"
        >
          Let's get started...
        </Link>
      </div>

        {/* Display photos with descriptions */}
        <div className="p-9 mt-5 flex justify-between">
          <PhotoWithDescription
            photoUrl={photo1}
            description="Tsering Wangchu"
            contact="Contact : +91 91274 27442"
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

      {/* listing results for offer, sale and rent */}
      <div className="max-w-7xl mx-auto p-3 flex flex-col gap-8 items-center mt-11 container bg-blue-300 rounded-2xl">
        {rentListings && rentListings.length > 0 && (
          <div className="bg-blue-200 p-5 mt-3 rounded-2xl">
            <div className="my-3">
              <h2 className="text-2xl font-semibold text-slate-600">
                Recent places for Rent
              </h2>
              <Link
                className="text-sm text-blue-800 hover:underline mb-3"
                to={"/search?type=rent"}
              >
                Show more places for Rent
              </Link>
            </div>
            <div className="flex flex-wrap gap-4">
              {rentListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {saleListings && saleListings.length > 0 && (
          <div className="bg-blue-200 p-5 mt-3 rounded-2xl">
            <div className="my-3">
              <h2 className="text-2xl font-semibold text-slate-600">
                Recent places for Sale
              </h2>
              <Link
                className="text-sm text-blue-800 hover:underline"
                to={"/search?type=sale"}
              >
                Show more places for Sale
              </Link>
            </div>
            <div className="flex flex-wrap gap-4 mt-4">
              {saleListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
