import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import WinstonStream from "./config/winston";

// Controllers
import {healthCheck} from "./controllers/HomeController";


class App {

    public app: any;
    private winstonStream: any;

    constructor() {

        this.app = express();
        this.winstonStream = new WinstonStream();
        this.setExpressConfiguration();
        this.mountRoutes();
    }

    private setExpressConfiguration(): void {

        this.app.set("port", process.env.PORT || 3000);
        this.app.set("domain", process.env.DOMAIN || "0.0.0.0");

        dotenv.load();

        const environment = process.env.ENV;

        if (environment === "production") {
            this.app.use(morgan("combined", { stream: this.winstonStream }));
        } else {
            this.app.use(morgan("dev"));
        }
    }

    private mountRoutes(): void {

        this.app.get("/", healthCheck);

    }

}


export default new App().app;