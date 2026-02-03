import { userState } from "./shared";
import { hydrate } from "../../../infra/render";
import { transpile } from "jjsx";

export default function ProfileDetails() {
    hydrate(() => {
        const unsubscribeUserData = userState.subscribe((userData) => {
            document.getElementById('profile-details')!.innerHTML = transpile(
                <>
                    <h1>{userData.name}</h1>
                    <p>{userData.email}</p>
                </>
            );
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