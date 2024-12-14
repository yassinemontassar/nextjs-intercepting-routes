import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Post } from '@/types/posts'
import Image from 'next/image'
import Link from 'next/link'

interface PostGridProps {
  posts: Post[]
}

export function PostGrid({ posts }: PostGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {posts.map((post) => (
      <Link key={post.id} href={`/post/${post.id}`} className="block h-full">
        <Card className="flex flex-col h-full hover:shadow-lg transition-shadow">
          <CardHeader className="p-0">
            <div className="aspect-video relative overflow-hidden rounded-t-lg">
              <Image
                src={post.imageUrl}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
          </CardHeader>
          <CardContent className="flex-grow p-4">
            <CardTitle className="mb-2 line-clamp-1">{post.title}</CardTitle>
            <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
          </CardContent>
          <CardFooter className="p-4">
            <p className="text-sm text-muted-foreground">Read more →</p>
          </CardFooter>
        </Card>
      </Link>
    ))}
  </div>
  )
}

