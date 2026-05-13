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
            <h3 className="text-2xl font-semibold">
              Backend Engineer & Cloud Infrastructure Enthusiast
            </h3>

            <p className="text-muted-foreground">
              Hi, I’m Gopal Kumar — a Backend Engineer with 2+ years of experience
              building scalable SaaS platforms, distributed backend systems, and
              production-grade cloud infrastructure using Node.js, TypeScript,
              Redis, MongoDB, PostgreSQL, and AWS.
            </p>

            <p className="text-muted-foreground">
              I specialize in architecting high-performance backend systems
              including multi-tenant e-commerce SaaS platforms, secure LMS video
              streaming infrastructures, AI-powered applications, and real-time
              communication systems. My experience includes REST & GraphQL APIs,
              Redis caching, BullMQ queues, WebSocket architectures,
              FFmpeg-based HLS streaming pipelines, authentication systems, and
              scalable cloud deployments.
            </p>

            <p className="text-muted-foreground">
              I enjoy solving complex backend architecture challenges, optimizing
              systems for scalability and reliability, and building
              production-ready applications end-to-end with strong focus on
              performance, security, and developer experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="/Gopal_Backend_Engineer_Resume.pdf"
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
                  <h4 className="font-semibold text-lg">
                    API Development
                  </h4>

                  <p className="text-muted-foreground">
                    Designing scalable REST & GraphQL APIs with JWT
                    authentication, RBAC authorization, rate limiting, Redis
                    caching, queue-driven workflows, and third-party integrations
                    for production-grade systems.
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
                  <h4 className="font-semibold text-lg">
                    DevOps & Cloud
                  </h4>

                  <p className="text-muted-foreground">
                    Building and deploying Dockerized applications with CI/CD
                    pipelines using GitHub Actions and AWS services including
                    EC2, ALB, Auto Scaling, S3, CloudFront, ACM, and scalable
                    cloud infrastructure.
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
                  <h4 className="font-semibold text-lg">
                    Production Experience
                  </h4>

                  <p className="text-muted-foreground">
                    Architected and delivered production-ready SaaS, LMS
                    streaming, AI, and real-time systems handling high
                    concurrent traffic with focus on scalability, security,
                    distributed workflows, and performance optimization.
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
