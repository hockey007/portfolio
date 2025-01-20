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
      <div className="h-screen flex flex-col space-y-6 justify-center items-center">
        <span className="text-6xl font-sans text-white font-semibold">
          Hari Krishna Nuvvula
        </span>
        {/* Contact Details */}
        <div className="flex items-center space-x-4 text-gray-300 text-lg">
          <span>Email: <a href="mailto:harikrrishna.nuvvula@gmail.com">harikrrishna.nuvvula@gmail.com</a></span>
          <div>Phone: <a href="tel:+918328484639">+91-8328484639</a></div>
        </div>
        
        <Button 
          name="Download Resume" 
          link="/portfolio/harikrishnanuvvula.pdf" 
          isPrimary={true} 
          isIconButton={true} 
          icon={<img src={DownloadIcon} alt="download-icon" className="w-3 h-3" />} 
          iconPosition="left"
          download={true}
        />
        <div className="flex space-x-6">
          {socialLinks.map((social, index) => (
            <Social key={index} icon={social.icon} link={social.link} tooltip={social.tooltip} />
          ))}
        </div>
      </div>
      <Divider />
    </section>
  );
}
