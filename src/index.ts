import express, { Request, Response } from "express";

const app = express();

app.get("/api/hello-world", (req: Request, res: Response) => {
  res.send("Hello, World!");
});

const port = process.env.PORT ? parseInt(process.env.PORT) : 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
