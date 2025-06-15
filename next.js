/**const headers =
  process.env.VERCEL_SKEW_PROTECTION_ENABLED === '1'
    ? { 'x-deployment-id': process.env.VERCEL_DEPLOYMENT_ID }
    : {};
 
const res = await fetch('/get', { headers });
*/
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    useDeploymentId: true,
    // Optionally, use with Server Actions
    useDeploymentIdServerActions: true,
  },
};
 
module.exports = nextConfig;
