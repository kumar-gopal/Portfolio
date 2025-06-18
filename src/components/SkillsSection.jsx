import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Programming Language
  // {name : "C" ,level : 80,categories:"Programming Language"},
  // {name : "C++" ,level : 90,categories:"Programming Language"},
  // {name : "Python" ,level : 60,categories:"Programming Language"},
  // Frontend
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript (ES6+)", level: 90, category: "frontend" },
  { name: "TypeScript", level: 85, category: "frontend" },
  { name: "React.js", level: 90, category: "frontend" },
  { name: "Zustand", level: 80, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Bootstrap", level: 85, category: "frontend" },

  // Backend
  { name: "Node.js", level: 90, category: "backend" },
  { name: "Django", level: 60, category: "backend" },
  { name: "Express.js", level: 85, category: "backend" },
  { name: "NestJS", level: 50, category: "backend" },
  { name: "Fastify", level: 70, category: "backend" },
  { name: "GraphQL", level: 70, category: "backend" },
  { name: "REST API", level: 95, category: "backend" },
  { name: "WebSockets", level: 80, category: "backend" },

  // Databases
  { name: "MongoDB", level: 80, category: "database" },
  { name: "PostgreSQL", level: 75, category: "database" },
  { name: "MySQL", level: 70, category: "database" },
  { name: "Redis", level: 80, category: "database" },
  { name: "Prisma", level: 75, category: "database" },
  { name: "Sequelize", level: 70, category: "database" },
  { name: "TypeORM", level: 70, category: "database" },

  // DevOps & Tools
  { name: "Docker", level: 80, category: "devops" },
  { name: "Git & GitHub", level: 95, category: "devops" },
  { name: "GitHub Actions", level: 85, category: "devops" },
  { name: "AWS (EC2, S3, Lambda, ECS)", level: 80, category: "devops" },
  { name: "Nginx", level: 75, category: "devops" },
  { name: "CI/CD", level: 85, category: "devops" },

  // Others
  { name: "JWT & OAuth", level: 85, category: "auth" },
  { name: "Kafka", level: 70, category: "messaging" },
  { name: "RabbitMQ", level: 70, category: "messaging" },
  { name: "BullMQ", level: 70, category: "messaging" },
  { name: "Jest & Mocha", level: 80, category: "testing" },
  { name: "Figma", level: 80, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
  { name: "Cursor", level: 95, category: "tools" },
  { name: "Postman", level: 95, category: "tools" },
  { name: "Thunder Client", level: 95, category: "tools" },
  { name: "Payment Integration", level: 95, category: "tools" },
];

const categories = ["all", "frontend", "backend", "database", "devops", "auth", "messaging", "testing", "tools"];


export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};



