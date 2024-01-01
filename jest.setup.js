import '@testing-library/jest-dom'
import 'whatwg-fetch'
import { server } from "@/mocks/server"

beforeAll(() => {
    server.listen()
})


beforeEach(() => {
    server.resetHandlers()
})

afterAll(() => {
    server.close()
})

// afterEach(() => { })