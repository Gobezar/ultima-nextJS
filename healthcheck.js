const http = require("http");

const req = http.get("http://127.0.0.1:3000/health", { timeout: 4000 }, (res) => {
  res.resume();
  process.exit(res.statusCode >= 200 && res.statusCode < 300 ? 0 : 1);
});

req.on("timeout", () => {
  req.destroy();
  process.exit(1);
});

req.on("error", () => {
  process.exit(1);
});
