import { db } from "./hello"

export default async (req,res) => {
    console.log(req.body)
    db("ticket").update({
        response: req.body.res,
        status: true
    }).where({
        ticketid: req.body.ticketid
    }).then(data => {
        res.statusCode = 200
        res.json({
            message: 'success'
        })
    })
    .catch(err => {
        res.statusCode = 500
        res.json({
            message: 'error'
        })
    })
    
}