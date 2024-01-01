import '@testing-library/jest-dom'
import 'whatwg-fetch'
// import { server } from "..//mocks/api/server"
import { server } from "@/mocks/server"
// import { TextEncoder, TextDecoder } from 'util';

// Object.assign(global, { TextDecoder, TextEncoder });
beforeAll(() => {
    console.log("server")
    server.listen()
})


beforeEach(() => {

})

afterAll(() => {

})

// afterEach(() => { })