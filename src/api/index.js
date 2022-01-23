import { client, q } from '../config/db';

export const getAllNouns = client
.query(q.Paginate(q.Match(q.Ref('indexes/articles_by_french'))))
.then(response => {
    const nounRef = response.data;
    const getAllDataQuery = nounRef.map(ref => {
        return q.Get(ref);
    });
    console.log('um hi')
    return client.query(getAllDataQuery).then(data => data);
})
.catch(error => console.error('Error: ', error.message));

