import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { Input } from "./ui";
import TextLogo from "../assets/text-logo.svg";

function Footer() {
  return (
    <footer className="border-t border-slate-500 ">
      <div className="container mx-auto px-[15px] py-[35px] md:py-[70px] xl:px-0">
        <img src={TextLogo} alt="" className="max-w-[180px] md:max-w-[270px]" />
        <div className="footer-content my-[40px] flex flex-col justify-between gap-[40px] md:my-[80px] xl:flex-row xl:gap-0">
          <div className="contact">
            <ul>
              <li>Register live or push</li>
              <li>About sounds</li>
              <li>Jobs</li>
            </ul>
            <div className="contacts mt-[15px] flex gap-[15px]">
              <a href="#">
                <FaFacebook size={25} />
              </a>
              <a href="#">
                <FaInstagram size={25} />
              </a>
              <a href="#">
                <FaXTwitter size={25} />
              </a>
              <a href="#">
                <FaYoutube size={25} />
              </a>
            </div>
          </div>
          <div className="community">
            <h3>Community</h3>
            <ul>
              <li>Find souns user group</li>
              <li>Find certified training</li>
              <li>Become a certified trainer</li>
            </ul>
          </div>
          <div className="newsletter max-w-[470px]">
            <h3>Sign up to our newsletter</h3>
            <p className="mb-[15px]">
              Enter your email address to stay up to date with the latest
              offers, tutorials, downloads, surveys and more.
            </p>
            <Input />
          </div>
        </div>
        <div className="credits flex ">
          <div className="left flex flex-wrap gap-[14px] xl:gap-[24px]">
            <a href="#">Contact Us</a>
            <a href="#">Press Resources</a>
            <a href="#">Legal Info</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Cookie Settings</a>
            <a href="#">Imprint</a>
          </div>
          <div className="right ml-auto flex items-end">
            <p>
              Made by{" "}
              <a href="https://github.com/prmditya" className="font-bold">
                prmditya
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
