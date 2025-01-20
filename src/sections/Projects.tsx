import GitHubIcon from "../assets/github";
import Button from "../components/Button";
import Divider from "../components/Divider";

export default function Projects() {
  return (
    <section id="projects">
      <div className="container mx-auto lg:xl:w-2/3 sm:md:xs:w-full px-6">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          Projects
        </h2>
        <div className="text-gray-400 bg-gray-800 p-6 rounded shadow-lg">
          <h3 className="text-lg font-semibold font-sans text-white">
            E-Commerce
            <span className="text-sm text-gray-400 pl-2">(Backend)</span>
          </h3>

          <p>
            Designed and developed a scalable e-commerce platform leveraging a
            microservices architecture to ensure high availability, modularity,
            and fault tolerance. The system supports seamless management of
            products, orders, inventory, and payments while maintaining
            efficient inter-service communication and reliability.
          </p>

          <div className="mt-2 mb-2">
            <span>Key Contributions:</span>
            <ul className="list-disc pl-4 text-base font-normal text-gray-400 space-y-1">
              <li>
                Architected a multi-variant product schema in MongoDB to enable
                flexible product configurations and real-time tracking of
                product availability and low-stock alerts in the inventory
                service.
              </li>
              <li>
                Enhanced order processing by integrating gRPC for low-latency
                inter-service communication and Kafka for asynchronous updates,
                achieving a 47% reduction in inter-service latency.
              </li>
              <li>
                Implemented robust payment processing with retry mechanisms to
                ensure fault tolerance and transactional consistency.
              </li>
              <li>
                Integrated the ELK stack for centralized logging, enabling
                real-time monitoring and efficient troubleshooting across
                services.
              </li>
            </ul>
          </div>
          <span>
            <strong>Tech Stack: </strong>Spring Boot, Microservices, Kafka,
            gRPC, REST API, MySQL, MongoDB, ELK Stack.
          </span>

          <div className="flex items-center mt-4 space-x-4">
            <a
              href="#"
              className="px-4 py-2 text-sm font-medium border rounded-lg focus:ring-2 focus:outline-none bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700 focus:ring-gray-700"
            >
              View Details
            </a>
            <Button
              name={"View on GitHub"}
              isIconButton={true}
              iconPosition="left"
              icon={
                <GitHubIcon />
              }
              link={"https://github.com/hockey007?tab=repositories&q=ecommerce_"}
              isPrimary={true}
            />
          </div>
        </div>

        <div className="text-gray-400 mt-4 bg-gray-800 p-6 rounded shadow-lg">
          <h3 className="text-lg font-semibold font-sans text-white">
            Bus Booking Application
            <span className="text-sm text-gray-400 pl-2">(Fullstack)</span>
          </h3>

          <p>
            Designed and developed a highly scalable bus booking system to
            address complex real-time booking challenges, ensuring seamless user
            experience and optimized operational efficiency for vendors. The
            system incorporates advanced concurrency handling, secure
            authentication, and dynamic seat allocation.
          </p>

          <div className="mt-2 mb-2">
            <span>Key Contributions:</span>
            <ul className="list-disc pl-4 text-base font-normal text-gray-400 space-y-1">
              <li>
                Architected dynamic seat allocation with optimized utilization,
                enabling concurrent bookings for the same seat across different
                stops while minimizing locking overhead, ensuring efficient and
                accurate seat management.
              </li>
              <li>
                Developed a secure authentication system using access and
                refresh tokens with a usage-based token refresh mechanism.
                Implemented device fingerprinting and IP-based rate limiting to
                provide secure and seamless user sessions.
              </li>
              <li>
                Built a comprehensive vendor module allowing fleet management,
                including creating buses, designing seat layouts, defining
                routes, and scheduling journeys, streamlining operations with
                greater flexibility and control.
              </li>
              <li>
                Ensured scalability and performance through modular design and
                optimized database operations to handle high booking volumes and
                concurrent requests.
              </li>
            </ul>
          </div>
          <span>
            <strong>Tech Stack: </strong>Spring Boot, Microservices, Kafka,
            gRPC, REST API, MySQL, MongoDB, ELK Stack.
          </span>

          <div className="flex items-center mt-4 space-x-4">
            <a
              href="#"
              className="px-4 py-2 text-sm font-medium border rounded-lg focus:ring-2 focus:outline-none bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700 focus:ring-gray-700"
            >
              View Details
            </a>
            <Button
              name={"View on GitHub"}
              isIconButton={true}
              iconPosition="left"
              icon={
                <GitHubIcon />
              }
              link={"https://github.com/hockey007?tab=repositories&q=town_chale"}
              isPrimary={true}
            />
            {/* <Button
              name={"Live Demo"}
              isIconButton={false}
              link={"#"}
              isPrimary={true}
            /> */}
          </div>
        </div>
      </div>
      <Divider />
    </section>
  );
}
