import app from "./app";

(async () => {
  app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running in port ${process.env.PORT || 3000}`);
  });
})();
