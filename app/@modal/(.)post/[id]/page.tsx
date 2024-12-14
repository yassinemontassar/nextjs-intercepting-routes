import PostDialog from '@/components/PostDialog'
import { Data } from '@/data'
import { Post } from '@/types/posts'

async function getPost(id: string): Promise<Post | undefined> {
  return Data.find(post => post.id === parseInt(id))
}

export default async function PostModal({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const post = await getPost(id)
  
  if (!post) {
    return <div>Post not found</div>
  }

  return <PostDialog post={post} />
}

