import React from 'react';
/** @jsxImportSource theme-ui */
import {Card} from 'theme-ui';
import {IProfileFields} from '../utils/@types/generated/contentful';

/**
 *
 * @param {IProfileFields} props
 * @return {jsx}
 */
const Profile: React.FC<IProfileFields> = (props: IProfileFields) => {
  return (
    <Card>
      <h2>HN: {props.name}</h2>

    </Card>
  );
};

export default Profile;
