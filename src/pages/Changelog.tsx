import Container from "../components/Container";
import Layout from "./_layout";

export default async function Changelog() {
    try {
        const response = await fetch('https://api.github.com/repos/carats-labs/vault/commits');
        const changelog: Changelog = await response.json();
        return (
            <Layout>
                <Container>
                    <ol>
                        {changelog.map((item) => (
                            <li key={item.sha}>
                                <a href={item.html_url} target="_blank">{item.commit.message} #{item.sha.slice(0, 7)}</a>
                            </li>
                        ))}
                    </ol>
                </Container>
            </Layout>
        )
    } catch (e) {
        return (
            <Layout>
                <Container>
                    <p>Error loading changelog</p>
                    <p>{e instanceof Error ? e.message : 'Unknown error'}</p>
                </Container>
            </Layout>
        )
    }
}

Changelog.head = <title>Carats App - Changelog</title>

Changelog.frame = () => (
    <Layout>
        <Container>
            <ol>
                <li>Fetching recent changes...</li>
                <li>Fetching recent changes...</li>
                <li>Fetching recent changes...</li>
                <li>Fetching recent changes...</li>
                <li>Fetching recent changes...</li>
            </ol>
        </Container>
    </Layout>
)