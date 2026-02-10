export default ({ env }) => ({
  // … some unrelated plugins configuration options
  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        host: env("SMTP_HOST", "smtp.gmail.com"),
        port: env("SMTP_PORT", 587),
        secure: env.bool("SMTP_SECURE", false),
        auth: {
          user: env("SMTP_USERNAME"),
          pass: env("SMTP_PASSWORD"),
        },
        // ... any custom nodemailer options
      },
      settings: {
        defaultFrom: env("SMTP_DEFAULT_FROM", "test@test.fr"),
        defaultReplyTo: env("SMTP_DEFAULT_REPLY_TO", "test@test.fr"),
      },
    },
    // … some other unrelated plugins configuration options
  },
});
