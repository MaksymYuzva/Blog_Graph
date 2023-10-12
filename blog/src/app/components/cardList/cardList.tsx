import React, { useState } from "react";
import styles from "@/app/components/cardList/CardList.module.scss";
import Pagination from "@/app/components/pagination/pagination";
import Image from "next/image";
import Card from "@/app/components/card/card";
import { QueryResult, useQuery } from "@apollo/client";
import getPosts from "@/app/api/graphql/queries/getPosts.gql";
import { queryPosts } from "@/app/api/graphql/queries/getPosts";
import { Item } from "../dto/item.dto";

const CardList = () => {
  console.log("Card list component");
  const { loading, error, data } = useQuery(queryPosts);
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const { posts } = data;
  console.log(posts);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        {posts?.map((item: Item) => (
          <Card item={item} key={item._id} />
        ))}
      </div>
      {/* <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} /> */}
    </div>
  );
};

export default CardList;
