import React, { useState } from 'react';
import PreviewCollection from '../../components/preview-collection/PreviewCollection';

import shopData from './shop-data';
import './shop.styles.scss';

const Shop = () => {
  const [collectionsData, setCollectionsData] = useState(shopData);
  return (
    <>
      {collectionsData.map(({ id, ...data }) => (
        <PreviewCollection key={id} {...data} />
      ))}
    </>
  );
};

export default Shop;
