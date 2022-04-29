import { history } from 'umi';

export default function onPath({ options, record }) {
  const { path, query = { id: 'id' } } = options;
  const data = {};
  Object.keys(query).forEach(toKey => {
    const formKey = query[toKey];
    data[toKey] = record[formKey] || formKey;
  });

  // console.log(' path == ', path)

  history.push({
    pathname: path,
    query: data,
  });
}