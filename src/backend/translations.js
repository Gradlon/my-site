
import { translationContents } from "@wix/multilingual";
import { auth } from '@wix/essentials';
import { translationSchemas } from "@wix/multilingual";
import { translationPublishedContents } from "@wix/multilingual";

export async function querySchema() {
    const listSchemas = auth.elevate(translationSchemas.listSiteSchemas);
    const list = await listSchemas({ scope: 'SITE'});
    console.log('Schemas', list);
    
    // const { items } = await queryContents()
}
export async function queryContents() {
    const queryContents = auth.elevate(translationContents.queryContents)
    // https://dev.wix.com/docs/sdk/backend-modules/multilingual/translation/translation-content/query-contents
    const translations1 = await queryContents().eq('schemaId', 'f7b97f0e-aa1a-41fa-8926-5c5d78cdab51').find();
    console.log('Translations', translations1);
    
    // const { items } = await queryContents()
}
export async function queryContent() {
    const queryContents = auth.elevate(translationContents.queryContents)
    // https://dev.wix.com/docs/sdk/backend-modules/multilingual/translation/translation-content/query-contents
    const translations1 = await queryContents().eq('schemaId', 'f7b97f0e-aa1a-41fa-8926-5c5d78cdab51').eq('entityId', '010ca392-ab35-41f5-9a1f-2c3aeb4248e5').find();
    console.log('Translations', translations1);
    
    // const { items } = await queryContents()
}
export async function querySomeContents() {
    const queryContents = auth.elevate(translationContents.queryContents)
    // https://dev.wix.com/docs/sdk/backend-modules/multilingual/translation/translation-content/query-contents
    const translations1 = await queryContents().eq('schemaId', 'f7b97f0e-aa1a-41fa-8926-5c5d78cdab51').hasSome('entityId', ['010ca392-ab35-41f5-9a1f-2c3aeb4248e5', '1bdc1a6a-e479-4f5a-bc73-ebb621be2f98']).find();
    console.log('Translations', translations1);
    // const { items } = await queryContents()
}
export async function queryContentsPub() {
    const queryContents = auth.elevate(translationPublishedContents.queryPublishedContent)
    // https://dev.wix.com/docs/sdk/backend-modules/multilingual/translation/translation-content/query-contents
    const translations1 = await queryContents().eq('schemaKey.scope', 'SITE').eq('entityId', '010ca392-ab35-41f5-9a1f-2c3aeb4248e5').find();
    console.log('Translations', translations1);
    // const { items } = await queryContents()
}
export async function querySomeContentsPub() {
    const queryContents = auth.elevate(translationPublishedContents.queryPublishedContent)
    // https://dev.wix.com/docs/sdk/backend-modules/multilingual/translation/translation-content/query-contents
    const translations1 = await queryContents().eq('schemaKey.scope', 'SITE').hasSome('entityId', ['010ca392-ab35-41f5-9a1f-2c3aeb4248e5']).find();
    console.log('Translations', translations1);
    // const { items } = await queryContents()
}
