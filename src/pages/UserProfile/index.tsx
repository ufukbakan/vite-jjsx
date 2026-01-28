import { transpile } from "jjsx";
import { hydrate } from "../../../infra/render";
import Layout from "../_layout";

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
}

export default function UserProfile() {
    const pathRegex = /\/user\/(.+)/;
    const match = window.location.pathname.match(pathRegex);
    const userId = match ? match[1] : null;
    hydrate(() => {
        if (userId) {
            fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
                .then(res => res.json())
                .then((data: User) => {
                    const Details = <ProfileDetails {...data} />;
                    document.getElementById('profile-details')!.innerHTML = transpile(Details);
                });
        }
        return () => { };
    });
    return (
        <Layout>
            <div id="profile-details">
                <Spinner />
            </div>
        </Layout>
    )
}

function Spinner() {
    return <div> Loading... </div>
}

function ProfileDetails(props: User) {
    return (
        <div>
            <h1>{props.name}</h1>
            <p>{props.email}</p>
        </div>
    )
}