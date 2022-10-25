import { Button, Image, Paper, SimpleGrid, Text } from "@mantine/core";
import { MdRssFeed } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { BiCoffee } from "react-icons/bi";
import MangaCard from "../components/MangaCard";

function Header() {
  return (
    <>
      <Paper radius={0} style={{ background: "#fff" }}>
        <Text size="lg" align="center" py={15} transform="uppercase">
          Comic
        </Text>
      </Paper>
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
    </>
  );
}

export default Header;
