import { Image, Text } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import { data } from "../../data/mangas";

export const MangaCardDetail = () => {
  const { id } = useParams();
  const [manga, setManga] = useState();

  useEffect(() => {
    const res = data.filter((e) => e.id === parseInt(id));
    if (res.length !== 0) {
      setManga(res[0]);
    }
  }, [id]);

  return (
    <div>
      <Header />
      {manga && (
        <>
          <div
            style={{
              maxWidth: 1000,
              margin: "auto",
              paddingTop: 30,
              paddingBottom: 30,
            }}
          >
            <div
              style={{
                marginBottom: 30,
                position: "relative",
              }}
            >
              <Image
                src={manga.cover}
                height={400}
                alt="Norway"
                radius={"md"}
              />
              <Image
                src={manga.image}
                height={150}
                width={150}
                alt="Norway"
                radius={"md"}
                style={{
                  position: "absolute",
                  bottom: 0,
                  marginLeft: 30,
                  marginTop: 110,
                }}
              />
              <div
                style={{
                  marginLeft: 200,
                  marginTop: 10,
                }}
              >
                <Text weight={700} size="lg">
                  {manga.data.title}
                </Text>
                <Text>112 Chapters . 30 Volumes</Text>
              </div>
            </div>
            <div>
              <Text weight={700} size="lg">
                Summary
              </Text>
              <Text>{manga.data.desc}</Text>
            </div>
            <div
              style={{
                marginTop: 30,
              }}
            >
              <Text weight={700} size="lg">
                Review
              </Text>


              {manga.data.reviews.map((e, i) => (
                <div style={{
                  marginBottom: 15,
                  marginTop: 15
                }} key={i}>
                  <Text lineClamp={5}>{e.desc}</Text>
                  <Text mt={10}>- {e.name}</Text>
                </div>
              ))}

            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MangaCardDetail;
