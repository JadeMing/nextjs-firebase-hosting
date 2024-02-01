/** @type {import('next').NextConfig} */
const nextConfig = {
    //https://nextjs.org/docs/pages/building-your-application/deploying/static-exports
    /*
    When running next build, Next.js generates an HTML file per route. By breaking a strict SPA into individual HTML files, Next.js can avoid loading unnecessary JavaScript code on the client-side, reducing the bundle size and enabling faster page loads.

    Since Next.js supports this static export, it can be deployed and hosted on any web server that can serve HTML/CSS/JS static assets.
    */
    output: 'export',
};

export default nextConfig;
