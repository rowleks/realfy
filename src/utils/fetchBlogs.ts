export interface Blog {
  id: number;
  title: string;
  author: string;
  date: string;
  summary: string;
  content: string;
  tags: string[];
  readingTime: number;
  image: string;
}

export async function fetchBlogs(): Promise<Blog[]> {
  try {
    const response = await fetch('/blogs.json');
    if (!response.ok) throw new Error('Failed to fetch blogs');
    const data = await response.json();
    return data as Blog[];
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return [];
  }
}

export async function fetchBlogById(id: number): Promise<Blog | undefined> {
  const blogs = await fetchBlogs();
  return blogs.find(blog => blog.id === id);
}