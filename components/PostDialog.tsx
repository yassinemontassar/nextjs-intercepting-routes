'use client'

import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
import { Post } from '@/types/posts'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

interface PostDialogProps {
  post: Post
}

export default function PostDialog({ post }: PostDialogProps) {
  const router = useRouter()

  return (
    <Dialog defaultOpen onOpenChange={() => router.back()}>
    <DialogContent className="rounded-2xl sm:max-w-[425px] md:max-w-[600px] lg:max-w-[700px]">
      <DialogTitle className="text-2xl font-bold mb-4">{post.title}</DialogTitle>
      <div className="space-y-4">
        <div className="aspect-video relative overflow-hidden rounded-lg">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>
        <p className="text-muted-foreground">{post.excerpt}</p>
      </div>
    </DialogContent>
  </Dialog>
  )
}

