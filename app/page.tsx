import { compareDesc } from "date-fns";
import { allPosts, allCategories } from "contentlayer/generated";
import { PostCard } from "@/components/post-card";
// import { categories } from "@/config/posts";

export default function Home() {
  const categories = allCategories;
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  );

  return (
    <div className="mx-auto w-full py-8">
      <h1 className="mb-8 text-center text-2xl font-black">Categories</h1>
      <div className="grid grid-cols-1 gap-4 p-2 sm:p-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category, idx) => (
          <div key={idx} className="p-4 border rounded-lg">
            <h2 className="text-xl font-bold">{category.title}</h2>
            <p>{category.description}</p>
          </div>
        ))}
      </div>

      <h1 className="mb-8 text-center text-2xl font-black">All posts</h1>
      <div className="grid grid-cols-1 gap-4 p-2 sm:p-4 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, idx) => (
          <PostCard key={idx} {...post} />
        ))}
      </div>
    </div>
  );
}
