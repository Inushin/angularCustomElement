# Angular 17 Custom Element (WebComponent) - Useful commands

An example of a Custom Element built using Angular 17.

## Local versions of the original project

- Angular CLI: 17.3.0
- Node: 20.12.2
- NPM: 10.5.0

## NPX or NPM?

You can use both, the difference is that when you run npx, you do not install the packages locally, you are running the binaries needed for, for example, generating a new project, building an app or just launching de dev server:

Using npx:

```bash
npx -p @angular/cli@ANGULAR-CLI-VERSION-YOU-WANT ng serve // Launched the app in dev mode
```

```bash
npx -p @angular/cli@ANGULAR-CLI-VERSION-YOU-WANT ng build // Builds the app for prod
```

Using npm. With Angular Cli installed locally. Run the script from the package.json with node or use Angular Cli:

```bash
npm install -g @angular/cli@17.3.0 // Install Angular CLI locally
```

```bash
ng serve // Launches the server in dev mode
```

```bash
ng build // Build the app for prod
```

## And now?

With the app builded, you can move the files from dist/custom-element/browse to another folder and inside that folder, run `python3 -m http.server 8000 -d .` or just run `python3 -m http.server 8000 -d  dist/custom-element/browser` pointing to the folder where the builded files are added by default.
