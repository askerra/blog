import { categories } from "@/config/posts";
import { allPosts, allCategories } from "@/.contentlayer/generated";
import { PostCard } from "@/components/post-card";

export const generateStaticParams = async () =>
  categories.map((category) => ({ category: category.slug }));

export const generateMetadata = ({
  params,
}: {
  params: { category: string };
}) => {
  const category = categories.find((cat) => cat.slug === params.category);
  if (!category)
    throw new Error(`Category not found for category: ${params.category}`);
  return { title: category.name };
};

const PostLayout = ({ params }: { params: { category: string } }) => {
  const posts = allPosts.filter((post) => post.category === params.category);
  const category = categories.find((cat) => cat.slug === params.category);

  return (
    <article className="py-8 px-8">
      <div className="mb-8 ">
        <h1 className="text-3xl font-bold">{category?.name}</h1>
        <p>{category?.description}</p>
        <div className="grid grid-cols-1 gap-4 p-2 sm:p-4 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post._id} {...post} />
          ))}
        </div>
      </div>
    </article>
  );
};

export default PostLayout;
