import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, Link } from "react-router-dom";

const AnalysisDetailPage = () => {
  const [technologies, setTechnologies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const inputUrl = urlParams.get("url");
    const cleanUrl = inputUrl ? inputUrl.replace(/^https?:\/\/(www\.)?/, "") : "";

    const storedTechs = sessionStorage.getItem(cleanUrl);
    if (storedTechs) {
      setTechnologies(JSON.parse(storedTechs));
    } else {
      fetchData(cleanUrl);
    }
  }, [location.search]);

  const fetchData = async (url) => {
    try {
      setLoading(true);
      const response = await axios.post("http://localhost:5000/analyze", {
        url: url,
      });
      const { technologies } = response.data;
      setTechnologies(technologies);
      sessionStorage.setItem(url, JSON.stringify(technologies));
      setError(null);
    } catch (error) {
      console.log("Error fetching data: ", error);
      if (error.response && error.response.status === 403) {
        setError("Access to the requested resource is forbidden.");
      } else {
        setError("An error occurred while fetching data");
      }
    } finally {
      setLoading(false);
    }
  };

  const urlParams = new URLSearchParams(location.search);
  const inputUrl = urlParams.get("url");
  const cleanUrl = inputUrl ? inputUrl.replace(/^https?:\/\/(www\.)?/, "") : "";

  return (
    <div className="container">
      <Link to="/" className="back-link">
        &lt; Back
      </Link>
      <h4>{cleanUrl} Results</h4>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <p className="pages"><b>{technologies.length} Techs Found</b></p>
          <br></br><br></br>
          <div className="techs">
            {technologies.map((tech, index) => (
              <div key={index} className="tech">
                {tech}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default AnalysisDetailPage;
