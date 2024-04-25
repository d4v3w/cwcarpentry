import moment from "moment";
import "server-only";

export async function getMyImages() {
  const images = [
    {
      id: 1,
      url: "https://utfs.io/f/f0176510-5ec5-46ae-9672-b34a282d3012-upvscp.jpg",
      name: "test",
      desc: "hello",
      date: Date.now().toLocaleString(),
    },
    {
      id: 2,
      url: "https://utfs.io/f/f0176510-5ec5-46ae-9672-b34a282d3012-upvscp.jpg",
      name: "test",
      desc: "hello",
      date: Date.now().toLocaleString(),
    },
    {
      id: 3,
      url: "https://utfs.io/f/f0176510-5ec5-46ae-9672-b34a282d3012-upvscp.jpg",
      name: "test",
      desc: "hello",
      date: Date.now().toLocaleString(),
    },
    {
      id: 4,
      url: "https://utfs.io/f/f0176510-5ec5-46ae-9672-b34a282d3012-upvscp.jpg",
      name: "test",
      desc: "hello",
      date: Date.now().toLocaleString(),
    },
    {
      id: 5,
      url: "https://utfs.io/f/f0176510-5ec5-46ae-9672-b34a282d3012-upvscp.jpg",
      name: "test",
      desc: "hello",
      date: Date.now().toLocaleString(),
    },
  ];

  return images;
}

export async function getImage(id: number) {
  const image = {
    id: id,
    url: "https://utfs.io/f/f0176510-5ec5-46ae-9672-b34a282d3012-upvscp.jpg",
    name: "Ut enim deserunt duis occaecat dolor.",
    desc: "Culpa fugiat non deserunt dolor id in minim. Adipisicing culpa nisi ipsum commodo exercitation enim do enim non proident aute.Lorem commodo nostrud culpa Lorem et elit quis esse reprehenderit.Cillum reprehenderit officia sint sint adipisicing ut velit mollit qui duis aliqua irure pariatur velit.",
    date: moment().format("DD MMMM YYYY"),
  };
  return image;
}
