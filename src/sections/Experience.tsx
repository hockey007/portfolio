import Divider from "../components/Divider";

export default function Experience() {
  return (
    <section id="experience">
      <div className="container mx-auto lg:w-2/3 sm:w-full md:w-full xs:w-full px-6 lg:px-14">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          Work & Relevant Experience
        </h2>

        <ol className="relative border-l border-gray-700">
          <li className="mb-10 ml-6 sm:ml-12 lg:ml-20">
            <div className="absolute w-3 h-3 bg-green-500 rounded-full -left-1.5 border border-gray-900"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-500">
              August 2021 - Present
              <span className="text-xs pl-2">(3.5 years)</span>
            </time>
            <h3 className="text-lg sm:text-xl font-semibold text-white">
              Systems Engineer - TCS
            </h3>
            <ul className="list-disc pl-4 text-base font-normal text-gray-400 space-y-2">
              <li>
                Worked as a Java backend developer for American Express in the
                Redemptions domain, maintaining and enhancing applications for
                membership point redemptions.
              </li>
              <li>
                Improved application efficiency by leveraging caching mechanisms
                to minimize token service calls by 98%, improving response times
                for upstream service interactions.
              </li>
              <li>
                Developed an order reprocessing script to fulfill pending Gift
                Cards, widely adopted by the team, reducing potential
                Operational Risk Events by 40%.
              </li>
              <li>
                Optimized the overall performance of a redemption application by
                8% leveraging HTTP connection pooling, significantly improving
                throughput and reducing response times.
              </li>
            </ul>
          </li>
          <li className="mb-10 ml-6 sm:ml-12 lg:ml-20">
            <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-1.5 border border-gray-900"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-500">
              January 2019 - May 2021
              <span className="text-xs pl-2">(2 years)</span>
            </time>
            <h3 className="text-lg sm:text-xl font-semibold text-white">
              Freelancer
            </h3>
            <ul className="list-disc pl-4 text-base font-normal text-gray-400">
              <li>
                Developed an MVP for a task delegation application, allowing
                users to search for friends who can perform specific tasks, with
                extended search capabilities up to six degrees of connection.
                <span className="block mt-1">
                  <strong>Tech Stack:</strong> Flutter, Node.js, MySQL, Firebase
                  Auth, Socket.io, Neo4j, Sequelize.
                </span>
              </li>
              <li className="mt-3">
                Built a survey application as part of a project for a German
                client, enabling users to answer surveys with text,
                multiple-choice, and multiple image-choice questions.
                <span className="block mt-1">
                  <strong>Tech Stack:</strong> Flutter, Node.js, MySQL,
                  Sequelize.
                </span>
              </li>
            </ul>
          </li>
        </ol>
      </div>
      <Divider />
    </section>
  );
}