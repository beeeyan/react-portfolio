import {Entry, EntryCollection} from 'contentful';
import client from './client';
import {IChronologyFields, IProfileFields} from './@types/generated/contentful';
import {TypeChronologySkeleton, TypeProfileSkeleton} from './addType';

/**
 * @return {IChronologyFields[]}
 */
export const fetchChronologies = async () => {
  try {
    const resp : EntryCollection<TypeChronologySkeleton> =
    await client.getEntries({content_type: 'chronology'});
    const chronologies = resp.items.map((item) => {
      // console.log(item.fields.image?.fields!['file']);
      return item.fields as IChronologyFields;
    });
    for (const chronology of chronologies) {
      console.log('test');
      console.log(chronology.image?.fields.title);
      console.log(chronology.image?.fields?.['file']?.url);
    }

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
    const resp : Entry<TypeProfileSkeleton> =
    await client.getEntry(process.env.REACT_APP_CONTENTFUL_PROFILE_ID || '');
    return resp.fields as IProfileFields;
  } catch (error) {
    console.log('通信失敗');
  }
};
