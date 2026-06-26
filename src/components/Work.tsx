import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    title: "Tutee AIO",
    category: "Self Project (2025)",
    tech: "JavaScript, React.js, CSS",
    description: "All-in-one academic assistant application designed for seamless schedule management, resource tracking, and student productivity optimization.",
    image: "/images/project_tutee_aio.png"
  },
  {
    title: "Fake Currency Detection",
    category: "Self Project (2024)",
    tech: "Python, OpenCV, TensorFlow, CNN, GUI",
    description: "Highly accurate currency verification system built using Python and TensorFlow. Trained a custom convolutional neural network (CNN) model for classification and integrated a user-friendly GUI for real-time validation.",
    image: "/images/project_currency_detection.png"
  },
  {
    title: "Online Bookstore Application",
    category: "Academic Project (2024)",
    tech: "HTML, CSS, JavaScript, React.js, Node.js, MySQL",
    description: "Full-stack bookstore featuring user authentication, catalog search, shopping cart system, checkout simulation, and an extensive administrator dashboard panel.",
    image: "/images/project_bookstore.png"
  }
];

const Work = () => {
  useGSAP(() => {
  let translateX: number = 0;

  function setTranslateX() {
    const box = document.getElementsByClassName("work-box");
    if (box.length === 0) return;
    const rectLeft = document
      .querySelector(".work-container")!
      .getBoundingClientRect().left;
    const rect = box[0].getBoundingClientRect();
    const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
    let padding: number =
      parseInt(window.getComputedStyle(box[0]).padding) / 2;
    translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
  }

  setTranslateX();

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: `+=${translateX}`, // Use actual scroll width
      scrub: true,
      pin: true,
      id: "work",
    },
  });

  timeline.to(".work-flex", {
    x: -translateX,
    ease: "none",
  });

  // Clean up (optional, good practice)
  return () => {
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
}, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <p className="work-desc" style={{ fontSize: "0.95rem", margin: "1rem 0", opacity: 0.8, lineHeight: "1.5" }}>
                  {project.description}
                </p>
                <h4>Tools and features</h4>
                <p>{project.tech}</p>
              </div>
              <WorkImage image={project.image} alt={project.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
