import { Link } from "react-router-dom";

const TargetList = ({ targets, loadingStates }) => {
  return (
    <div className="analyzing-targets">
      <h2>Analyzing Targets</h2>
      <div className="buttons-container">
        {targets.map((target, index) => (
          <TargetButton
            key={index}
            target={target}
            loading={loadingStates[target]}
          />
        ))}
      </div>
    </div>
  );
};

const TargetButton = ({ target, loading }) => {
  return (
    <div>
      <button className="analyzing-target-button">
        <span><a target="_blank" rel="noopener noreferrer" href={target}>{target}</a></span>
        {loading && <span>Analysing...</span>}
        {!loading && (
          <Link
            to={`/analysis-detail?url=${encodeURIComponent(target)}`}
            className="view-more-link"
          >
            View More
          </Link>
        )}
      </button>
    </div>
  );
};

export default TargetList;
