import {createClient} from 'contentful';

// contentful の APIクライアント
const client = createClient({
  accessToken: process.env.REACT_APP_CONTENTFUL_DELIVERY_TOKEN || '',
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID || '',
});

export default client;
