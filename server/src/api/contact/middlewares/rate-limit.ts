/**
 * Rate limiting middleware for contact form
 */

import rateLimit from "koa-ratelimit";

const db = new Map();

export default (config, { strapi }) => {
  return rateLimit({
    driver: "memory",
    db: db,
    duration: 60000, // 1 minute
    errorMessage: "Too many requests, please try again later.",
    id: (ctx) => ctx.ip,
    headers: {
      remaining: "Rate-Limit-Remaining",
      reset: "Rate-Limit-Reset",
      total: "Rate-Limit-Total",
    },
    max: 3, // Max 3 requêtes par minute par IP
    disableHeader: false,
  });
};
