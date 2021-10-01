# Darwinium frontend

https://darwinium.vercel.app/

uses:
- Next.js
- tailwind
- sanity

### Create env file
env.local in dev
env.production in prod
### Run Next.js in development mode

```bash
npm install
npm run dev

# or

yarn install
yarn dev
```

### How to create blocks

Create component in `/components/blocks` and add export statement to `/components/blocks/index.js`. It will then be visible to the `/components/block-renderer.js` and so will be available in the `/components/page.js` component.

As long as the component file name matches the block name in sanity, it should work.