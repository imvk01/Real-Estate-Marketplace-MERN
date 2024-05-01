import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-100 py-3 px-4">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <div className="flex flex-col md:flex-row md:space-x-4 items-center">
          <a href="/" className="text-xl font-bold text-gray-600 hover:text-gray-400">
            TVA Group
          </a>
          <p className="mt-4 text-base text-gray-600 sm:mt-0">
            ©️ {new Date().getFullYear()} TVA Group . All rights reserved.
          </p>
        </div>

        <div className="flex space-x-10">
          <Link to = '/request-info' className='text-gray-700 font-semibold hover:text-gray-400'>Request info</Link>
          <a href="https://www.facebook.com/profile.php?id=61558805007183" className="text-gray-600 hover:text-gray-400">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="https://x.com/TVAGROUP_2024?t=6qJvmtokPeIY56fzWyr17A&s=08" className="text-gray-600 hover:text-gray-400">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://www.linkedin.com/feed/" className="text-gray-600 hover:text-gray-400">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a href="https://www.instagram.com/tvagroup7498?igsh=MXEzajJjZXJxaHQ3Nw==" className="text-gray-600 hover:text-gray-400">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;