import { db } from "./hello"

export default async (req, res) => {

    db('ticket').insert({
        ticketmessage: req.body.text,
        category: req.body.category,
        customerid: req.body.customerid,
        status: false
    }).then(data => {
        res.statusCode = 200
        res.json({
            message: 'success'
        })
    }
    ).catch(err => {
        res.statusCode = 500
        res.json({
            message: 'error'
        })
    })

}


