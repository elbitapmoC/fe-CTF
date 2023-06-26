import { useEffect, useState } from "react";

const Capture = () => {
  const url =
    "https://tns4lpgmziiypnxxzel5ss5nyu0nftol.lambda-url.us-east-1.on.aws/challenge";
  // Async Await ------------------------------------ END

  useEffect(() => {
    fetch(url)
      .then((response) => {
        // When the page is loaded convert it to text
        return response.text();
      })
      .then((html) => {
        // Initialize the DOM parser
        var parser = new DOMParser();

        // Parse the text
        var doc = parser.parseFromString(html, "text/html");

        return doc;
      })
      .then((html) => {
        console.log(html);
      })
      .catch((err) => {
        console.log("Failed to fetch page: ", err);
      });
  }, []);

  return <h1>Capture The Flag!</h1>;
};

export default Capture;
