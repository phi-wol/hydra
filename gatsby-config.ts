import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
    siteMetadata: {
        title: `Unleashing HyDRa`,
        siteUrl: `https://phi-wol.github.io/hydra.github.io`
    },
    pathPrefix: "/hydra",
    // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
    // If you use VSCode you can also use the GraphQL plugin
    // Learn more at: https://gatsby.dev/graphql-typegen
    graphqlTypegen: true,
    plugins: [
        "gatsby-plugin-postcss",
        // "gatsby-plugin-google-gtag",
        "gatsby-plugin-sitemap",
        {
            resolve: "gatsby-plugin-google-gtag",
            options: {
                trackingIds: [
                    // Change this to your own Google Analytics Tracking ID
                    "G-T7NKWVQH1D",
                ],
            }
        },
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                "icon": "src/images/ff_icon.png"
            }
        }, "gatsby-plugin-mdx", {
            resolve: 'gatsby-source-filesystem',
            options: {
                "name": "pages",
                "path": "./src/pages/"
            },
            __key: "pages"
        },
    ]
};

export default config;
