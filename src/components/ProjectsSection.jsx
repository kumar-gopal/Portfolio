import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "ChatHive - Real-Time Chat App",
    description:
      "Built with MERN Stack and Socket.io, supports 10K+ messages/day, JWT auth, and role-based access control. Optimized for <50ms latency.",
    image: "/projects/chathive.png", // Use your real image or asset
    tags: ["MERN", "Socket.io", "JWT", "DaisyUI"],
    demoUrl: "#", // Add real URL if hosted
    githubUrl: "https://github.com/kumar-gopal", // Replace with real project repo if available
  },
  {
    id: 2,
    title: "ShopEase - Multi-Vendor E-Commerce Platform",
    description:
      "Modular monolithic e-commerce web app supporting multiple vendors, role-based access, inventory, payments, reviews, and an admin dashboard. Production-ready and scalable.",
    image: "/projects/shopease.png", // Add your real screenshot to /public/projects/
    tags: ["Node.js", "Express", "MongoDB", "Stripe", "Redis", "Cloudinary"],
    demoUrl: "#", // Replace with your live app URL if hosted
    githubUrl: "https://github.com/kumar-gopal/Shopease/tree/master", // Replace with actual repo link
  },
  {
  id: 3,
  title: "Axesell - Multi-Tenant SaaS E-Commerce Platform",
  description:
    "Architected a Shopify-style multi-tenant SaaS platform enabling businesses to launch independent stores with complete data isolation. Implemented domain-based routing (admin/storefront), Redis caching (50% latency reduction), and event-driven architecture with BullMQ. Deployed using Docker on AWS ECS with CI/CD pipelines and CDN via CloudFront + S3.",
  image: "/projects/axesell.png",
  tags: ["Node.js", "Express", "MongoDB", "Redis", "BullMQ", "AWS ECS", "Docker", "CloudFront"],
  demoUrl: "#",
  githubUrl: "https://github.com/kumar-gopal"
},
  {
  id: 4,
  title: "Scalable Notification System (Event-Driven)",
  description:
    "Designed an event-driven notification system using Redis and BullMQ with fan-out queues, improving message delivery efficiency by 70%. Supports async processing, retries, and high throughput workloads.",
  image: "/projects/notification-system.png",
  tags: ["Redis", "BullMQ", "Queues", "Event-Driven Architecture"],
  demoUrl: "#",
  githubUrl: "https://github.com/kumar-gopal"
},
  {
  id: 5,
  title: "High-Performance Product Search API",
  description:
    "Built scalable product discovery APIs with filtering, pagination, sorting, and Redis caching. Optimized database queries and indexing to handle large datasets with low latency.",
  image: "/projects/product-api.png",
  tags: ["Node.js", "MongoDB", "Redis", "API Optimization"],
  demoUrl: "#",
  githubUrl: "https://github.com/kumar-gopal"
},
  {
  id: 6,
  title: "LudoX - Real-Time Multiplayer Ludo Game",
  description:
    "Built a real-time multiplayer Ludo game with WebSockets supporting live gameplay, turn-based synchronization, and game state consistency. Implemented room-based architecture, reconnection handling, and server-side game logic to prevent cheating. Designed scalable backend with Redis for session/state management and low-latency communication.",
  image: "/projects/ludo.png",
  tags: ["Node.js", "Socket.io", "Redis", "WebSockets", "Game Logic"],
  demoUrl: "#",
  githubUrl: "https://github.com/kumar-gopal"
}
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/kumar-gopal"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
