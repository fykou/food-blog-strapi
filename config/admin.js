module.exports = ({ env }) => ({
  apiToken: { salt: env("API_TOKEN_SALT") },
  auth: {
    secret: env("ADMIN_JWT_SECRET", "c8ad0004e7f2be21a1985e5a411e38e3"),
  },
});
