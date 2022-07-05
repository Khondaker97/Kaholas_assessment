import React, { useEffect, useState } from "react";
//icons
import {
  AiOutlineQuestionCircle,
  AiOutlineHeart,
  AiOutlineRight,
} from "react-icons/ai";
import { RiShareForwardLine } from "react-icons/ri";
//css
import styled from "styled-components";
//components
import Rating from "../Components/Rating";

const Home = () => {
  const [images, setImages] = useState("");

  useEffect(() => {
    const images = async () => {
      const fetchData = await fetch("./images.json");
      const res = await fetchData.json();
      const [data] = res;
      setImages(data);
    };
    images();
  }, []);
  return (
    <HomeContainer>
      <Header>
        <Heading>
          Summer Art Camp! 5 days of Artists and Painting Monet, <br />
          Van Gogh, Matisse, {"&"} More
        </Heading>
        <Subtilte>
          Multi-Day Course
          <AiOutlineQuestionCircle />
        </Subtilte>
      </Header>
      <MainContent>
        <Details>
          <About>
            In this 5 day class we will explore artists Monet, Matisse, Van
            Gogh, among others and then recreate paintings using crayon and
            watercolor. Students will have fun learning about the artists &
            creating their own art inspired by their work.
          </About>
          <Instructor>
            <InstructorImage>
              <img
                src={images?.profile}
                alt="instructor"
                style={{
                  width: "100%",
                  left: "20px",
                  top: "10px",
                  position: "absolute",
                }}
              />
            </InstructorImage>
            <InstructorName>Kimberly R Moseler</InstructorName>
          </Instructor>
          <RatingContainer>
            <Rating>467 total reviews for this teacher</Rating>
            <Rating>5 reviews for this class</Rating>
          </RatingContainer>
          <Students>Completed by 21 learners</Students>
          <SeeMore>
            <ScheduleBtn>
              See Class Schedule
              <AiOutlineRight />
            </ScheduleBtn>
            <ForSave>
              <AiOutlineHeart />
              <Save>Save</Save>
            </ForSave>
            <ForShare>
              <RiShareForwardLine />
              <Share>Share</Share>
            </ForShare>
          </SeeMore>
        </Details>
        <ImgaeContainer>
          <LeftImage>
            <img
              src={images?.image1}
              alt=""
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </LeftImage>
          <RightImages>
            <RTop>
              <img
                src={images?.image2}
                alt=""
                style={{ height: "100%", width: "100%" }}
              />
            </RTop>
            <RBottom>
              <img
                src={images?.image3}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </RBottom>
          </RightImages>
        </ImgaeContainer>
      </MainContent>
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.section`
  padding: 15px 40px 15px 20px;
  width: 100vw;
  height: 100vh;
`;
const Header = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
`;

const Heading = styled.h1`
  font-size: 3rem;
  line-height: 3.5rem;
  color: #000;
  font-weight: 600;
`;
const Subtilte = styled.h5`
  color: gray;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.2rem;
  font-weight: 500;
`;
const MainContent = styled.div`
  display: flex;
  gap: 1.4rem;
`;
const Details = styled.div`
  flex: 2.5;
`;

const About = styled.p`
  line-height: 1.8rem;
  font-size: 1.2rem;
`;
const Instructor = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0px;
  gap: 0.5rem;
`;
const InstructorName = styled.h4`
  font-size: 1.2rem;
  color: rgb(93, 0, 220);
  font-weight: 400;
`;
const InstructorImage = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  object-fit: cover;
  background-color: transparent;
  position: relative;
`;
const RatingContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;
const Students = styled.p``;
const SeeMore = styled.div`
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
  gap: 2rem;
`;
const ScheduleBtn = styled.button`
  padding: 10px 30px;
  border: none;
  border-radius: 50px;
  font-size: 1.2rem;
  font-weight: 600;
  background-color: rgb(93, 0, 220);
  color: #fff;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const ForSave = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 1.2rem;
  color: rgb(93, 0, 220);
`;
const ForShare = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 1.2rem;
  color: rgb(93, 0, 220);
`;
const Save = styled.p``;
const Share = styled.p``;
const ImgaeContainer = styled.div`
  flex: 3.5;
  height: 400px;
  display: flex;
  gap: 10px;
`;
const LeftImage = styled.div`
  flex: 2;
  width: 100%;
  min-height: 100%;
  overflow: hidden;
  object-fit: cover;
  border-top-left-radius: 15px;
`;
const RightImages = styled.div`
  flex: 1.5;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const RTop = styled.div`
  flex: 1;
  width: 100%;
  object-fit: cover;
  overflow: hidden;
  border-top-right-radius: 15px;
`;
const RBottom = styled.div`
  flex: 1;
  width: 100%;
  object-fit: cover;
  overflow: hidden;
`;
