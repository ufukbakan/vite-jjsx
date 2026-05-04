import type { CaratsComponent } from "@carats/render";
import ProfileDetails from "../../components/ProfileDetails";
import Layout from "../_layout";

interface Props {
    id: string;
}

export default async function UserProfile(this: CaratsComponent, props: Props) {
    this.head = <meta name="description" content="User Profile" />;
    return (
        <Layout>
            <ProfileDetails userId={props.id} />
        </Layout>
    )
}