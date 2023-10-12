//import QRCode from "qrcode";
//import Instascan from "instascan"


var QRCode = require('qrcode')
var Instascan = require("instascan")

//import fetch from "node-fetch"
const k = require("node-fetch")

// const { JSDOM } = require("jsdom");
// const { document } = new JSDOM("").window;

// const moviesContainer = document.createElement("div");
// moviesContainer.textContent = "Movies:\n";

// const qrCodeContainer = document.createElement("div");
// qrCodeContainer.textContent = "Qrcode:\n";

//import QRCode from "react-qr-code";

// const [qrText, setQrText] = useState("");
//     setQrText(firstName);
//  {qrText.length > 0 && <QRCode value={qrText} />}


// const qrCodeContainer = document.getElementById("qr-code");
// const moviesContainer = document.getElementById("movies");


// Function to generate a QR code
// function generateQRCode(text) {
//   qrCodeContainer.innerHTML = ""; // Clear previous QR code
//   const qr = new QRCode(qrCodeContainer, {
//     text: text,
//     width: 128,
//     height: 128,
//   });
// }

// // Function to make an API request and display the movies
// async function fetchMovies() {
//   try {
//     const response = await k("http://localhost:3000/movies"); // Replace with your API endpoint
//     // if (response.ok) {
//       const movies = await response.json;
//       moviesContainer.innerHTML = "Movies:\n";
//       movies.forEach((movie) => {
//         moviesContainer.innerHTML += `- ${movie.title}\n`;
//       });
//     //} else {
//       //moviesContainer.innerHTML = "Failed to fetch movies.";
//     //}
//   } catch (error) {
//     moviesContainer.innerHTML = "Error: " + error.message;
//   }
// }

// // When the page loads, generate the QR code and start checking for scans
// generateQRCode("http://localhost:3000/movies"); // Replace with your website URL
// fetchMovies(); // Initial fetch

// // Check for QR code scans
// const scanner = new Instascan.Scanner({ video: document.getElementById("scanner") });
// scanner.addListener("scan", (content) => {
//   if (content === "http://localhost:3000/movies") {
//     fetchMovies(); // Fetch movies when the correct QR code is scanned
//   }
// });
// scanner.start();
