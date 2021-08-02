import {Entry, EntryCollection} from 'contentful';
import client from './client';
import {IChronologyFields, IProfileFields} from './@types/generated/contentful';

/**
 * @return {IChronologyFields[]}
 */
export const fetchChronologies = async () => {
  try {
    const resp : EntryCollection<IChronologyFields> =
    await client.getEntries({content_type: 'chronology'});
    const chronologies = resp.items.map((item) => {
      return item.fields;
    });
    return sortedChronologies(chronologies);
  } catch (error) {
    console.log('通信失敗');
  }
};

/**
 *
 * @param {IChronologyFields[]} chronologies
 * @return {IChronologyFields[]}
 *
 */
const sortedChronologies = (chronologies: IChronologyFields[]) => {
  chronologies.sort((a, b) => {
    if (a.year != b.year) {
      return a.year -b.year;
    }
    return a.month -b.month;
  });
  return chronologies;
};

/**
 * @return {IProfileFields}
 */
export const fetchProfile = async () => {
  try {
    const resp : Entry<IProfileFields> =
    await client.getEntry(process.env.REACT_APP_CONTENTFUL_PROFILE_ID || '');
    return resp.fields;
  } catch (error) {
    console.log('通信失敗');
  }
};
