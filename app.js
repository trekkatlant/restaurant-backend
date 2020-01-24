const express = require("express");
const path = require("path");
const apiRouter = require("./routes/index");
const cors = require("cors");
const seedDatabase = require("./seed/index");
const db = require("./database");
const app = express();

const syncDb = async () => {
  await db.sync({ force : true });
};
const configureApp = () => {
  app.use(express.json());
  app.use(express.urlencoded({ extended:true }));
  app.use(cors({ credentials: true}));
  
  app.use("/api", apiRouter);
};  
const startListening = () => {
  if(process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "client/build")))
    app.get("*", (request, respone) => {
      respone.sendFile(path.join(__dirname, "client/build", "index.html"))
    })
  }
  const PORT = process.env.PORT || 5000;
  app.get("/", async(req, res, next) => {
    res.status(200).send("Nothing to see here");
  });
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
};
const bootApp = async () => {
  // await sessionStore.sync();
  await syncDb();
  await seedDatabase();
  await configureApp();
  await startListening();
};

//fires up everything
bootApp();



