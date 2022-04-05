import type { Address, AgentService, PublicSharing, LanguageContext, Perspective } from "@perspect3vism/ad4m";
import type { IPFS } from "ipfs-core-types";

export class PutAdapter implements PublicSharing {
    #agent: AgentService
    #IPFS: IPFS

    constructor(context: LanguageContext) {
        //Save LanguageContext variables
        this.#agent = context.agent
        this.#IPFS = context.IPFS
    }

    async createPublic(data: object): Promise<Address> {
        try {
            //@ts-ignore
            data = JSON.parse(data)
        }catch(e){
            
        }
        //Use the agent context to sign the expression before creating
        const agent = this.#agent
        const expression = agent.createSignedExpression(data)
        const content = JSON.stringify(expression)
        //Insert into IPFS
        const result = await this.#IPFS.add({content})
        //Return the cid as the address
        //@ts-ignore
        return result.cid.toString() as Address
    }
}