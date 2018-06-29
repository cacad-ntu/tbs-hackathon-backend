import winston, {createLogger} from "winston";
import appRoot from "app-root-path";

const options = {
    file: {
        level: "info",
        filename: `${appRoot}/logs/app.log`,
        handleExceptions: true,
        json: true,
        maxsize: 5242880, // 5MB
        maxFiles: 5,
        colorize: false,
    },
    console: {
        level: "debug",
        handleExceptions: true,
        json: false,
        colorize: true,
    }
};


const logger = createLogger({
    exitOnError: false,
    level: "info",
    transports: [
        new (winston.transports.Console)(options.console),
        new (winston.transports.File)(options.file)
    ]
});

class WinstonStream {
    write(text: string) {
        logger.info(text);
    }
}

export default WinstonStream;