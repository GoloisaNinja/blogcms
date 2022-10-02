const PORT = process.env.PORT;
module.exports = ({ env }) => ({
  host: env("HOST", `0.0.0.0:${PORT}`),
  port: env.int("PORT", 1337),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "121e6f9f125705d1a072d4e69f683d72"),
    },
  },
});
