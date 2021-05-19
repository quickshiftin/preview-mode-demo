# Next.js: SSG + Preview Mode Demo

This demo showcases Next.js' next-gen Static Site Generation (SSG) support.

## About

Next.js is the first hybrid framework, allowing you to choose the technique
that fits your use case best on a per-page basis:
[Static Generation or On-Demand rendering](https://nextjs.org/docs/basic-features/data-fetching).

This application solely focuses on Static Generation (using `getStaticProps`),
however, with a game-changing new feature: Preview Mode.

[Take Preview Mode for a spin](https://next-preview.vercel.app/)!

Preview Mode leverages Next.js' on-demand rendering capabilities to bypass the
statically prerendered page and render the page on-demand for
**authorized users**.

This feature is incredibly valuable for content editors who want to view
real-time draft content from their CMS, among other use cases.

## Learn More

You can learn more about this feature in the
[Next.js 9.3 Blog Post](https://nextjs.org/blog/next-9-3) or our
[Documentation](https://nextjs.org/docs/advanced-features/preview-mode).

## Note

This is a fork of the standard demo, that uses the local filesystem instead of S3. You can run it w/ node 14+.

There is also an example of [`getStaticPaths`](https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation).
You'll need to create a couple of previews before running `next build` in order to see it in action. The previews will be available at `http://locacalhost:3000/preview/{snapshotId}`
