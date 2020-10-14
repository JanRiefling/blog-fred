import fetch from 'isomorphic-unfetch';

export default function PostId({postById}) {

    return (
        <div>
            <h1>{postById.title}</h1>
        </div>
    );
}
  