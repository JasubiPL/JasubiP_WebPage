import fs from 'fs/promises'
import path from 'path'


export default async function handlerPost(req, res){
  const data = req.body
  console.log(data)

  //build date
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  const locale = 'es-ES';
  const date = new Date().toLocaleDateString(locale, options);
  
  const parts = date.split(' ');
  const formattedDate = `${parts[0]}-${parts[1].charAt(0).toUpperCase() + parts[1].slice(1)}-${parts[2]}`;
  //console.log(formattedDate); // Ejemplo: "11-Mayo-2023"

  //build Path
  const savePath = path.join(process.cwd(), 'posts')
  //console.log(savePath)
  
  //Build File Name
  const titleLowerCase = data.title.toLowerCase()
  const fileName = titleLowerCase.replace(/ /g, '-') 
  //console.log(fileName)

  //build mdx frmat
  const content = `---
id: '14'
title: '${data.title}'
date: '${formattedDate}'
description: '${data.description}'
keywords: '${data.keywords}'
poster: 'https://server-una-opinion-mas-production.up.railway.app/img/${data.poster}'
wallpaper: 'https://server-una-opinion-mas-production.up.railway.app/img/${data.wallpaper}'
alt: '${data.title}'
topic: '${data.topic}'
icon: '${data.topic}'
author: '${data.author}'
---

# ${data.title}

${data.content}
`

  fs.writeFile(`${savePath}/${fileName}.mdx`, content, (err) =>{
    if (err) {
      console.log(err)
      res.status(500).send('Error al guardar el archivo.')
    } else {
      console.log('Archivo guardado exitosamente.')
      res.status(200).send('Archivo guardado exitosamente.')
    }
  })
}