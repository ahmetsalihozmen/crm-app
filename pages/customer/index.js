import { Container, Row, Col, Button } from "reactstrap";
import Link from "next/link";
import { getCookie } from "cookies-next";



const Customer = () => {
    console.log(getCookie('token'))
    return (
        <Container className='cont ' fluid>
            <Row className=''>
                <div className='d-flex justify-content-center'>
                    <Link href='./customer/ticket'>
                        <Button className='but' outline> Yeni Ticket</Button>
                    </Link>
                </div>
            </Row>
            <Row className=''>
                <div className='d-flex justify-content-center'>
                    <Link href='./customer/cevaplanmis'>
                        <Button className='but' outline>
                            Cevaplandırılmış Sorular
                        </Button>
                    </Link>
                </div>
            </Row>

        </Container>
    )
}

export default Customer;