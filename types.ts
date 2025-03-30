export interface Post {
  _id: string;
  title: string;
  description: string;
  imageurl: string;
  category: string;
  blogid: string;
}

export interface ReadingPost {
  _id: string;
  title: string;
  description: string;
  imageurl: string;
  category: string;
  content: string;
  blogid: string;
}
