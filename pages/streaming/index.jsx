import PageLayout from "@/components/PageLayout";
import { streamingVideos } from "@/lib/streamingVideos";


const videos = streamingVideos.sort((a, b) => parseInt(a.id) > parseInt(b.id) ? -1 : 1);
const firstVideo = videos[0]
// console.log(firstVideo.url)

export default function StreamingPage(){
  
  return(
    <PageLayout title="Streaming">
      <section className="bg-red-500 w-full mt-[90px] flex flex-col items-center">
        <section className="bg-green-200 w-4/5">
          <h1>Ultimo video</h1>

        </section>
      </section>
    </PageLayout>
  )
}