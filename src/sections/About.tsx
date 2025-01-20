import ProfilePhoto from "../assets/profile_photo.jpg";
import Divider from "../components/Divider";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex lg:flex-row justify-between w-2/3 gap-12 lg:gap-24 px-6 lg:px-12">
        <div className="text-center lg:text-left">
          <h2 className="text-3xl lg:text-4xl font-bold font-sans text-gray-800 dark:text-white">
            About Me
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300 font-body">
            I am a software developer with 3.6 years of experience specializing
            in backend systems, scalable web applications, and modern frontend
            frameworks. Proficient in Java, Spring Boot, Hibernate, React, and
            TypeScript.
          </p>
          <p className="mt-4 text-gray-600 dark:text-gray-300 font-body">
            I enjoy solving complex problems in system design and distributed
            systems. Passionate about learning and innovation, I aim to deliver
            impactful solutions in challenging environments.
          </p>
        </div>

        <div className="">
          <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden mx-auto lg:mx-0 border-4 border-gray-300 dark:border-gray-700 shadow-lg">
            <img
              src={ProfilePhoto}
              alt="Your Name"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <Divider />
    </section>
  );
}
