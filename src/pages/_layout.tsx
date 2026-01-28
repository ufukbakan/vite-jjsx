import NavBar from "../components/NavBar";

export default function Layout(props: JSX.ComponentProps) {
    return <div style="min-height:50vh">
        <NavBar />
        <main>
            {props.children}
        </main>
    </div>;
}