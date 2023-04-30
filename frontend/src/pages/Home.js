import styled from "styled-components";
import Header from "../components/Header";
import CourseCard from "../components/CourseCard";
import FooterHome from "../components/FooterHome";

import useQuickOut from "../hook/useQuickOut";

export default function Home() {
    useQuickOut();

    return (
        <HomeContainer>
            <Header />
            <CoursesContainer>
                <CourseCard cor={"#cfb46f"} descricao={"é isso"} inCart={true} />
                <CourseCard cor={"#2eb73c"} descricao={"é isso"} inCart={false} />
                <CourseCard cor={"#cf6f9d"} descricao={"é isso"} inCart={true} />
                <CourseCard cor={"#706fcf"} descricao={"é isso"} inCart={false} />
                <CourseCard cor={"#cfb46f"} descricao={"é isso"} inCart={false} />

            </CoursesContainer>
            <FooterHome />
        </HomeContainer>

    )
}



const CoursesContainer = styled.div`
padding-top: 105px;
margin-bottom: 105px;
display: flex;
flex-direction: column;
align-items: center;
gap: 14px;
`

const HomeContainer = styled.div`
display: flex;
flex-direction: column;
height: 100vh;
overflow-y: scroll;
background-color: #c3cdc1;

`