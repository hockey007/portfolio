import ReactIcon from "../assets/react-js-icon.svg";
import ReduxIcon from "../assets/redux.svg";
import SpringBootIcon from "../assets/spring-boot-icon.svg";
import FlutterIcon from "../assets/flutter.svg";
import TypescriptIcon from "../assets/typescript.svg";
import MySqlIcon from "../assets/mysql.svg";
import RestApiIcon from "../assets/rest-api.svg";
import JavaIcon from "../assets/java.svg";
import JUnitIcon from "../assets/junit.svg";
import gRPCIcon from "../assets/grpc-seeklogo.svg";
import HibernateIcon from "../assets/hibernate.svg";
import TailwindIcon from "../assets/tailwind-css.svg";
import SystemDesignIcon from "../assets/system-design.svg";
import SchemaDesignIcon from "../assets/schema-design.svg";
import ApiDesignIcon from "../assets/api-design.svg";
import MongoDbIcon from "../assets/mongodb.svg";
import SkillCard, { SkillType } from "../components/SkillCard";

export default function Skills() {
  const skills: SkillType[] = [
    {
      name: "Spring Boot",
      image: SpringBootIcon,
      level: 3.5,
    },
    {
      name: "Java",
      image: JavaIcon,
      level: 3.5,
    },
    {
      name: "Hibernate",
      image: HibernateIcon,
      level: 3.5,
    },
    {
      name: "JUnit",
      image: JUnitIcon,
      level: 3.5,
    },
    {
      name: "React TS",
      image: ReactIcon,
      level: 3.5,
    },
    {
      name: "Redux",
      image: ReduxIcon,
      level: 3.5,
    },
    {
      name: "Typescript",
      image: TypescriptIcon,
      level: 3.5,
    },
    {
      name: "Tailwind CSS",
      image: TailwindIcon,
      level: 3.5,
    },
    {
      name: "gRPC",
      image: gRPCIcon,
      level: 3.5,
    },
    {
      name: "MongoDB",
      image: MongoDbIcon,
      level: 3.5,
    },
    {
      name: "MySQL",
      image: MySqlIcon,
      level: 3.5,
    },
    {
      name: "Flutter",
      image: FlutterIcon,
      level: 3.5,
    },
    {
      name: "REST API",
      image: RestApiIcon,
      level: 3.5,
    },
    {
      name: "System Design",
      image: SystemDesignIcon,
      level: 3.5,
    },
    {
      name: "Schema Design",
      image: SchemaDesignIcon,
      level: 3.5,
    },
    {
      name: "API Design",
      image: ApiDesignIcon,
      level: 3.5,
    },
  ];

  return (
    <section id="skills" className="pb-16">
      <div className="container mx-auto w-2/3 px-14 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          Skills
        </h2>
        <div className="grid grid-cols-4 gap-6">
          {skills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
