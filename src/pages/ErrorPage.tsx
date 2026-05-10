import ErrorDetails from "../components/ErrorDetails";
import Layout from "./_layout";

export default function ErrorPage(err: Error) {
    return (
        <Layout>
            <ErrorDetails error={err} />
        </Layout>
    );
}