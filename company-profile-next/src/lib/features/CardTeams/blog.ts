import { Url } from "next/dist/shared/lib/router/router";

type Author = {
    name: string;
    image: any;
    designation: string;
  };
  
  export type Blog = {
    id: number;
    title: string;
    paragraph: string;
    image: any;
    author: Author;
    tags: string[];
    publishDate: string;
  };
  