import mesiList from './mesiList.json';

export default function fileterMesi(searchText, maxResults) {
  return mesiList.filter(mesi => {
    if (mesi.title.includes(searchText)) {
      return true;
    }
    return false;
  }).slice(0, maxResults);
}
