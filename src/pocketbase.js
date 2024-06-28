import PocketBase from 'pocketbase';

const url = new PocketBase('https://ab-portfolio.pockethost.io/');
const pb = new PocketBase(url)

export default pb;
