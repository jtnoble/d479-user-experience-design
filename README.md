# D479 User Experience Design - Taniti Island

This is to serve as my submission for my D479 User Experience Design Performance Assessment for WGU. I am utilizing GitHub Pages to host my prototype website for submission.

*I ask that if you are viewing this as a WGU student taking this class, only use this for inspiration. Please, do not copy this project. To note, this submission is definitely more in-depth than what is being asked for, so don't be overwhelmed by the amount of content (as many instructors will accept basic PowerPoint prototypes).*

## What Is Here?

Mostly everything required for my submission is here. This includes...
- Wireframes
- Geurrilla Testing
- Persona
- Timeline
- Submission Repo

## How To Visit The GitHub Page

You can either click on "github-pages" under the Deployments sidebar on the main page, then navigate to the URL posted there, or you can visit [here](https://jtnoble.github.io/d479-user-experience-design/).

## How To Clone This Repo

Once again, please do not modify or make changes to this project if you are a WGU student taking this course. If you would otherwise like to mess around with the page just for educational reasons, then by all means continue.

1. Confirm you have node installed with `node --version`. I personally have Node 20 installed, so if you run into errors with dependencies, you may need to match my version.
1. Clone the repository locally: `git clone repo-link`
1. Install required dependencies with `npm install`
1. Run locally with `npm run dev`
    - Once you have made significant changes, I highly recommend making a preview build, as some changes may not accurately reflect when running the deveoper build. To do this, `npm run build && npm run preview`

## Auto-Generated React + TS + Vite Section

### React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
