import Link from 'next/link'
import { Form, FormGroup, Label, Input, Button, Container, Row, Col } from 'reactstrap'

export default function Admin() {
  return (
    <Container className='cont ' fluid>
      <Row className=''>
        <div className='d-flex justify-content-center'>
          <Link href='./adm/cevaplanmis'>
            <Button className='but' outline> Cevaplanmış Sorular</Button>
          </Link>
        </div>
      </Row>
      <Row className=''>
        <div className='d-flex justify-content-center'>
          <Link href='./adm/cevaplanmamis'>
            <Button className='but' outline>
              Cevaplandırılmamış Sorular
            </Button>
          </Link>
        </div>
      </Row>
      <Row className=''>
        <div className='d-flex justify-content-center'>
          <Link href='./adm/analiz'>
            <Button className='but' outline>
              Analiz
            </Button>
          </Link>
        </div>
      </Row>
    </Container>
  )
}
