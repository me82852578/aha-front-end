# Aha front-end exam2

## Online Demo

- [Demo website](https://aha-demo.jay-studio.net/)
- [Testing Figma file](https://www.figma.com/file/hEJSLsJD8JoCQq3z6HDQif/Front-end-Exam?node-id=0%3A1&t=nKFXVN6U317lB7i5-0)

💡 **If demo website can't available, please send a mail (me82852578@gmail.com), thanks !**

## Required checklist

- [x] Typescript
- [x] React.js
- [x] MUI (Material UI)
- [x] Airbnb Coding Style
- [x] Hosted on my own server and domain
- [x] Create a new Figma file to test
- [x] Exam2 all done
- [x] Create a mock API using Mirage.js ( the API structure refers to the [Aha API](https://avl-frontend-exam.herokuapp.com) ).

## Quick start

1. Install package

    ```sh
    npm i
    ```

2. Start project

    ```sh
    npm start
    ```

3. Access `http://localhost:3000` in your browser.

## Development Environment

- IDE : [Vscode](https://code.visualstudio.com/)
  - [Eslint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
    - 💡 If you need format with keyboard shortcuts (Shift + Alt + F), add below config to VSCode's `keybindings.json`.

      ```javascript
      [
          {
              "key": "alt+shift+f",
              "command": "stylelint.executeAutofix",
              "when": "editorTextFocus && editorLangId == 'css'"
          },
          {
              "key": "alt+shift+f",
              "command": "stylelint.executeAutofix",
              "when": "editorTextFocus && editorLangId == 'scss'"
          },
          {
              "key": "alt+shift+f",
              "command": "stylelint.executeAutofix",
              "when": "editorTextFocus && editorLangId == 'less'"
          }
      ]
      ```

  - [Prettier extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
  - [Vscode settings](.vscode\settings.json)
- Package Manager :  [npm](https://www.npmjs.com/)

## Lint Tools

- [ESLint](https://eslint.org/)
  - [Airbnb](https://github.com/airbnb/javascript)
- [lint-staged](https://github.com/okonet/lint-staged)
- [husky](https://typicode.github.io/husky/#/?id=features)
- [commitlint](https://commitlint.js.org/#/)
- [ci (github workflows)](https://docs.github.com/en/actions/using-workflows)

---

## Versioning

- **Follow [Semantic Versioning](https://semver.org/).**

---

## GitHub / GitLab

- Branch `main` is the main branch, all updates need to be tagged with a [version](#versioning).
- Repositories and branches naming rules follow [Git Branching Naming Convention](https://codingsight.com/git-branching-naming-convention-best-practices/)  e.g., `an-awesome-project`, `some-branch`.
- Commit, follow [How to Write a Git Commit Message](https://cbea.ms/git-commit/), [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) and [the Angular convention](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines).

---

## Deploy

- Basic deploy:

  ```sh
  npm run build
  ```

- With docker and also docker compose:

  ```sh
  docker compose up -d --build
  ```

  Default will run on <http://127.0.0.1:3080>.
