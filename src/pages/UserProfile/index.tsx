import { hydrate } from "../../../infra/render";
import Layout from "../_layout";
import ProfileDetails from "./ProfileDetails";
import { userState, type User } from "./shared";

export default function UserProfile() {
    const pathRegex = /\/user\/(.+)/;
    const match = window.location.pathname.match(pathRegex);
    const userId = match ? match[1] : null;
    hydrate(async () => {
        if (userId) {
            const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
            const userData : User = await res.json();
            userState.set(userData);
        }
    });
    return (
        <Layout>
            <ProfileDetails />
        </Layout>
    )
}