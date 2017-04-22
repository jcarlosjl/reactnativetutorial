import md5 from 'md5';
const PUBLIC_KEY = '01426cebf64748aa9fc20ef029a51b74';
const PRIVATE_KEY = '8c4457cc34a376ce1eaff16dc040608356cd7a11';

const ts = Date.now();
const hash = md5(ts + PRIVATE_KEY + PUBLIC_KEY);
const MARVEL_URL = 'http://gateway.marvel.com:80/v1/public/';

export const getComics =(limit, offset) => {
    const REQUEST_URL = `${MARVEL_URL}characters?ts=${ts}` + 
        '&apikey=' + PUBLIC_KEY + '&hash=' + hash + '&limit=' + limit + '&offset=' + offset;
    return fetch(REQUEST_URL)
    .then((response) => response.json())
    .catch((error) => console.warn(error));
}