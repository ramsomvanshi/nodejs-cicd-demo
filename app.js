const os = require("os");

console.log("Welcome to Node.js CI/CD Project!");
console.log("----------------------------------");

console.log("Application: Node.js Application");
console.log("Platform: Amazon Web Services");
console.log("Node.js Version:", process.version);
console.log("Operating System:", os.platform());

console.log("Status: Application Created Successfully!");
console.log("Deployment: Source -> Build -> Test -> Deploy");