import { Button, Image, Paper, SimpleGrid } from "@mantine/core";
import React from "react";
import { MdRssFeed } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai"
import { BiCoffee } from "react-icons/bi"
import MangaCard from "../components/MangaCard";

function Home() {
  return (
    <div>
      <Paper radius={0} style={{ height: 60, background: "#fff" }}></Paper>
      <Image
        src="https://free4kwallpapers.com/uploads/originals/2020/11/15/sunset-vector-wallpaper.jpg"
        height={500}
      />
      <SimpleGrid cols={3} spacing={0}>
        <Button leftIcon={<MdRssFeed size={20} />} variant="default" radius={0} size="lg">
          FEED
        </Button>
        <Button leftIcon={<AiOutlineSearch size={20} />} variant="default" radius={0} size="lg">
          SEARCH
        </Button>
        <Button leftIcon={<BiCoffee size={20} />} variant="default" radius={0} size="lg">
          NEWS
        </Button>
      </SimpleGrid>
      <SimpleGrid cols={5} style={{padding: 15}} >
        <MangaCard />
        <MangaCard />
        <MangaCard />
        <MangaCard />
        <MangaCard />
        <MangaCard />
        <MangaCard />
        <MangaCard />
        <MangaCard />
        <MangaCard />
      </SimpleGrid>
    </div>
  );
}

export default Home;
