import React, { useState, useEffect } from "react";
import { FeaturedPostCard } from "../Components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { getFeaturedPosts } from "../Services";
import { Box, chakra, Stack } from "@chakra-ui/react";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 768, min: 640 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};

const FeaturedPosts = () => {
  const [featuredPosts, setFeaturedPosts] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    getFeaturedPosts().then((result) => {
      setFeaturedPosts(result);
      setDataLoaded(true);
    });
  }, []);

  const customLeftArrow = (
    <Box
      pos="absolute"
      _className="arrow-btn"
      left="0"
      textAlign="center"
      py="3"
      cursor="pointer"
      bg="pink.600"
      rounded="full"
    >
      <chakra.svg
        xmlns="http://www.w3.org/2000/svg"
        h="6"
        w="6"
        color="white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10 19l-7-7m0 0l7-7m-7 7h18"
        />
      </chakra.svg>
    </Box>
  );

  const customRightArrow = (
    <Box
      pos="absolute"
      _className="arrow-btn"
      right="0"
      textAlign="center"
      py="3"
      cursor="pointer"
      bg="pink.600"
      rounded="full"
    >
      <chakra.svg
        xmlns="http://www.w3.org/2000/svg"
        h="6"
        w="6"
        color="white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M14 5l7 7m0 0l-7 7m7-7H3"
        />
      </chakra.svg>
    </Box>
  );

  return (
    <Box mb="8"  >
      <Carousel
        infinite
        customLeftArrow={customLeftArrow}
        customRightArrow={customRightArrow}
        responsive={responsive}
        itemClass="px-4 "
      >
        {dataLoaded &&
          featuredPosts.map((post, index) => (
            <FeaturedPostCard key={index} post={post} />
          ))}
      </Carousel>
    </Box>
  );
};

export default FeaturedPosts;