import React from "react";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { Box, chakra, Text } from "@chakra-ui/react";

const FeaturedPostCard = ({ post }) => {
  return (
    <>
      <Box pos="relative" h="72" mr={["", "", "10"]}>
        <Box
          pos="absolute"
          rounded="lg"
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize="cover"
          shadow="md"
          display="inline-block"
          w="full"
          h="72"
          style={{ backgroundImage: `url('${post.featuredImage.url}')` }}
        />
        <Box
          pos="absolute"
          rounded="lg"
          bgPosition="center"
          bgGradient="-to-b opacity-50 from-gray-400 via-gray-700 to-black"
          w="full"
          h="72"
        />
        <Box
          display="flex"
          flexDirection="column"
          rounded="lg"
          p="4"
          alignItems="center"
          justifyContent="center"
          pos="absolute"
          w="full"
          h="full"
        >
          <Text
            color="white"
            mb="4"
            textShadow="2"
            fontWeight="semibold"
            fontSize="xs"
          >
            {moment(post.createdAt).format("MMM DD, YYYY")}
          </Text>
          <Text
            color="white"
            mb="4"
            textShadow="2"
            fontWeight="semibold"
            fontSize="2xl"
            textAlign="center"
          >
            {post.title}
          </Text>
          <Box
            display="flex"
            alignItems="center"
            pos="absolute"
            bottom="5"
            w="full"
            justifyContent="center"
          >
            <Image
              unoptimized
              alt={post.author.name}
              height="30px"
              width="30px"
              className="rounded-full align-middle drop-shadow-lg"
              src={post.author.image.url}
            />
            <Text
              display="inline"
              color="white"
              verticalAlign="middle"
              textShadow="1"
              ml="2"
              fontWeight="medium"
            >
              {post.author.name}
            </Text>
          </Box>
        </Box>
        <Link href={`/post/${post.slug}`} passHref>
          <chakra.span cursor="pointer" pos="absolute" w="full" h="full" />
        </Link>
      </Box>
    </>
  );
};

export default FeaturedPostCard;
