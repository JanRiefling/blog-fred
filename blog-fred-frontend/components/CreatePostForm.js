import {useState} from 'react';
import useUser from '../data/use-user';
import userFetcher from '../lib/user-fetcher';
import styles from "./CreatePostForm.module.css"

export default function CreatePostForm() {

const {user} = useUser();

const [title, setTitle] = useState("");
const [subtitle, setSubTitle] = useState("");
const [body, setBody] = useState("");
const [categories, setCategories] = useState("");
const [keywords, setKeywords] = useState("");

let blogPost = {
    title: title,
    subtitle: subtitle,
    body: body,
    categories: categories,
    keywords: keywords,
    author: "Elch",
    timestamp: Date.now,
};

console.log(blogPost);

function createPost(e) {
    e.preventDefault();
    fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
         title,
         subtitle,
         body,
         categories,
         keywords,
         author: "Elch",
         timestamp: Date.now
        }),
      })
      .then((r) => {
        return r.json();
      })
      .then((data) => {
        if (data && data.error) {
          setLoginError(data.message);
        }
      });
}


  return (
    <section>
      <form className={styles.form} onSubmit={createPost}>
        <label className={styles.lable}>Title:
        <input
          name="title"
          type="text"
          placeholder="Give it a Headline..."
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        </label>
        <label className={styles.lable}>Subtitle:
        <input
          name="subtitle"
          placeholder="Give it a second Headline..."
          type="text"
          value={subtitle}
          onChange={(e) => setSubTitle(e.target.value)}
        />
        </label>
        <lable className={styles.lable}>Post:
        <textarea
            className={styles.textarea}
          name="body"
          placeholder="Your Post goes here..."
          value={body}
          required
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        </lable>
        <label className={styles.label}>Categories:
        <input
          name="categories"
          placeholder="Define some categories..."
          type="text"
          value={categories}
          onChange={(e) => setCategories(e.target.value)}
        />
        <button>Push Category</button>
        </label >
        <label className={styles.lable}>Keywords:
        <input
          name="keywords"
          placeholder="Set some keywords..."
          type="text"
          value={keywords}
          onChange={(e) => setKeywords(e.target.value)}
        />
        <button>Push Keyword</button>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </section>
  );
}
