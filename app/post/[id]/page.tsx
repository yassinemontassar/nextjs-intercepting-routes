import { Button } from '@/components/ui/button';
import { Data } from '@/data';
import { Post } from '@/types/posts';
import Image from 'next/image';
import Link from 'next/link';

async function getPost(id: string): Promise<Post | undefined> {
  return Data.find(post => post.id === parseInt(id))
}
export default async function PostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const post = await getPost(id)

  if (!post) {
    return (
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
        <Button asChild>
          <Link href="/">← Back to Posts</Link>
        </Button>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 py-8">
    <Button asChild  className="mb-8">
      <Link href="/">← Back to Posts</Link>
    </Button>
    <article className="max-w-2xl mx-auto space-y-6">
      <div className="aspect-video relative overflow-hidden rounded-lg">
        <Image
          src={post.imageUrl}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
      </div>
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="text-lg text-muted-foreground">{post.excerpt}</p>
    </article>
  </main>
  );
}

