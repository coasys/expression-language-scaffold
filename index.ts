import type { Address, Interaction, Agent, Language, LanguageContext } from "@perspect3vism/ad4m";
import Adapter from './adapter'
import { InternalExpressionUI } from './expressionUI'

function interactions(expression: Address): Interaction[] {
    return []
}

//Main create function that is used to instantiate and run the language 
export default function create(context: LanguageContext): Language {
    const expressionAdapter = new Adapter(context)
    const expressionUI = new InternalExpressionUI()

    return {
        name: 'expression-language-scaffold',
        expressionAdapter,
        expressionUI,
        interactions,
    } as Language
}

//Name of the language. If this languages is templated, this will get updated.
export const name: string = "expression-language-scaffold"