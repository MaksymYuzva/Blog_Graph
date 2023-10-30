"use client";
import Image from "next/image";
import styles from "@/app/post/post.module.scss";
import { useContext, useState } from "react";
import { AuthContext } from "@/app/context/authContext";
import { useForm } from "@/app/utils/hooks";
import { useMutation } from "@apollo/client";
import { GraphQLError } from "graphql";
import { useRouter } from "next/navigation";
import useCheckAuth from "../utils/useCheckAuth";
import { Input } from "antd";
import ReactQuill from "react-quill";
const Post = () => {
  const [title, setTitle] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const [file, setFile] = useState<File | null>(null);
  const [value, setValue] = useState<string>("");
  const redirected = useCheckAuth();
  if (redirected) {
    return null;
  }

  return (
    <div className={styles.container}>
      <Input
        name="title"
        className={styles.title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <div className={styles.editor}>
        <button className={styles.button} onClick={() => setOpen(!open)}>
          <Image src="/plus.png" alt="" width={16} height={16} />
        </button>
        {open && (
          <div className={styles.add}>
            <input
              type="file"
              id="image"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              style={{ display: "none" }}
            />
            <button className={styles.addButton}>
              <label htmlFor="image">
                <Image src="/image.png" alt="" width={16} height={16} />
              </label>
            </button>
            <button className={styles.addButton}>
              <Image src="/external.png" alt="" width={16} height={16} />
            </button>
            <button className={styles.addButton}>
              <Image src="/video.png" alt="" width={16} height={16} />
            </button>
          </div>
        )}
        <ReactQuill
          className={styles.textArea}
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell your story..."
        />
      </div>
    </div>
  );
};

export default Post;
