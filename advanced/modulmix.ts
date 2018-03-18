class Album {
  label: Album.AlbumLabel = new Album.AlbumLabel();
}
module Album {
  export class AlbumLabel { 
    name: string 
  }
}

let a: Album = new Album();
a.label.name = "Crazy Horse";

console.log(a.label.name);
