import React from 'react';
import { Pagination } from 'antd';

interface PaginationPageProps {
    page: number;
    totalPage: number;
    setPage: (page: number) => void;
}

function PaginationPage({ page , totalPage , setPage} : PaginationPageProps) {

const handlePageChange = (value : number) => {
    setPage(value);
    console.log(value);
  };

  return (
    <div>
      <Pagination
        defaultPageSize={1}
        defaultCurrent={1}
        total={totalPage}
        showSizeChanger={false}
        onChange={handlePageChange} />
    </div>
  );
}

export default PaginationPage