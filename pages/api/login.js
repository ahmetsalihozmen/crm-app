import { db } from "./hello"

export default async (req,res) => {

    if(req.body.username === 'admin' && req.body.password === '123'){
        res.statusCode = 200
        res.json({
            token: 'admin'
        })
    }

    
    else {
        db.select('*').from('customer').where({
            username: req.body.username,
            pword: req.body.password
        }).then(data => {
            console.log(data[0].customerid)
            if(data.length > 0){
                res.statusCode = 200
                res.json({
                    token: data[0].customerid
                })
            }
        })


    }
}


