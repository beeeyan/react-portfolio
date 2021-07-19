import {EntryCollection} from 'contentful';
import client from './client';
import {IChronologyFields} from './@types/generated/contentful';

/**
 * @return {IChronologyFields[]}
 */
export const fetchChronologies = async () => {
  try {
    const resp : EntryCollection<IChronologyFields> =
    await client.getEntries({content_type: 'chronology'});
    const chronologies = resp.items.map((item) => {
      return {
        year: item.fields.year,
        month: item.fields.month,
        title: item.fields.title,
        content: item.fields.content,
      };
    });
    return chronologies;
  } catch (error) {
    console.log(error);
  }
};
