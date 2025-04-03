// //  import logo from "../assets/kevinRushLogo.png";
// import logo from "../assets/fathima.png";
// import { FaLinkedin } from "react-icons/fa";
// import { FaGithub } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import { FaFacebook } from "react-icons/fa";


// const Navbar = () => {
//   return (
//     <nav className="mb-20 flex items-center justify-between py-6">
//         <div className="flex flex-shrink-0 items-center">
//             <img className="mx-2 w-20" src={logo} alt="logo" />
//         </div>
//         <div className="m-8 flex items-center justify-center gap-4 text-2xl"> 
//             <FaLinkedin/>
//             <FaGithub/>
//             <FaInstagram/>
//             <FaFacebook/>
//         </div>
//     </nav>
// );
// }

// export default Navbar


//  import logo from "../assets/kevinRushLogo.png";
import logo from "../assets/fathima.png";
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-20" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/fathimaamarkhan/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/FathimaShajahan" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/_pics_maker/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100072648581423" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

