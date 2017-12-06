const apiKey = process.env.TRELLO_API_KEY || 'YOUR_API_KEY';
const oauthToken = process.env.TRELLO_OAUTH_TOKEN || 'OAUTH_TOKEN';
import * as TrelloNodeAPI from 'trello-node-api';

const Trello = new TrelloNodeAPI();

let actionRequest = async function () {
    Trello.setApiKey(apiKey);
    Trello.setOauthToken(oauthToken);
    let id = 'ACTION_ID';
    let data = {text: 'text'};
    let response = await Trello.action.update(id, data).catch(error => {
        if (error) {
            console.log('error ', error);
        }
    });

    console.log('response', response);
};

actionRequest();