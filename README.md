<a name="readme-top"></a>


<!-- PROJECT SHIELDS -->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<div align="center">
  <a href="">
  </a>
  <br>
<h1 align="center">Website Technologies Analyzer</h1>
  <p align="center">
    Silverlight is a web application that analyzes a specific URL to show the technologies used and the number of techs it contains.
    <br/><br/>
    ·
    <a href="https://github.com/kivancakcil/SilverlightWebAnalyzer/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    ·
    <a href="https://github.com/kivancakcil/SilverlightWebAnalyzer/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>
<br/>


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#features">Features</a></li>
    <li><a href="#getting-started">Getting Started</a></li>
    <li><a href="#usage">Usage</a><ul>
      <li><a href="#miscellaneous">Miscellaneous</a></li>
    </ul></li>
    <li><a href="#technologies">Technologies</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>


<!-- ABOUT THE PROJECT -->
## About The Project

Silverlight Web Analyzer starts with its home page where users enter a specific URL. On this page, users enter the URL and click on the **Analyze** button. The application analyzes the entered URL and makes the results available for viewing. Users can then click on **View More** to learn about the technologies used on the website and their counts. It is also possible to analyze each URL separately and view the details.


<!-- FEATURES -->
## Features

- Ability to analyze URLs
- Display of technologies and their counts
- Detailed page-by-page analysis viewing
- Storage of analysis results (sessionStorage)


<!-- GETTING STARTED -->
## Getting Started

1. **Clone the repository:**

   ```sh
    git clone https://github.com/kivancakcil/SilverlightWebAnalyzer.git
    ```

2. **Navigate to the project directory:**

   ```sh
    cd SilverlightWebAnalyzer
    ```

3. **Install necessary packages:**

   ```sh
    npm install
    ```

4. **Navigate to the backend folder and start the server:** (*rows will be executed one by one*)

   ```sh
    cd backend
    node server.js
    ```

5. **Open a new terminal, navigate to the frontend folder and start the client:** (*rows will be executed one by one*)

   ```sh
    cd frontend
    npm start
    ```


<!-- USAGE -->
## Usage

1. Enter a URL on the main page
2. Click the "Analyze" button
3. Wait for the end of the analysis
4. Click when "View More" appears
5. View technologies and their counts in detail



### ***Miscellaneous***

* **If you want to test some features, you can run the `npm test` command in the frontend folder and examine the results:** (*rows will be executed one by one*)

    ```sh
    cd frontend
    npm test
    ```


<!-- TECHNOLOGIES -->
## Technologies

* React
* node.js
* BuiltWith API
* Axios
* Express
* Cors
* Jest
* Validator


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a <span style=" color: #FFBF00;">**star**</span>! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.


<!-- CONTACT -->
## Contact

Kıvanç Akçil - kivancakcil@hotmail.com

[![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white)](https://linkedin.com/in/kivancakcil/)

<p align="center">(<a href="#readme-top">Back to Top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
[contributors-shield]: https://img.shields.io/github/contributors/kivancakcil/SilverlightWebAnalyzer.svg?style=for-the-badge
[contributors-url]: https://github.com/kivancakcil/SilverlightWebAnalyzer/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/kivancakcil/SilverlightWebAnalyzer.svg?style=for-the-badge
[forks-url]: https://github.com/kivancakcil/SilverlightWebAnalyzer/network/members
[stars-shield]: https://img.shields.io/github/stars/kivancakcil/SilverlightWebAnalyzer.svg?style=for-the-badge
[stars-url]: https://github.com/kivancakcil/SilverlightWebAnalyzer/stargazers
[issues-shield]: https://img.shields.io/github/issues/kivancakcil/SilverlightWebAnalyzer.svg?style=for-the-badge
[issues-url]: https://github.com/kivancakcil/SilverlightWebAnalyzer/issues
[license-shield]: https://img.shields.io/github/license/kivancakcil/SilverlightWebAnalyzer.svg?style=for-the-badge
[license-url]: https://github.com/kivancakcil/SilverlightWebAnalyzer/blob/master/LICENSE.txt
