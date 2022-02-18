const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors());

const PHOTOS = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1643048563402-668bb8ed2307?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
    tags: [],
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1643123645046-05f9800654b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
    tags: [],
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1643725189988-53fe30b00e81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
    tags: [],
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1643048563402-668bb8ed2307?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
    tags: [],
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1643048563402-668bb8ed2307?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
    tags: [],
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1643123645046-05f9800654b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
    tags: [],
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1643725189988-53fe30b00e81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
    tags: [],
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1643048563402-668bb8ed2307?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
    tags: [],
  },
];

function paginate(data, perPage, page) {
  return data.slice((page - 1) * perPage, page * perPage);
}

app.get("/photos", (req, res) => {
  const page = req.query.page || 1;

  const perPage = req.query.perPage || 12;

  res.json({
    data: paginate(PHOTOS, perPage, page),
  });
});

app.post("/photos", (req, res) => {
  // TODO validate data
  //  url string, required, url
  // tags required array of string, max: 255

  const url = req.body.url;
  const tags = req.body.tags;

  PHOTOS.push({
    url,
    tags,
  });

  res.json({
    data: PHOTOS,
  });
});

app.listen(3000, () => {
  console.log(`Example app listening on port ${3000}`);
});