import React from 'react';
import { ReturnComponentType } from '../../types/ReturnComponentType';
import { PageSizeSelector, Pagination } from '../../common';
import styled from './Control.module.scss';

export const Control = (): ReturnComponentType => {
  const cardPacksTotalCount = 1;
  const pageCount = 1;
  const page = 1;
  const onChangedPage = (): void => {};
  const pageSizeHandler = (): void => {};
  return (
    <div className={styled.wrapper}>
      <Pagination
        totalCount={cardPacksTotalCount}
        pageSize={pageCount}
        currentPage={page}
        onChangedPage={onChangedPage}
      />
      <PageSizeSelector
        totalCount={cardPacksTotalCount}
        pageCount={pageCount}
        handler={pageSizeHandler}
      />
    </div>
  );
};
