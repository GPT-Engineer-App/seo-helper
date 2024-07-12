# seo-helper

I need your help helping me with SEO optimization for our website. 

We are using Astro js as our framework.

I need a simple UI where I could enter relevant values and the app should spit out the relevant markup for me that I can use.

Currently we have this

const defaults: SEOProps = {
  title: "Lovable",
  description: "Building the last piece of software.",
  openGraph: {
    basic: {
      title: "Lovable",
      type: "website",
      url: "https://lovable.dev",
      image: "https://lovable.dev/lovable-open-graph.png",
    },
    optional: {
      description: "Building the last piece of software.",
    },
  },
  twitter: {
    title: "Lovable",
    description: "Building the last piece of software.",
    creator: "@Lovable_dev",
    card: "summary_large_image",
    image: "https://lovable.dev/lovable-open-graph.png",
    imageAlt: "Lovable",
  },
};
const { seo } = Astro.props;

Now, this renders into something like this:

<Layout seo={{ title: "Lovable - The last piece of software", description: "Lovable is building software that builds software. We are makers of GPT Engineer app - an AI software engineer." }} shortBg>

I need a UI where I can enter title and description. The UI should be divided in three sections - the first one is for the general title and description. Second and third part are for openGraph and Twitter.

Editable fields are all listed under the schema I submitted earlier.

Also, please ensure there's a client side validation. Title should not be longer than 66 characters with spaces and description should not eexceed 165 chars with spaces.

Let's give this a try and then we'll make improvements

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with .

- Vite
- React
- shadcn-ui
- Tailwind CSS

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/seo-helper.git
cd seo-helper
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
