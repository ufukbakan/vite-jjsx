import { afterMount, use } from "@carats/hooks";
import type { CaratsComponent } from "@carats/render";
import Container from "../components/Container";
import Layout from "./_layout";
import './Counter.css';
import caratsLogo from '/carats.svg';

const CounterState = use(0);
Counter.defaultProps = CounterState;

export default function Counter(this: CaratsComponent, state: typeof CounterState) {
    this.head = <title>Carats App - Counter</title>;
    afterMount(() => {
        const incrementButton = document.querySelector<HTMLButtonElement>('#increment')!;
        const decrementButton = document.querySelector<HTMLButtonElement>('#decrement')!;
        const increment = () => state.set(p => p + 1);
        const decrement = () => state.set(p => p - 1);
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
                    <span id="count">{state.get()}</span>
                    <button id="increment" type="button">+</button>
                </div>
            </Container>
        </Layout>
    );
}