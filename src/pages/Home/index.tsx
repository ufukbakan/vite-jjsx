import { hydrate } from "../../../infra/render";
import typescriptLogo from "./typescript.svg";
import Layout from "../_layout";
import viteLogo from "/vite.svg";

export default function Home() {
    let counter = 0
    hydrate(() => {
        const element = document.querySelector<HTMLButtonElement>('#counter')!;
        const increment = () => {
            counter += 1;
            element.innerHTML = `count is ${counter}`
        }
        element.addEventListener('click', increment)
        return () => {
            element.removeEventListener('click', increment)
        }
    });
    return (
        <Layout>
            <a href="https://vite.dev" target="_blank">
                <img class="logo" src={viteLogo} alt="Vite logo" />
            </a>
            <a href="https://www.typescriptlang.org/" target="_blank">
                <img class="logo vanilla" src={typescriptLogo} alt="TypeScript logo" />
            </a>
            <h1>Vite + TypeScript</h1>
            <div class="card">
                <button id="counter" type="button">count is {counter}</button>
            </div>
            <p class="read-the-docs">
                Click on the Vite and TypeScript logos to learn more
            </p>
        </Layout>
    );
}