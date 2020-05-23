## Description

This repository belongs to the first part of Web Programming class taken at the Xaverian Pontifical University. 

I took this class on 2020-01. Following the [Tutorial](https://github.com/jpavlich/pw) from my awesome teacher Jaime Andres Pavlich.

## Instalation

1. Install [Node.js](https://github.com/nodesource/distributions/blob/master/README.md) **version 10.x**

- Instructions for [Ubuntu](https://github.com/nodesource/distributions/blob/master/README.md#debinstall)
- Warning: **The versión to be installed must be 10.x**. Don't install newer versions, it may cause exceptions.

2. Install Angular CLI

`sudo npm install -g @angular/cli`

3. Update NPM

`sudo npm install -g npm`

4. Install others

`sudo npm install -g typescript`

`sudo npm install -g tslint`

`sudo npm install -g prettier`

5. Visual Studio Code

   a. Install Visual Studio Code

   b. If Visual Studio Code it's already installed, remove old configuration from Visual Studio Code (Recomended)

   - Remove the following folders:

     - `$HOME/.vscode`
     - `$HOME/.config/Code`

6. Install extensions recomended by Visual Studio Code

   - From the folder of this repo, execute `./install_extensions.sh`

7. Configure workspace

   - Open Visual Studio Code
   - `shift+ctrl+p`
   - Open the option `Preferences: Open User Settings`
   - Enable the following options:

     - `Tslint: Enable`
     - `HTML > Format: Enable`
     - `Prettier: Tslint Integration`
     - `Editor: Format On Save` (recomended)
