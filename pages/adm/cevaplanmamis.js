import { Table, Button, Modal, ModalBody, ModalFooter, ModalHeader, Input } from 'reactstrap'
import { useState } from 'react';
import { db } from '../api/hello';




export default function Home({tickets}) {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const [ticketid, setTicketid] = useState('');
    const [response, setResponse] = useState('');

    const resp = async (ticketid, res) => {
        
        /* get classname of this component*/
        const response = await fetch('http://localhost:3000/api/insertticket', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ticketid, res }),
        })
        const json = await response.json();
        console.log(json);
        toggle();
      } 


    return (
        <div >

            <Table >
                <thead>
                    <tr>
                        <th>
                            Cevaplandır
                        </th>
                        <th>
                            TicketID
                        </th>
                        <th>
                            CustomerID
                        </th>
                        <th>
                            Category
                        </th>
                        <th>
                            Message
                        </th>
                    </tr>
                </thead>
                <tbody>

                    {tickets.map(ticket => (
                        <tr>
                            <th>
                                <div>
                                    <Button
                                        number={ticket.ticketid}
                                        color="danger"
                                        onClick={(event) => {
                                            setTicketid(event.target.getAttribute('number'));
                                            toggle();
                                        }}
                                    >
                                        Cevapla
                                    </Button>
                                    <Modal
                                        fullscreen="sm"
                                        isOpen={modal}
                                        toggle={toggle}
                                    >
                                        <ModalHeader toggle={toggle}>
                                            Cevabınız
                                        </ModalHeader>
                                        <ModalBody>

                                            <Input onChange={(event) => setResponse(event.target.value)} className='answer' type='textarea'></Input>
                                        </ModalBody>
                                        <ModalFooter>
                                            <Button
                                                color="danger"
                                                onClick={(event) => {
                                                    
                                                    resp(ticketid, response)}}
                                            >
                                                Gönder
                                            </Button>

                                        </ModalFooter>
                                    </Modal>
                                </div>
                            </th>
                            <th scope="row">
                                {ticket.ticketid}
                            </th>
                            <td>
                                {ticket.customerid}
                            </td>
                            <td>
                                {ticket.category}
                            </td>
                            <td>
                                {ticket.ticketmessage}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export async function getServerSideProps({ params, res }) {
    const tickets = await db
      .select("*")
      .from("ticket")
      .where({ status: false })
      .orderBy("ticketid", "desc");
  
    return {
      props: { tickets },
    };
  }
