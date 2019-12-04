import winston, { Logger } from 'winston';
import { Format } from 'logform';

const { combine, timestamp, label, printf } = winston.format;

const myFormat: Format = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

const options = {
  // log파일
  file: {
    level: 'info',
    filename: `./logs/winston-test.log`, // 로그파일을 남길 경로
    handleExceptions: true,
    json: false,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: false,
    format: combine(
      label({ label: 'winston-test' }),
      timestamp(),
      myFormat
    )
  },
  console: {
    level: 'debug',
    handleExceptions: true,
    json: false,
    colorize: true,
    format: combine(
      label({ label: 'nba_express' }),
      timestamp(),
      myFormat
    )
  }
};

const logger: Logger = new (winston.createLogger({
  transports: [
    new winston.transports.File(options.file) // 중요! 위에서 선언한 option으로 로그 파일 관리 모듈 transport
  ],
  exitOnError: false,
}));

(logger as any).stream = {
  write: (message: string) => {
    logger.info(message);
  },
};

export default logger;