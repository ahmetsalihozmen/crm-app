import { getCookie } from 'cookies-next';
import { Table } from 'reactstrap'
import { db } from '../api/hello';


export default function Answered({tickets}) {
  console.log(tickets);
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


export async function getServerSideProps({ req, res }) {
  const {cookies} = req;
  console.log(cookies)
  const tickets = await db
    .select("*")
    .from("ticket")
    .where({ status: true , customerid: cookies.token})
    .orderBy("ticketid", "desc");

  return {
    props: { tickets },
  };
}