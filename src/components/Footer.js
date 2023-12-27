import { FaCopyright, FaHeart } from "react-icons/fa6";

const Footer = () => {
    const year = new Date().getFullYear();
    return (
      <div className="footer">
        Created By 
        <FaHeart className="fa-heart" />
        <a
          href="https://www.linkedin.com/in/nainsy-krishnatrey-746845219/"
          target="_blank"
          title="Nainsy Krishnatrey's Linkedin Profile"
        >
         Nainsy Krishnatrey
        </a>
        <FaCopyright className="fa-copy" />
          {year}
          <strong>
            EATZY<span> EASY</span>
          </strong>
      </div>
    );
  };
  
  export default Footer;