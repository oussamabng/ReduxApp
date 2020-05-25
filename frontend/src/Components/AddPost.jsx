import React, { useState } from "react";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const handleChangeInput = (e) => {
    let name = e.currentTarget.attributes["name"].value;
    let value = e.currentTarget.value;
    switch (name) {
      case "title":
        setTitle(value);
        break;
      case "body":
        setBody(value);
        break;
      default:
        break;
    }
  };
  const addPost = () => {
    const post = {
      title,
      body,
    };
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(post),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div>
      <h1>Add Post</h1>
      <form>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={handleChangeInput}
          />
        </div>
        <div>
          <label htmlFor="body">Body</label>
          <input
            type="text"
            name="body"
            id="body"
            value={body}
            onChange={handleChangeInput}
          />
        </div>
      </form>
      <button onClick={addPost}>Add</button>
    </div>
  );
};

export default AddPost;
