const allowCors =
  (fn: (arg0: any, arg1: any) => any) =>
  async (
    req: { headers: { origin: any }; method: string },
    res: {
      setHeader: (arg0: string, arg1: string | boolean) => void;
      status: (arg0: number) => {
        (): any;
        new (): any;
        end: { (): void; new (): any };
      };
    }
  ) => {
    // res.setHeader("Access-Control-Allow-Credentials", true);
    // res.setHeader("origin", "https://nextjs-graphql-server-client.vercel.app");
    // res.setHeader("Access-Control-Allow-Origin", req.headers.origin || "*");
    // another common pattern
    // res.setHeader(
    //   "Access-Control-Allow-Methods",
    //   "GET,OPTIONS,PATCH,DELETE,POST,PUT"
    // );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
    );
    if (req.method === "OPTIONS") {
      res.status(200).end();
      return;
    }
    await fn(req, res);
  };

export default allowCors;
