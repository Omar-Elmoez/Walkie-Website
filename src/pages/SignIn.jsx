import { SignIn as Sign, Layout } from "../components";

export default function SignIn() {
  return (
    <div className="registerBody">
      <Layout page="signin">
        <Sign />
      </Layout>
    </div>
  );
}
