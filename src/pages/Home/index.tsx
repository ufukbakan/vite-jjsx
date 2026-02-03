import { hydrate } from "../../../infra/render";
import typescriptLogo from "./typescript.svg";
import Layout from "../_layout";
import viteLogo from "/vite.svg";
import { use } from "../../../infra/state";

export default function Home() {
    const count = use(0);
    hydrate(() => {
        const element = document.querySelector<HTMLButtonElement>('#counter')!;
        const increment = () => count.set(count.get() + 1);
        const unsubscribeCount = count.subscribe((value) => {
            element.innerHTML = `Count is ${value}`
        });
        element.addEventListener('click', increment)
        return () => {
            element.removeEventListener('click', increment)
            unsubscribeCount();
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
                <button id="counter" type="button">Count is {count.get()}</button>
            </div>
            <p class="read-the-docs">
                Click on the Vite and TypeScript logos to learn more
            </p>
        </Layout>
    );
}