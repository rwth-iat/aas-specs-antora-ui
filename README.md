# aas-specs-antora-ui

## Description
This is repository contains the source files of the User Interface bundle that is meant to be used by [Antora](https://antora.org/) to generate a documentation site for all specifications of the Asset Administration Shell, i.e. for all repositories in admin-shell-io starting with "aas-specs" (except for this one) in the repository [aas-specs-antora](https://github.com/rwth-iat/aas-specs-antora). This UI Bundle is based off of [Antora Default UI](https://gitlab.com/antora/antora-ui-default).

Please note that this repository is currently in active development.

### Prerequisites

Before proceeding, you are required to have the latest [Node.js LTS release](https://nodejs.org/en/download) installed on your Linux, Windows, or macOS machine. You can then follow the steps [here](https://docs.antora.org/antora/latest/install/install-antora/) to install Antora and set it up to use this bundle with it.

### Building
In order to locally build the documentation website on your own, you have to make sure you have Antora CLI installed on your machine first. You can then continue with cloning this repository. First, you have to install the dependencies. For this, run
```
npm i
```
This is short for ```npm install```. It will install the dependencies listed in package.json into the node_modules/ folder inside the project. 

To build the UI once for preview, run the following:
```
npx gulp preview:build
```

If you need to bundle the UI in order to preview the UI on the real site, execute the following command:
```
npx gulp bundle
```

The generated website should appear under build/ui-bundle.zip.

## License
This project is a fork of [Antora Default UI](https://gitlab.com/antora/antora-ui-default). Complying with their original License, this project is under the Mozilla Public License 2.0. See the [LICENSE](LICENSE) file for details.
