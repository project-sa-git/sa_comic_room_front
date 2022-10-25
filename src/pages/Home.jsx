import { SimpleGrid, Text } from "@mantine/core";
import MangaCard from "../components/MangaCard";
import Header from "../components/Header";
import { data } from "../data/mangas";

function Home() {
  return (
    <div>
      <Header />
      <div style={{ padding: 15 }}>
        <Text size={36} weight={700} className="card-potision">
          Adventure
        </Text>
        <SimpleGrid cols={5}>
          {data.map((e, i) => (
            <MangaCard manga={e} key={i} />
          ))}
        </SimpleGrid>
      </div>

      <div style={{ padding: 15 }}>
        <Text size={36} weight={700} className="card-potision">
          Action
        </Text>
        <SimpleGrid cols={5}>
          {data.map((e, i) => (
            <MangaCard manga={e} key={i} />
          ))}
        </SimpleGrid>
      </div>

      <div style={{ padding: 15 }}>
        <Text size={36} weight={700} className="card-potision">
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
