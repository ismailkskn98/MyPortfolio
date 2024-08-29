export type ErrorResponse = {
  message: string;
  data: null | [];
  error: boolean;
  success: boolean;
};
export type SuccessResponse<T> = {
  message: string;
  data: T;
  error: boolean;
  success: boolean;
};

export type AboutType = {
  _id: string | number;
  about: string;
};

export type CategoriesType = {
  _id: number | string;
  name: string;
};

export type BlogsType = {
  _id: number | string;
  title: string;
  slug: string;
  subtitle: string;
  description: string;
  image: string;
  user: number | string;
  categories: {
    _id: string | number;
    name: string;
  }[];
};

export type BlogType = {
  _id: string | number;
  title: string;
  slug: string;
  subtitle: string;
  description: string;
  createdAt: Date | string | number;
  user: {
    _id: string | number;
    firstname: string;
    lastname?: string;
  };
  categories: {
    _id: string | number;
    name: string;
  }[];
};

export type BlogColumnType = {
  _id: string | number;
  title: string;
  subtitle: string;
  slug: string;
  createdAt: string;
  user: {
    _id: string | number;
    firstname: string;
  };
  categories: [{ name: string }];
};

export type SearchBlog = {
  _id: string | number;
  title: string;
  slug: string;
  subtitle: string;
};

export type HeroType = {
  _id: number;
  name: string;
  job: string;
  email: string;
  freelancer: string;
  website: string;
  city: string;
};

export type BlogsCountType = {
  count: number;
};

export type BlogByIdType = {
  id: string | number;
  title: string;
  slug: string;
  subtitle: string;
  description: string;
  image: string;
  userId: string | number;
  Categories: {
    id: string | number;
    name: string;
    BlogCategory: { blogId: number; categoryId: number };
  }[];
  User: {
    id: string | number;
    username: string;
    firstname: string;
    lastname: string;
    email: string;
  };
};

export type SkillType = {
  _id: string | number;
  name: string;
  image: string;
};

export type WorkType = {
  _id: string | number;
  name: string;
  url: string;
  verticalImage: string;
  horizontalImage: string;
};
