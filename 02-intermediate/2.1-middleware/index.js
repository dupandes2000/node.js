function requestLogger(req, res, next) {
  const now = new Date();
  const timestamp = now.toISOString().replace("T", " ").split(".")[0]; // Format: YYYY-MM-DD HH:MM:SS
  console.log(`[${timestamp}] ${req.method} ${req.url}`);
  next(); // Lanjut ke middleware berikutnya
}

module.exports = requestLogger;
