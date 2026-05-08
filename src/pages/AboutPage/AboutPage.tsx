import styles from "./AboutPage.module.css"

function AboutPage() {
  return (
    <div className={styles.container}>
      <p>
        This web page is made for my portfolio to preset my skills in making cool and visually attractive web applications.
        I develop web applications for more that 5 years and always train in different domains. You are welcome to visit other pages and check them out!
      </p>
      <p>
        Also, I am interested in AI, so there may be another site created for AI purposes. I implement different simulations and learn algorithms
        to make them more efficient. Some of my projects include <b>AI cars simulation</b> and <b>Walking robot simulation</b>.
      </p>
      <p>
        I used 3D model
        <a href={"https://sketchfab.com/3d-models/processor-intel-core-i9-cdfe2dfc7b884f25964ada8b11dc535b"} target="_blank" rel="noopener noreferrer">"Processor Intel Core i9"</a>
        by <a href={"https://sketchfab.com/milos4"} target={"_blank"} rel={"noopener noreferrer"}>Ivan Vakulko</a>
        licensed under <a href={"http://creativecommons.org/licenses/by/4.0/"} target="_blank" rel="noopener noreferrer">CC-BY-4.0</a>
      </p>
    </div>
  );
}

export default AboutPage;