import app from "./app";

(async () => {
  app.listen(3000, () => {
    console.log("Server is running in port 3000");
  });
})();
