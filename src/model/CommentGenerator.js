import Comment from './Comment';
import {comments} from './CommentList';

export default class CommentGenerator {
  getRandomComment() {
    const randomAuthorIndex = getRandomNumberBetween(0, comments.length);
    const randomAuthor = comments[randomAuthorIndex].author;
    const randomCommentIndex = getRandomNumberBetween(0, comments[randomAuthorIndex].comments.length);
    const randomComment = comments[randomAuthorIndex].comments[randomCommentIndex];
    return new Comment(randomAuthor, randomComment);
  }
}

const getRandomNumberBetween = (min, max) => {
  return Math.floor(Math.random() * max) + min;
}
