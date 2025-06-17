import { Briefcase, Code, Server } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Backend Developer & DevOps Enthusiast</h3>

            <p className="text-muted-foreground">
              I’m Gopal Kumar, a backend developer with hands-on experience in building scalable APIs,
              production-ready architectures, and real-time systems using Node.js, Express, MongoDB, PostgreSQL, and Redis.
            </p>

            <p className="text-muted-foreground">
              I've worked on AI pipelines, REST/GraphQL APIs, CI/CD automation, Docker, and cloud deployments with AWS.
              I'm passionate about solving real-world backend problems and optimizing performance for scale.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">Get In Touch</a>

              <a
                href="/GopalResume.pdf"
                download
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">API Development</h4>
                  <p className="text-muted-foreground">
                    Designing robust REST & GraphQL APIs with authentication, rate limiting, and role-based access.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Server className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">DevOps & Cloud</h4>
                  <p className="text-muted-foreground">
                    Dockerized full-stack apps with GitHub Actions & deployed via AWS (EC2, ECS, S3, Lambda).
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Production Experience</h4>
                  <p className="text-muted-foreground">
                    Delivered production-ready solutions with scalable architecture and 99.5%+ service accuracy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
