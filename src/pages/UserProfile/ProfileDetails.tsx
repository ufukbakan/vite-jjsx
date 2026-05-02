import { userState, type User } from "./shared";
import { hydrate } from "../../../infra/hydrate";
import { transpile } from "jjsx";

function Details({ user }: { user: User }) {
    return (<>
        <h1>{user.name}</h1>
        <p>{user.email}</p>
    </>)
}

export default function ProfileDetails() {
    hydrate(() => {
        const unsubscribeUserData = userState.subscribe((user) => {
            if (user) {
                document.getElementById('profile-details')!.innerHTML = transpile(<Details user={user} />);
            }
        })
        return () => {
            unsubscribeUserData();
        }
    })

    return (
        <div id="profile-details">
            Loading...
        </div>
    )
}