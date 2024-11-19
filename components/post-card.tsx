import Link from "next/link";
import { format, parseISO } from "date-fns";
import { Post } from "contentlayer/generated";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function PostCard(post: Post) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <Link
            href={post.url}
            className="text-blue-700 hover:text-blue-900 dark:text-blue-400"
          >
            {post.title}
          </Link>
        </CardTitle>
        <CardDescription>
          <time dateTime={post.date}>
            {format(parseISO(post.date), "LLLL d, yyyy")}
          </time>
        </CardDescription>
      </CardHeader>
      <CardContent>
        This is a description of the post.
        {
          // <div
          //   className="text-sm [&>*]:mb-3 [&>*:last-child]:mb-0"
          //   dangerouslySetInnerHTML={{ __html: post.body.html }}
          // />
        }
      </CardContent>
      <CardFooter>
        <Link
          href={post.url}
          className="text-blue-700 hover:text-blue-900 dark:text-blue-400"
        >
          Read more
        </Link>
      </CardFooter>
    </Card>
  );
}
