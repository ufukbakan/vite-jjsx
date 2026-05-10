import { hydrate, use } from "@carats/hooks";
import Container from "../components/Container";
import Layout from "./_layout";
import './Counter.css';
import caratsLogo from '/carats.svg';
import type { CaratsComponent } from "@carats/render";

export default function Counter(this: CaratsComponent) {
    this.head = <title>Carats App - Counter</title>;
    const count = use(0);
    hydrate(() => {
        const incrementButton = document.querySelector<HTMLButtonElement>('#increment')!;
        const decrementButton = document.querySelector<HTMLButtonElement>('#decrement')!;
        const rerender = () => {
            document.getElementById('count')!.textContent = count.get().toString();
        }
        const increment = () => {
            count.set(c => c + 1);
            rerender();
        };
        const decrement = () => {
            count.set(c => c - 1);
            rerender();
        };
        incrementButton.addEventListener('click', increment);
        decrementButton.addEventListener('click', decrement);

        return () => {
            incrementButton.removeEventListener('click', increment);
            decrementButton.removeEventListener('click', decrement);
        }
    });
    return (
        <Layout>
            <Container style="padding-top: 10rem; text-align: center" id="counter-container">
                <a href="https://carats.dev" class="logo">
                    <img height={100} src={caratsLogo} alt="Carats logo" />
                </a>
                <div id="counter-card" class="card" style="margin-top: 2rem">
                    <button id="decrement" type="button">-</button>
                    <span id="count">{count.get()}</span>
                    <button id="increment" type="button">+</button>
                </div>
            </Container>
        </Layout>
    );
}