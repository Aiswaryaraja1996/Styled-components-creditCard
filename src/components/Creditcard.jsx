import styled from "styled-components";
import CreditCardIcon from "@mui/icons-material/CreditCard";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1rem;
  margin-top: 1rem;
  background-color: #f6425b;
  border-radius: 1rem;
  color: white;
  > * {
    &:nth-child(4) {
        width:60%;
      display: flex;
      justify-content:space-between;
    }
  }
`;

const Label = styled.div`
  display: flex;
  flex-direction: column;
  
  align-items:center;
`;

export default function Creditcard(props) {
  //   var pinNumber = props.data.pin.match(/.{1,4}/g).join(" ");
  return (
    <Card>
      <h1 style={{ textAlign: "right" }}>VISA</h1>
      <CreditCardIcon style={{ color: "white", fontSize: "36px" }} />
      <p>{props.data.pin}</p>
      <div>
        <Label>
          <label>CARD HOLDER</label>
          <p>{props.data.name}</p>
        </Label>
        <Label>
          <label>EXPIRES</label>
          <p>
            {props.data.month}/{props.data.year}
          </p>
        </Label>
        <Label>
          <label>CVC</label>
          <p>{props.data.cvc}</p>
        </Label>
      </div>
    </Card>
  );
}
