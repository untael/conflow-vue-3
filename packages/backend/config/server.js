module.exports = ({ env }) => ({
  host: env('HOST', process.env.HOST),
  port: env.int('PORT', process.env.PORT),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '154239e9456631bf0c5d6109bf22542a'),
    },
  },
});
