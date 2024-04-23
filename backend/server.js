const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

const builtWithAPIKey = '61260118-153a-4ed6-846b-72738ce90cec';

app.post('/analyze', async (req, res) => {
  const { url } = req.body;

  try {
    const builtWithResponse = await axios.get(`https://api.builtwith.com/v21/api.json?KEY=${builtWithAPIKey}&LOOKUP=${url}`);

    const results = builtWithResponse.data.Results || [];

    if (results.length === 0) {
      return res.status(404).json({ error: 'No analysis results found for the website' });
    }

    const firstResult = results[0];

    const technologies = firstResult?.Result?.Paths[0]?.Technologies?.map((technology) => technology.Name) || [];

    const linkCount = firstResult?.Result?.Paths[0]?.Technologies.length || 0;

    const analysisResult = {
      technologies,
      linkCount,
    };

    res.json(analysisResult);
  } catch (error) {
    console.error('Error analyzing website:', error.message);
    res.status(500).json({ error: 'An error occurred while analyzing the website' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
