import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { Chart } from "react-google-charts";
import { db } from '../api/hello';


const Graph = ({answered, unAnswered}) => {
    return (
        <div className='d-flex justify-content-center' >
            <Chart
                width={'800px'}
                height={'500px'}
                chartType="PieChart"
                loader={<div>Cevaplanmış Ticketler</div>}
                data={[
                    ['Ticket', 'Cevaplanmış Ticketler'],
                    ['Muhasebe', answered[0]],
                    ['Pazarlama', answered[1]],
                    ['Teknoliji', answered[2]],
                    ['Destek', answered[3]],
                ]}
                options={{
                    title: 'Cevaplanmış Ticketler',
                }}
                rootProps={{ 'data-testid': '1' }}
            />
            <Chart
                width={'800px'}
                height={'500px'}
                chartType="PieChart"
                loader={<div>Cevaplanmamış Ticketler</div>}
                data={[
                    ['Ticket', 'Cevaplanmamış Ticketler'],
                    ['Muhasebe', unAnswered[0]],
                    ['Pazarlama', unAnswered[1]],
                    ['Teknoliji', unAnswered[2]],
                    ['Destek', unAnswered[3]],
                ]}
                options={{
                    title: 'Cevaplanmamış Ticketler',
                }}
                rootProps={{ 'data-testid': '1' }}
            />
        </div>
    )


}

export default Graph;


export async function getServerSideProps({ params, res }) {
    const tickets = await db
      .select("*")
      .from("ticket")

    /* count the tickets variable according category types*/

    const answered = [0, 0, 0, 0];
    const unAnswered = [0, 0, 0, 0];
    tickets.map(ticket => {
        if (ticket.category === "Muhasebe") {
            if (ticket.status === true) {
                answered[0]++;
            }
            else {
                unAnswered[0]++;
            }
        }
        if (ticket.category === "Pazarlama") {
            if (ticket.status === true) {
                answered[1]++;
            }
            else {
                unAnswered[1]++;
            }
        }
        if (ticket.category === "Teknoloji") {
            if (ticket.status === true) {
                answered[2]++;
            }
            else {
                unAnswered[2]++;
            }
        }
        if (ticket.category === "Destek") {
            if (ticket.status === true) {
                answered[3]++;
            }
            else {
                unAnswered[3]++;
            }
        }





    
    })

    return {
        props: { answered, unAnswered },
      };
  }