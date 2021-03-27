<h1 align="center" style="margin-bottom:30px; font-weight: 300">API Restful with TypeScript and TypeORM</h1>

<h2 style="font-weight: 300;margin-bottom: 3px">📚 Course I follow:</h2>
<h5 style="margin: 0 0 15px">In pt-BR 🇧🇷</h5>

<a href="https://www.udemy.com/course/api-restful-de-vendas/">
<img alt="Udemy" src="https://img.shields.io/badge/Udemy%20-%23EA5252.svg?&style=for-the-badge&logo=Udemy&logoColor=white"/>
</a>

<h2 style="margin-top:40px;font-weight:300">📃 Technologies</h2>

<a href="#">
<img alt="TypeScript" src="https://img.shields.io/badge/typescript%20-%23007ACC.svg?&style=for-the-badge&logo=typescript&logoColor=white"/>
</a>

<a href="#">
<img alt="NodeJS" src="https://img.shields.io/badge/node.js%20-%2343853D.svg?&style=for-the-badge&logo=node.js&logoColor=white"/>
</a>

<a href="#">
<img alt="Reis" src="https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white"/>
</a>

<a href="#">
<img alt="JWT" src="https://img.shields.io/badge/JSON%20Web%20Token-000000?style=for-the-badge&logo=json-web-tokens&logoColor=white"/>
</a>

<h2 style="margin-top:40px;font-weight:300">🧰 Tools</h2>

<a href="#">
<img src="https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white" alt="VS Code" />
</a>

<h2 style="margin-top:40px;font-weight:300">📀 Database</h2>

To this project the database used is **PostgreSQL** in **Docker** container.

<a href="#">
<img alt="PostgreSQL" src ="https://img.shields.io/badge/PostgreSQL-%23316192.svg?&style=for-the-badge&logo=postgresql&logoColor=white"/>
</a>

<a href="#">
<img alt="Docker" src="https://img.shields.io/badge/docker%20-%230db7ed.svg?&style=for-the-badge&logo=docker&logoColor=white"/>
</a>

<h2 style="margin-top:40px;font-weight:300">⌨️ Commands</h2>

-   **`yarn format`** or **`npm run format`:** run **Prettier** to format all code <small>(using settings defined in `.prettierrc` file)</small>;
-   **`yarn dev`** or **`npm run dev`:** run the _localhost_ server;
-   **`yarn lint`** or **`npm run lint`:** to run the **ESLint** in your terminal;
-   **`yarn lint:fix`** or **`npm run lint:fix`:** to run the **ESLint** and fix the issues;
-   **`yarn typeorm`** or **`npm run typeorm`:** to run the **TypeORM** to run or create migrations (for example).

<h2 style="margin-top:40px;font-weight:300">📄 Changes</h2>

I have some changes in my project, like:

-   I use **Joi** to validation fields in requests (body, params or query), and create 3 middlewares:
    -   to validate fields in body **(`req.body`)**;
    -   to validate params **(`req.params`)**;
    -   to validate query params **(`req.query`)**.
-   Create most of the interfaces in `src/interfaces` folder, and start all files with `I` <small>(to represent the interface)</small>;
-   Use `.env` file to storage environment variables;
-   Create the `src/config/environment.ts` file to export objects with `.env` variables;
-   Create class **`JoiError`** to format the errors from **Joi** validation;
-   Create enum <small>(in `src/enums/` and starts with `E` to represent the enum)</small> to storage the most strings texts to **Joi** validations;
-   Create middlewares to **Joi Validation** (`shared/middlewares/joiValidation.ts`);

<h2 style="margin-top: 20px; font-weight: 300">🔗 Other Links</h2>

-   **[Email Template](https://github.com/leemunroe/responsive-html-email-template)** <small>(I use to create the forgot password email)</small>;
