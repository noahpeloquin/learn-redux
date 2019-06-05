// increment
export function increment(index) {
  return {
    type: 'INCREMENT_LIKES',
    index
  };
}
// add comment
export function addComment(postId, author, comment) {
  return {
    style: 'ADD_COMMENT',
    postId,
    author,
    comment
  };
}
// remove comment
export function removeComment(postId, i) {
  return {
    type: 'REMOVE_COMMENT',
    i,
    postId
  };
}
