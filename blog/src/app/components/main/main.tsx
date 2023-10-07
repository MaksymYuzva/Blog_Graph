import styles from "@/app/components/main/Main.module.scss";
import { useQuery } from "@apollo/client";
import client from "@apollo/client";
import getPosts from "../../pages/api/graphql/queries/getPosts.gql";

export const Main = () => {
  // const { loading, data } = useQuery(getPosts);
  // if (loading) {
  //   <p>Loading...</p>;
  // }
  return <main>main</main>;
};
