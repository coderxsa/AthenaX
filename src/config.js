const path = require("path");


exports.PREFIX = "/";
exports.BOT_EMOJI = "🤖";
exports.BOT_NAME = "AthenaX";
exports.BOT_NUMBER = "";
exports.OWNER_NUMBER = "";
exports.OWNER_LID = "9999999999999@lid";
exports.COMMANDS_DIR = path.join(__dirname, "commands");
exports.DATABASE_DIR = path.resolve(__dirname, "..", "database");
exports.ASSETS_DIR = path.resolve(__dirname, "..", "assets");
exports.TEMP_DIR = path.resolve(__dirname, "..", "assets", "temp");
exports.TIMEOUT_IN_MILLISECONDS_BY_EVENT = 300;
exports.SPIDER_API_BASE_URL = "https://api.spiderx.com.br/api";
exports.SPIDER_API_TOKEN = "zTCzCsCswrRD4QlxyvaP";
exports.ONLY_GROUP_ID = "";
exports.BASE_DIR = path.resolve(__dirname);
exports.PROXY_PROTOCOL = "http";
exports.PROXY_HOST = "ip";
exports.PROXY_PORT = "port";
exports.PROXY_USERNAME = "username";
exports.PROXY_PASSWORD = "password";
