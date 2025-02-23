import { describe,it, expect } from "vitest";
import {app} from "../index"
import request from "supertest"

describe("this is for sum test", ()=>{

    it("sum for 1 or 2 should be 3",async()=>{
        const {status,body} = await request(app).post("/sum").send({
            a: 1,
            b: 2
        })

        expect(status).toBe(200);
        expect(body).toEqual({result:3, id:expect.any(String)});
    });

})