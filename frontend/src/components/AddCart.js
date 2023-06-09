import axios from "axios"
import styled from "styled-components"
import useAppContext from "../hook/useAppContext";

export default function AddCart(props) {

    const { token } = useAppContext();
    const config = {
        headers: {
            authorization: `${token}`,
        }
    }

    function addCart() {
        axios.post(`${process.env.REACT_APP_API_URL}/cart`,
            {
                course_name: props.title,
                course_cost: props.price
            }, config)
            .then(res => {
                alert("Item adicionado ao carrinho")
                props.setAtualiza(!props.atualiza)

            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <AddCartContainer onClick={() => addCart()}>
            Adicionar ao carrinho
        </AddCartContainer>
    )
}

const AddCartContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: #2de029;
width: 180px;
height: 27px;
border-radius: 11px;
font-size: 16px;
color: white;
box-shadow: 0px 4px 4px rgba(0,0,0,0.12);
`
