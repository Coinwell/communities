import React from 'react';

import tags from './tags';

const Tag = (props: any) => {
  const { type } = props;
  if (!tags[type]) return <></>;
  const Icon = tags[type].icon;
  const color = tags[type].color;
  return (
    <div
      style={{ borderColor: color, background: color + '22' }}
      className='mr-2 tag-box'
    >
      <Icon height='14' width='14' fill='color' />
    </div>
  );
};

export default Tag;
