import Layout from "@/app/layout";

const Profile = () => {
  return <h1>Profile</h1>;
};
Profile.getLayout = (page: React.ReactNode) => {
  return <Layout>{page}</Layout>;
};
export default Profile;
