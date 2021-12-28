import { Button, Container, Input, Row, Form, FormGroup } from "reactstrap"
import { useState } from "react";
import { getCookie } from "cookies-next";




const Tickets = () => {

    const [text, setText] = useState("");
    const [category, setCategory] = useState("Teknoloji");

    const saveTicket = (text, category, customerid) => {
        console.log(text, category, customerid);
    }
    
    const newTicket = async () => {
        const response = await fetch("http://localhost:3000/api/newticket", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                text,
                category,
                customerid: getCookie("token"),
            }),
        });
        const json = await response.json();
        console.log(json);

    }


    console.log(getCookie('token'))

    return (
        <Container>
            <Row>
                <h1>Yeni Ticket Oluştur</h1>
            </Row>
            <Form>
                <FormGroup>
            <Row>
                <Input
                    onChange={(event) => setCategory(event.target.value)}
                    className="mb-3"
                    type="select"
                >
                    <option>
                        Teknoloji
                    </option>
                    <option>
                        Muhasebe
                    </option>
                    <option>
                        Destek
                    </option>
                    <option>
                        Pazarlama
                    </option>
                </Input>
            </Row>
            </FormGroup>
            <FormGroup>
            <Row>
                <Input onChange={(event) => setText(event.target.value)} className="tickettext" height={500} type="textarea" placeholder="Sorunuz" />
            </Row>
            </FormGroup>
            <Row className="justify-content-end">
                <Button className="mt-4 w-25 " type="submit" onClick={newTicket} color="danger" >Gönder</Button>
            </Row>
            </Form>
        </Container>
    )
}

export default Tickets;
