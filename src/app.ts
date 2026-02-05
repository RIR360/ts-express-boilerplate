import express, {type Request, type Response, type NextFunction} from 'express';

const app = express();

app.use(express.json())

app.get("/", (req: Request, res: Response, next: NextFunction) => {

  return res.status(200).send({
    message: "Welcome to Node! (Express+Typescript)"
  })
  
})

app.get("/health", (req: Request, res: Response, next: NextFunction) => {

  return res.status(200).send({
    status: "OK",
    message: "It's healthy"
  });
  
})

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  const status = err.status || 500;
  return res.status(status).send({
    message: err.message || "Internal Server Error",
  });
});

export default app;