import { PostGrid } from '@/components/post-grid'
import { Data } from '@/data'



export default function Home() {
  return (
    <main className="container mx-auto p-9 ">
      <h1 className="text-3xl text-center  font-bold mb-6">Next JS Intercepting Routes</h1>
      <PostGrid posts={Data} />
    </main>
  )
}

