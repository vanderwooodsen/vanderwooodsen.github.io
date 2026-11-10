# Christine's portfolio

A React portfolio focused on professional experience, technical skills, and contact information.

## Local development

Run commands from the project directory, which contains `package.json`:

```sh
cd vanderwooodsen.github.io
npm install
npm start
```

The development server runs at http://localhost:3000.

## Checks

```sh
npm run lint
npm test -- --watchAll=false --runInBand
npm run build
```

Lint fails on errors and warnings. The production build is generated in `build/`.

## Editing content

- `src/data/navigation.js`: shared section links and social profiles.
- `src/data/skills.js`: technologies, display names, and filter categories.
- `src/components/AboutMe.js` and `Experience.js`: biography and work experience.
- `src/index.css`: shared styles, responsive layouts, and motion preferences.

Earlier project components remain in `src/components/Projects.js`, `Project.js`, and `ProjectImage.js`. They are not imported or displayed on the main page. To show them again, render `Projects` in `Home.js` and add its section link to `NAVIGATION_LINKS`.

## Publishing

`npm run deploy` builds the app and publishes `build/` through `gh-pages`.
The custom domain is configured in `public/CNAME` and `package.json`.
