import Button from "../components/Button";
import Divider from "../components/Divider";

export default function Projects() {
  return (
    <section id="projects">
      <div className="container mx-auto w-2/3 px-14 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Projects
        </h2>
        <div className="bg-gray-100 text-gray-400 dark:bg-gray-800 p-6 rounded shadow-lg">
          <h3 className="text-lg font-semibold font-sans text-gray-900 dark:text-white">
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
              className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 focus:ring-2 focus:outline-none focus:ring-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            >
              View Details
            </a>
            <Button
              name={"View on GitHub"}
              isIconButton={true}
              iconPosition="left"
              icon={
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.13 0 0 .67-.21 2.2.82a7.58 7.58 0 0 1 4.01 0c1.53-1.03 2.2-.82 2.2-.82.44 1.11.16 1.93.08 2.13.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.64 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
              }
              link={"https://github.com/hockey007?tab=repositories&q=ecommerce_"}
              isPrimary={true}
            />
          </div>
        </div>

        <div className="bg-gray-100 text-gray-400 mt-4 dark:bg-gray-800 p-6 rounded shadow-lg">
          <h3 className="text-lg font-semibold font-sans text-gray-900 dark:text-white">
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
              className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 focus:ring-2 focus:outline-none focus:ring-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            >
              View Details
            </a>
            <Button
              name={"View on GitHub"}
              isIconButton={true}
              iconPosition="left"
              icon={
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.13 0 0 .67-.21 2.2.82a7.58 7.58 0 0 1 4.01 0c1.53-1.03 2.2-.82 2.2-.82.44 1.11.16 1.93.08 2.13.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.64 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
              }
              link={"https://github.com/hockey007?tab=repositories&q=town_chale"}
              isPrimary={false}
            />
            <Button
              name={"Live Demo"}
              isIconButton={false}
              link={"#"}
              isPrimary={true}
            />
          </div>
        </div>
      </div>
      <Divider />
    </section>
  );
}
