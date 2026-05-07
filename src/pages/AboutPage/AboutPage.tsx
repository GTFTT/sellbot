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
    </div>
  );
}

export default AboutPage;