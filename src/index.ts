import app from "./App";

const port = app.get("port");
const domain = app.get("domain");

app.listen(port, (err: any) => {
    if (err) {
        return console.log(err);
    }

    return console.log(`server is listening on ${domain}:${port}`);
});