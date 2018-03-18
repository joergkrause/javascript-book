async function getZipFile(name: string, content: any): Promise<{ name: string, content: any}> {
  const zip = await import('./utils/create-zip-file');
  const zipContents = await zip.zipUtil.getContentAsBlob(name, content);
  return zipContents;
}

let f = getZipFile("Test", "SomeWeirdText");
f.then(file => console.log(file.content.length));
