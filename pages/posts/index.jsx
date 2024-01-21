import PageLayout from "@/components/PageLayout";
import {  PostItem } from "@/components/PostItem";
import { getAllFilesMetadata } from "@/lib/mdx";

export default function AllPost({ posts }){
  
  const selectedPosts = posts.sort((a, b) => parseInt(a.id) > parseInt(b.id) ? -1 : 1);

  return(
    <PageLayout>
      <main className="mt-[100px] w-screen flex flex-col items-center p-3 md:p-6">
        <section className="w-full max-w-screen-xl">
          <h1 className="text-4xl mb-7">Todos Los Post</h1>
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {selectedPosts.map((post, index) => (
                <PostItem key={post.title} post={post} index={ index }/>
              ))}
          </section>
        </section>
      </main>
    </PageLayout>
  )
}

export async function getStaticProps() {
  const posts = await getAllFilesMetadata();
  //console.log(posts)

  return {
    props: {
      posts,
    },
  };
}
