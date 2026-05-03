import ErrorDetails from "./ErrorDetails";

interface Props {
    userId: string;
}

export default async function ProfileDetails({ userId }: Props) {
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const userData: User = await res.json();

        return (
            <div id="profile-details">
                <h1>{userData.name}</h1>
                <p>{userData.email}</p>
            </div>
        )
    } catch (error) {
        return <ErrorDetails error={error} />;
    }
}