import { useOutletContext } from "react-router-dom";
import "./about.scss";

function About() {
  const outletClass = useOutletContext();

  return (
    <div data-testid="about-testid" className={"about" + " " + outletClass}>
      <h2>À propos</h2>
      <p>À propos en cours de construction</p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, expedita
        aut officia modi architecto facere cupiditate harum, perspiciatis quidem
        rerum, sequi commodi. Similique fugiat minima commodi perferendis quos
        facere nobis?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptatibus, voluptates, quae, natus voluptate quas quia ipsam
        voluptatum molestias aperiam quos? Quisquam, quod. Quisquam, quod
        temporibus. Quisquam, quod. Quisquam, quod temporibus.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptatibus, voluptates, quae, natus voluptate quas quia ipsam
        voluptatum molestias aperiam quos? Quisquam, quod. Quisquam, quod
        temporibus. Quisquam, quod. Quisquam, quod temporibus.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptatibus, voluptates, quae, natus voluptate quas quia ipsam
        voluptatum molestias aperiam quos? Quisquam, quod. Quisquam, quod
        temporibus. Quisquam, quod. Quisquam, quod temporibus.
      </p>
    </div>
  );
}

export default About;
