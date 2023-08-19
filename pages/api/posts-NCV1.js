import { getAllFilesMetadataNCV1 } from "@/lib/nobody-cares-vol-1-mdx"

export default function handler(req, res) {

  const postData = getAllFilesMetadataNCV1()
  //console.log(postData)

  res.status(200).json(postData)
}