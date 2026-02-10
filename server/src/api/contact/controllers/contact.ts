/**
 * contact controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::contact.contact",
  ({ strapi }) => ({
    async create(ctx) {
      // Récupère les données du formulaire
      const { name, email, phone, message } =
        ctx.request.body.data || ctx.request.body;

      // Validation basique
      if (!name || !email || !message) {
        return ctx.badRequest("Name, email and message are required");
      }

      try {
        // Enregistre le contact dans la base de données
        const entry = await strapi.documents("api::contact.contact").create({
          data: {
            name,
            email,
            phone: phone || null,
            message,
          },
        });

        if (
          !process.env.SMTP_DEFAULT_REPLY_TO ||
          !process.env.SMTP_DEFAULT_FROM
        ) {
          strapi.log.warn(
            "SMTP_DEFAULT_REPLY_TO or SMTP_DEFAULT_FROM environment variables are not set. Skipping email sending.",
          );
          return ctx.send({
            data: entry,
            message:
              "Message saved but email not sent due to missing SMTP configuration",
          });
        }

        // Envoie un email de notification
        await strapi.plugins.email.services.email.send({
          to: process.env.SMTP_DEFAULT_REPLY_TO,
          from: process.env.SMTP_DEFAULT_FROM,
          replyTo: email,
          subject: `Nouveau message de ${name}`,
          text: `
Nom: ${name}
Email: ${email}
Téléphone: ${phone || "Non fourni"}

Message:
${message}
        `,
          html: `
<h2>Nouveau message de contact</h2>
<p><strong>Nom:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Téléphone:</strong> ${phone || "Non fourni"}</p>
<p><strong>Message:</strong></p>
<p>${message.replace(/\n/g, "<br>")}</p>
        `,
        });

        // Retourne la réponse
        return ctx.send({
          data: entry,
          message: "Message sent successfully",
        });
      } catch (error) {
        strapi.log.error("Error sending contact email:", error);
        return ctx.internalServerError("Failed to send message");
      }
    },
  }),
);
