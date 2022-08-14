import { Button, Image, Paper, SimpleGrid, Text } from "@mantine/core";
import React from "react";
import { MdRssFeed } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { BiCoffee } from "react-icons/bi";
import MangaCard from "../components/MangaCard";

const data = [
  {
    id: 1,
    image:
      "https://i1.wp.com/halcyonrealms.com/blogpics/slamdunknew09.jpg?resize=500%2C780",
    price: 50.55,
    data: {
      title: "Slam Dunk",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta eligendi voluptatum culpa quidem libero tenetur odit. Culpa laboriosam nostrum, ex asperiores provident et est ad, officia eveniet illo possimus inventore!",
    },
  },
  {
    id: 2,
    image:
      "https://i.pinimg.com/736x/ce/e6/33/cee6336d5fe6653f98e8e035d23651f1.jpg",
    price: 40.55,
    data: {
      title: "Tokyo Revengers",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta eligendi voluptatum culpa quidem libero tenetur odit. Culpa laboriosam nostrum, ex asperiores provident et est ad, officia eveniet illo possimus inventore!",
    },
  },
  {
    id: 1,
    image:
      "https://i1.wp.com/halcyonrealms.com/blogpics/slamdunknew09.jpg?resize=500%2C780",
    price: 50.55,
    data: {
      title: "Slam Dunk",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta eligendi voluptatum culpa quidem libero tenetur odit. Culpa laboriosam nostrum, ex asperiores provident et est ad, officia eveniet illo possimus inventore!",
    },
  },
  {
    id: 3,
    image:
      "https://dthezntil550i.cloudfront.net/nl/latest/nl1601270837356010000280423/1280_960/5f26b69c-b748-4e71-a2f5-d1bd6a3dd7f2.png",
    price: 25.0,
    data: {
      title: "Blade Runner",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta eligendi voluptatum culpa quidem libero tenetur odit. Culpa laboriosam nostrum, ex asperiores provident et est ad, officia eveniet illo possimus inventore!",
    },
  },
  {
    id: 4,
    image:
      "https://static.wikia.nocookie.net/dr-stone/images/f/fd/US_Volume_9.png/revision/latest?cb=20190909062035",
    price: 40.41,
    data: {
      title: "Dr Stone",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta eligendi voluptatum culpa quidem libero tenetur odit. Culpa laboriosam nostrum, ex asperiores provident et est ad, officia eveniet illo possimus inventore!",
    },
  },
  {
    id: 5,
    image:
      "https://japantruly.com/wp-content/uploads/2022/03/Naruto-Vol-72-Cover.jpg",
    price: 35.0,
    data: {
      title: "Naruto",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta eligendi voluptatum culpa quidem libero tenetur odit. Culpa laboriosam nostrum, ex asperiores provident et est ad, officia eveniet illo possimus inventore!",
    },
  },
  {
    id: 6,
    image:
      "https://external-preview.redd.it/B3OvdHblwX-tUe_fj8NcUDmAwhJH4oz8y8pygryp_K4.jpg?width=640&crop=smart&auto=webp&s=133c109d49b8075707d14c52e8ce3c843b42850e",
    price: 65.78,
    data: {
      title: "Bleach",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta eligendi voluptatum culpa quidem libero tenetur odit. Culpa laboriosam nostrum, ex asperiores provident et est ad, officia eveniet illo possimus inventore!",
    },
  },
];

function Home() {
  return (
    <div>
      <Paper radius={0} style={{ height: 60, background: "#fff" }}></Paper>
      <Image
        src="https://free4kwallpapers.com/uploads/originals/2020/11/15/sunset-vector-wallpaper.jpg"
        height={500}
      />
      <SimpleGrid cols={3} spacing={0}>
        <Button
          leftIcon={<MdRssFeed size={20} />}
          variant="default"
          radius={0}
          size="lg"
        >
          FEED
        </Button>
        <Button
          leftIcon={<AiOutlineSearch size={20} />}
          variant="default"
          radius={0}
          size="lg"
        >
          SEARCH
        </Button>
        <Button
          leftIcon={<BiCoffee size={20} />}
          variant="default"
          radius={0}
          size="lg"
        >
          NEWS
        </Button>
      </SimpleGrid>
      <div style={{ padding: 15 }}>
        <Text size={36} weight={700} className='card-potision'>
          Adventure
        </Text>
        <SimpleGrid cols={5}>
          {data.map((e, i) => (
            <MangaCard manga={e} key={i} />
          ))}
        </SimpleGrid>
      </div>

      <div style={{ padding: 15 }}>
        <Text size={36} weight={700} className='card-potision'>
          Action
        </Text>
        <SimpleGrid cols={5}>
          {data.map((e, i) => (
            <MangaCard manga={e} key={i} />
          ))}
        </SimpleGrid>
      </div>

      <div style={{ padding: 15 }}>
        <Text size={36} weight={700} className='card-potision'>
          Comedy
        </Text>
        <SimpleGrid cols={5}>
          {data.map((e, i) => (
            <MangaCard manga={e} key={i} />
          ))}
        </SimpleGrid>
      </div>
    </div>
  );
}

export default Home;
