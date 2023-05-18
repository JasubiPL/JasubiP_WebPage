// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getAllFilesMetadata } from "@/lib/mdx"

export default function handler(req, res) {

  const postData = getAllFilesMetadata()
  console.log(postData)

  res.status(200).json(postData)
}
