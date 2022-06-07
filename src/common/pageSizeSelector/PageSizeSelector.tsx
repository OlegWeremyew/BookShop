import React, { ChangeEvent, useState } from 'react';

import styles from './PageSizeSelector.module.scss';
import { PageSizeSelectorPropsType } from './types';
import { ReturnComponentType } from '../../types/ReturnComponentType';
import { SuperSelect } from '../SuperSelect';

export const PageSizeSelector: React.FC<PageSizeSelectorPropsType> = ({
  pageCount,
  handler,
  totalCount,
}): ReturnComponentType => {
  const arr: number[] = [8, 10, 20, 50];

  const [value, setValue] = useState(pageCount);

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>): void => {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const value = +e.currentTarget.value;
    setValue(value);
    handler(value);
  };

  return (
    <div className={styles.containerSelector}>
      <p>Show</p>
      <SuperSelect
        totalCount={totalCount}
        options={arr}
        value={value}
        onChange={onChangeHandler}
      />
      <p>Cards per Page</p>
    </div>
  );
};