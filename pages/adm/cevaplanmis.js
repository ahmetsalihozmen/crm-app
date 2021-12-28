import { Table } from 'reactstrap'
import {db} from '../api/hello'


export default function Cevaplamis({tickets}) {
  return (
    <div >

      <Table >
        <thead>
          <tr>
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
                {ticket.response}
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
    .where({ status: true })
    .orderBy("ticketid", "desc");

  return {
    props: { tickets },
  };
}