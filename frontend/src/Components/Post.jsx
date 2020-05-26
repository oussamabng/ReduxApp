import React, { useState, useEffect } from "react";
import { fetchPosts } from "../Actions/PostAction";
import { connect } from "react-redux";
import propTypes from "prop-types";
const Post = (props) => {
  useEffect(() => props.fetchPosts(), []);
  return (
    <div>
      <h1>Posts</h1>
      {props.posts.map((post, index) => (
        <div key={index}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};
Post.propTypes = {
  fetchPosts: propTypes.func.isRequired,
  posts: propTypes.array.isRequired,
};
const mapStateToProps = (state) => ({
  posts: state.posts.items,
});

export default connect(mapStateToProps, { fetchPosts })(Post);
