import CopyCommand from "../components/CopyCommand";
import { DOCS_URL, DOCKER_HUB_URL, PYPI_URL } from "../shared/product";

const DOCKER_COMMAND =
  "docker run -e SPARK_REMOTE=sc://<spark-connect-ip>:15002 -p 5050:5050 yanivzalach/icegraph:latest";

const GetStartedSection = () => (
  <section className="section get-started-section" id="start">
    <div className="section-heading centered-heading">
      <p className="section-kicker">FROM ZERO TO VISIBLE</p>
      <h2>One command. Your tables, mapped.</h2>
      <p>Point IceGraph at Spark Connect and open localhost:5050.</p>
    </div>
    <CopyCommand command={DOCKER_COMMAND} />
    <div className="start-paths">
      <a href={DOCKER_HUB_URL}>
        <span>01</span>
        <strong>Run with Docker</strong>
        <i>Fastest path ↗</i>
      </a>
      <a href={PYPI_URL}>
        <span>02</span>
        <strong>Use Python and CLI</strong>
        <i>Script access ↗</i>
      </a>
      <a href={DOCS_URL}>
        <span>03</span>
        <strong>Read the docs</strong>
        <i>Learn the workflow ↗</i>
      </a>
    </div>
  </section>
);

export default GetStartedSection;
