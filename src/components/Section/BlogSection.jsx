import Heading from "../common/Heading/Heading";
import SubHeading from "../common/Heading/Subheading";
import Button from "../common/Button/Button";

export default function BlogSection() {
  const blogs = [
    {
      image: "/assets/blog/blog1.png",
      author: "Prabhash Mishra",
      date: "1 Jan 2023",
      title: "Small business & Startup",
      description:
        "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl.",
      tags: ["Tax & Audit", "Management"],
    },
    {
      image: "/assets/blog/blog2.png",
      author: "Mahesh Kumar",
      date: "1 Jan 2023",
      title: "Scale-Up Company Offer",
      description:
        "Mental models are simple expressions of complex processes or relationships.",
      tags: ["Tax", "Research", "Compliance"],
    },
    {
      image: "/assets/blog/blog3.png",
      author: "Rakhi Verma",
      date: "1 Jan 2023",
      title: "Growing Business Package",
      description:
        "Introduction to Wireframing and Its Principles. Learn from the best.",
      tags: ["Audit", "Money Back"],
    },
    {
      image: "/assets/blog/blog4.png",
      author: "Karan Kumar",
      date: "1 Jan 2023",
      title: "Transforming Digital Models",
      description:
        "Shifting from traditional to modern digital models for a business transformation.",
      tags: ["Business Strategy", "Innovation"],
    },
    {
      image: "/assets/blog/blog5.png",
      author: "Richa Singh",
      date: "1 Jan 2023",
      title: "The Future of AI in Business",
      description:
        "How AI is set to revolutionize business practices and customer engagement.",
      tags: ["AI", "Technology", "Future"],
    },
    {
      image: "/assets/blog/blog6.png",
      author: "Miss Nora",
      date: "1 Jan 2023",
      title: "Mastering Financial Strategy",
      description:
        "Understanding key financial strategies for growing your business in competitive.",
      tags: ["Finance", "Growth", "Strategy"],
    },
  ];

  const tagColors = [
    "bg-pink-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-red-500",
  ];

  return (
    <section className="bg-white text-black py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <Heading>
            EXPLORE OUR BLOGS
          </Heading>
          <SubHeading text="Accelerate Digital Transformation" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 justify-center">
          {blogs.map((blog, index) => (
            <article
              key={index}
              className="opacity-100"
              style={{ width: "100%", maxWidth: "384px" }}
            >
              <div className="mb-4 overflow-hidden">
                <img
                  src={blog.image || "/placeholder.svg"}
                  alt={blog.title}
                  className="w-full h-[240px] object-cover"
                />
              </div>
              <div className="space-y-3">
                <div className="text-[#667085]">
                  {blog.author} • {blog.date}
                </div>
                <h3 className="text-xl font-semibold text-black">
                  {blog.title}
                </h3>
                <p className="text-[#667085] line-clamp-2">{blog.description}</p>
                <div className="flex flex-wrap gap-2">
                  {blog.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`px-3 py-1 text-sm rounded-full text-white ${tagColors[tagIndex % tagColors.length]}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://www.registerkaro.in/blog"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button>
              Show more blogs
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
