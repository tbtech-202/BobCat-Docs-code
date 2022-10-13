## Contributing

For contributing rules, please visit [this page](./.github/CONTRIBUTING.md).

The Guide is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator. 

[`/src`](./src) contains styling (`.scss`) and the index (`.tsx`/`jsx`).

[`/docs`](./docs) contains the pages for the guide. The Documentation pages are writtern in the `md`/`mdx` file format, a combination of Markdown syntax and JSX/React.

## Local Development

First, you need to clone the repository:

    git clone https://github.com/Server-Manager-Dev-Team/website

### Installing Requirements

You need to install the requirements for the guide, which you may do by running the following command:

    yarn

### Starting the Server

Then, you can start the server by running the following command:

    yarn start

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Building the Website

Then, you can build the website by running the following command:

    yarn build

This command generates static content into the `build` directory and can be served using any static contents hosting service.
