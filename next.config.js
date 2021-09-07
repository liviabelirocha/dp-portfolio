const withImages = require("next-images");

const isProd = process.env.NODE_ENV === "production";

module.exports = withImages({
  fileExtensions: ["jpg", "jpeg", "png", "gif"],
  esModule: true,
  env: {
    EMAIL_JS_USER_ID: process.env.EMAIL_JS_USER_ID,
    EMAIL_JS_TEMPLATE_ID: process.env.EMAIL_JS_TEMPLATE_ID,
    EMAIL_JS_SERVICE_ID: process.env.EMAIL_JS_SERVICE_ID,
  },
});
