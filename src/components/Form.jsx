import * as React from "react";
import styled from "styled-components";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import Creditcard from "./Creditcard";
import { useState } from "react";

const Label = styled.label`
  font-size: 12px;
  margin-top: 2rem;
`;

const FormInput = styled.form`
  display: flex;
  flex-direction: column;
  width: 30%;
  margin: auto;
`;

const Input = styled.input`
  outline: none;

  border-style: none;
  font-size: 16px;
  display: inline-block;
`;

const LabelHolder = styled.div`
  display: flex;
  margin-top: 1rem;
  border-bottom: 1px solid #f6425b;
  align-items: center;
  padding-bottom: 0.5rem;
`;

const NumberHolder = styled.div`
  width: 30%;
`;

const Button = styled.button`
  text-direction: none;
  outline: none;
  border-style: none;
  background-color: #f6425b;
  border-radius: 0.4rem;
  color: white;
  padding: 1rem 0.5rem;
  width: 50%;
  cursor: pointer;
  font-size: 18px;
`;

const Flex = styled.div`
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Form() {
  const [cardDtls, setCardDtls] = useState({
    name: "",
    pin: "",
    month: "",
    year: "",
    cvc: "",
  });
  return (
    <FormInput>
      <h2>Payment Details</h2>
      <Label>CARDHOLDER NAME</Label>
      <LabelHolder>
        <AccountCircleIcon sx={{ color: "#F6425B" }} />
        <Input
          type="text"
          onChange={(e) => setCardDtls({ ...cardDtls, name: e.target.value })}
        ></Input>
      </LabelHolder>

      <Label>CARD NUMBER</Label>
      <LabelHolder>
        <CreditCardIcon sx={{ color: "#F6425B" }} />
        <Input
          type="text"
          onChange={(e) => setCardDtls({ ...cardDtls, pin: e.target.value })}
        ></Input>
      </LabelHolder>

      <div
        style={{
          display: "flex",
          gap: "0.5rem",
          justifyContent: "space-between",
          marginTop: "2rem",
        }}
      >
        <NumberHolder>
          <Label>EXPIRY MONTH</Label>
          <LabelHolder>
            <CalendarTodayIcon sx={{ color: "#F6425B" }} />
            <Input
              type="text"
              onChange={(e) =>
                setCardDtls({ ...cardDtls, month: e.target.value })
              }
            ></Input>
          </LabelHolder>
        </NumberHolder>
        <NumberHolder>
          <Label>EXPIRY YEAR</Label>
          <LabelHolder>
            <CalendarTodayIcon sx={{ color: "#F6425B" }} />
            <Input
              type="text"
              onChange={(e) =>
                setCardDtls({ ...cardDtls, year: e.target.value })
              }
            ></Input>
          </LabelHolder>
        </NumberHolder>
        <NumberHolder>
          <Label>CVC</Label>
          <LabelHolder>
            <LockOpenIcon sx={{ color: "#F6425B" }} />
            <Input
              type="text"
              onChange={(e) =>
                setCardDtls({ ...cardDtls, cvc: e.target.value })
              }
            ></Input>
          </LabelHolder>
        </NumberHolder>
      </div>

      <Flex>
        <h3>Payment Amount:</h3>
        <h2 style={{ marginLeft: "1rem", color: "#F6425B" }}>12 300</h2>
      </Flex>

      <Flex>
        <Button>PAY</Button>
      </Flex>

      <Creditcard data={cardDtls} />
    </FormInput>
  );
}
