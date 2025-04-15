# HyDRa Website

Project website for the paper "Unleashing HyDRa: Hybrid Fusion, Depth Consistency and Radar for Unified 3D Perception".

**Deployed at:** https://phi-wol.github.io/hydra

## 🚀 Quick start

This website is built using [Gatsby.js](https://www.gatsbyjs.com/) and [Tailwind CSS](https://tailwindcss.com/).

1. Install Node.js (v18 or later required). You can follow the instructions.
   [here](https://www.gatsbyjs.com/docs/tutorial/getting-started/part-0/#nodejs)
2. Install yarn with `npm install yarn`.
3. Install dependencies of this project with `yarn install`.
4. Start the development server with `yarn develop`.
    - The website should be available at http://localhost:8000/
    - You can make edits to `src/pages/index.tsx` to see the website update in real-time

Checkout the Gatsby.js [documentation](https://www.gatsbyjs.com/docs/tutorial/getting-started/) for more details.

## 📦️ Build and Deployment

To build the website locally, run `yarn build`.

To deploy the website to GitHub pages:
- Run `yarn deploy-ssh` for SSH-based auth.
- Run `yarn deploy` for HTTPS-based auth.

**Note:** you will need to change your Git remote in `package.json` to point to your own repository if you are
using this template for your own website.

## 📃 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
We borrowed this website from [F3RM](https://github.com/f3rm/f3rm.github.io).
