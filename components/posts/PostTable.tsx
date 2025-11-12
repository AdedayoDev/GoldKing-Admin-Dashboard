import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  TableHead,
  TableCaption,
} from "../ui/table";
import Link from "next/link";
import posts from "@/data/post";
import { Post } from "@/types/posts";
import { Button } from "../ui/button";

interface PostsTableProps {
  limit?: number;
  title?: string;
}

const PostTable = ({ limit, title }: PostsTableProps) => {

    // Sort Post in desc order base on date
    const sortedPost: Post[] = [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

    // filter post to limit
    const filteredPosts = limit ? sortedPost.slice(0, limit) : sortedPost

  return (
    <div className="mt-10">
      <h3 className="text-2xl mb-4 font-semibold">{title ? title : "Posts"}</h3>
      <Table>
        <TableCaption>A List of recent Posts</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead className="hidden md:table-cell">Author</TableHead>
            <TableHead className="hidden md:table-cell text-right">
              Date
            </TableHead>
            <TableHead > View</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredPosts.map((post) => (
            <TableRow key={post.id}>
              <TableCell>{post.title}</TableCell>
              <TableCell className="hidden md:table-cell">
                {post.author}
              </TableCell>
              <TableCell className="text-right hidden md:table-cell">
                {post.date}
              </TableCell>
              <TableCell>
                <Link href={`/posts/edit/${post.id}`}>
                <Button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-xs">Edit</Button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default PostTable;
