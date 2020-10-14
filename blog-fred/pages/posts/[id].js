import fetch from 'isomorphic-unfetch';

export default function PostId({post}) {

    return (
        <div>
            <h1>{post.title}</h1>
        </div>
    );
}

export async function getStaticPaths() {
  const res = await fetch("http://localhost:3000/api/posts");
  const posts = await res.json();

  const paths = posts.map((post) => ({
    params: { id: post._id },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }

}

export async function getStaticProps({ params }) {
  const res = await fetch(`http://localhost:3000/api/posts/${params.id}`)
  const post = await res.json();
  console.log(post);
  return {
    props: {
      post,
    },
  }
}


  