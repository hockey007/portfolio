import Social from "../components/Social";
import EmailIcon from "../assets/email.svg";
import PhoneIcon from "../assets/phone.svg";
import DownloadIcon from "../assets/download.svg";
import GitHubIcon from "../assets/github.svg";
import LinkedinIcon from "../assets/linkedin.svg";
import LeetcodeIcon from "../assets/leetcode.svg";
import Divider from "../components/Divider";
import Button from "../components/Button";

const socialLinks = [
  { icon: EmailIcon, tooltip: "Email", link: "mailto:harikrrishna.nuvvula@gmail.com" },
  { icon: PhoneIcon, tooltip: "Phone", link: "tel:+918328484639" },
  // { icon: DownloadIcon, tooltip: "Resume", link: "/public/harikrishnanuvvula.pdf" },
  { icon: GitHubIcon, tooltip: "GitHub", link: "https://github.com/hockey007" },
  { icon: LinkedinIcon, tooltip: "LinkedIn", link: "https://www.linkedin.com/in/harikrishnanuvvula/" },
  { icon: LeetcodeIcon, tooltip: "Leetcode", link: "https://leetcode.com/u/Hari_krrishna/" },
];

export default function Hero() {
  return (
    <section id="/">
      <div className="h-screen flex flex-col space-y-6 justify-center items-center px-4 md:px-0">
        {/* Heading */}
        <span className="text-4xl md:text-6xl font-sans text-center text-white font-semibold">
          Hari Krishna Nuvvula
        </span>

        {/* Contact Details */}
        <div className="flex flex-col text-center items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 text-gray-300 text-lg">
          <span>Email: <a href="mailto:harikrrishna.nuvvula@gmail.com"><span className="text-gray-400">harikrrishna.nuvvula@gmail.com</span></a></span>
          <div>Phone: <a href="tel:+918328484639"><span className="text-gray-400">+91-8328484639</span></a></div>
        </div>
        
        {/* Download Resume Button */}
        <Button 
          name="Download Resume" 
          link="/portfolio/harikrishnanuvvula.pdf" 
          isPrimary={true} 
          isIconButton={true} 
          icon={<img src={DownloadIcon} alt="download-icon" className="w-3 h-3" />} 
          iconPosition="left"
          download={true}
        />

        {/* Social Links */}
        <div className="flex flex-wrap justify-center space-x-6">
          {socialLinks.map((social, index) => (
            <Social key={index} icon={social.icon} link={social.link} tooltip={social.tooltip} />
          ))}
        </div>
      </div>
      <Divider />
    </section>
  );
}
