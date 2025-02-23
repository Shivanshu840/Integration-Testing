import express from 'express'
import { prisma } from './db';
export const app = express();
app.use(express.json());


app.post("/sum", async(req:any,res:any) =>{
    const {a,b} = req.body;

    if(a>10000 || b>10000){

        return res.status(422).json({
            msg: "sorry we don't support big number"
        });
    }

    const answer = a + b;

    const data = await prisma.request.create({
        data:{
            a:a,
            b:b,
            ans: answer,
            type: "ADD"
        },
        select:{
            id: true
        }

        

    })

    return res.status(200).json({result:answer,id: data.id})

})