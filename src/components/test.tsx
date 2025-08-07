import { prisma } from "@/lib/db";

const TestPage = async () => {
  const posts = await prisma.post.findMany();
  return (
    <div className="min-h-screen flex items-center justify-center font-code">
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {post.title} - {post.content} {post.published ? "(Published)" : "(Draft)"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TestPage;
