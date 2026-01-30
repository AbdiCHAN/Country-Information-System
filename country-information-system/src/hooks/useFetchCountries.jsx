import { useEffect } from "react";

console.log("hii"); // ✅ NOW this will log

function Countries() {
  useEffect(() => {
    console.log("Fetching countries...");

    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        console.log("Countries data:", data);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }, []);

  return (
    <div>
      <h2>Open the console</h2>
      <p>Countries are being fetched...</p>
    </div>
  );
}

export default Countries;

