module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '027d9a96141d949df558660ba1b6e730'),
  },
});
