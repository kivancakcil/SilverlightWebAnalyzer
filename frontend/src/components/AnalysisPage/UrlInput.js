import React, { useState } from "react";
import validator from "validator";

const UrlInput = ({ onSubmit }) => {
  const [url, setUrl] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const inputUrl = e.target.value;
    setUrl(inputUrl);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!url) {
      setErrorMessage("Please enter a URL");
      return;
    }

    let urlToValidate = url;
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      urlToValidate = "http://" + url;
    }

    if (!validator.isURL(urlToValidate)) {
      setErrorMessage("Please enter a valid URL");
      return;
    }

    setLoading(true);

    try {
      await onSubmit(urlToValidate);
      setUrl("");
      setErrorMessage("");
    } catch (error) {
      console.error("Error submitting URL for analysis: ", error);
      setErrorMessage("An error occurred, please try again");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="input"
        type="text"
        placeholder="URL want to be checked"
        value={url}
        onChange={handleChange}
      />
      <span style={{ fontWeight: "bold", color: "red" }}>{errorMessage}</span>
      <button className="btn-analyse" type="submit" disabled={loading}>
        {loading ? "Loading..." : "Analyze"}
      </button>
    </form>
  );
};

export default UrlInput;
