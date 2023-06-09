import { IoCartSharp } from "react-icons/io5"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

export default function Cart() {
    const navigate = useNavigate()
    return (
        <AddCurso onClick={() => navigate("/cart")}>
            <IoCartSharp />
        </AddCurso>
    )
}

const AddCurso = styled.button`
width: 73px;
height: 73px;
background-color: #92bd99;
border-radius: 50%;
box-shadow: 0px 4px 4px rgba(0,0,0,0.18);
color: white;
font-size: 36px;
display: flex;
justify-content: center;
align-items: center;
margin-right: 11%;
`