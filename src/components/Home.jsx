import { useEffect } from "react";
import "../style/Home.scss";

function Home() {
  useEffect(() => {
    const sections = document.querySelectorAll(".section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show"); // 👈 EXIT animation
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((el) => observer.observe(el));
  }, []);

  return (
    <>
      <div className="section left">
        <h2>Section 1</h2>
         <p>
          This is a large content block. Scroll down slowly to see how this
          section smoothly slides in from the left side of the screen.
          The animation becomes very clear because of the increased spacing
          and size.
        </p>
      </div>

      <div className="section right">
        <h2>Section 2</h2>
        <p>
          This section comes from the right side. Notice the smooth motion
          and how the content feels more dynamic while scrolling.
          Bigger layout makes the transition clearly visible.
        </p>
      </div>

      <div className="section left">
        <h2>Section 3</h2>
         <p>
          Again from the left. This alternating pattern creates a modern
          website feel similar to professional landing pages.
        </p>
      </div>

      <div className="section right">
        <h2>Section 4</h2>
        <p>
          Final section from the right. Now you can clearly see left to right
          and right to left transitions while scrolling.
        </p>
      </div>
    </>
  );
}

export default Home;
