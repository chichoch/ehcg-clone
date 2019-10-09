/**
 * Immutable comment.
 */
export default class Comment {
  constructor(author, content) {
    this.author = author;
    this.content = content;
  }

  getAuthor() {
    return this.author;
  }

  getContent() {
    return this.content;
  }
}
