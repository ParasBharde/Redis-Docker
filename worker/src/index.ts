import { createClient } from "redis";

const client = createClient()


async function main() {
    await client.connect()
    while (1) {
        const response = await client.brPop("Submission",0);
        console.log('response',response)
        await new Promise((resolve) => setTimeout(resolve, 1000))
        console.log("Process User Submission")
    }
}

main()