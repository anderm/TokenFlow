import * as path from 'path';
import { Pipeline, printTokens } from './pipeline';

function pipelineDemo(query: string, debugMode = false) {
    const pipeline = new Pipeline(
        path.join(__dirname, './data/cars/catalog.yaml'),
        path.join(__dirname, './data/intents.yaml'),
        path.join(__dirname, './data/attributes.yaml'),
        path.join(__dirname, './data/quantifiers.yaml'),
        undefined,
        debugMode);

    const tokens = pipeline.processOneQuery(query);

    console.log(`"${query}"`);
    console.log();
    printTokens(tokens);
}

pipelineDemo("I'll have four tires one of them white wall");
// pipelineDemo('can I have a station wagon');
