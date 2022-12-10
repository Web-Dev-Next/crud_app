const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;

const EnvVar = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "chitrang",
        mongodb_password: "JySuvk7Y5qE6J3sA",
        mongodb_clustername: "cluster0",
        mongodb_database: "crud-dev",
      },
    };
  }

  return {
    env: {
      mongodb_username: "chitrang",
      mongodb_password: "JySuvk7Y5qE6J3sA",
      mongodb_clustername: "cluster0",
      mongodb_database: "crud",
    },
  };
};

module.exports = EnvVar;
