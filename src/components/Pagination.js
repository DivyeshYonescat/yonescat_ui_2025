// Pagination.js
import React from 'react';
import { Button } from './ui/button';
// import Button from "next/link";

const Pagination = ({ currentPage, totalCount, pageSize, pageCounte, onPageChange }) => {
  const pageCount = Math.ceil(totalCount / pageSize);
  const pages = Array.from({ length: pageCount }, (_, i) => i + 1);
  
  // Calculate the range of pages to display
  const startPage = Math.max(1, currentPage - 2);
  const endPage = Math.min(pageCount, currentPage + 2);
  const visiblePages = pages.slice(startPage - 1, endPage);

  return (
    <>
    
        <ul className="flex justify-center items-center">
            {currentPage > 1 ? 
            <li className={`page-item `}>
                <Button  variant="outline" className={`page-link !rounded-none ${currentPage < 1} ? 'disabled' :'outline'`}  onClick={() => onPageChange(currentPage - 1)}  tabIndex={-1}><span className="flaticon-back" /></Button>
            </li>
            : ""}
            {/* {currentPage > 1 && (
                <li className="page-item active" aria-current="page"><button className="page-link" href="#">1</button></li>
            )} */}
            {visiblePages.map((page) => (
                <li key={"list"+page} className={`page-item ${page === currentPage ? 'active' : ''}`}>
                    <Button variant={`${page === currentPage ? '' : 'outline'}`} onClick={() => onPageChange(page)} className="page-link !rounded-none'">{page}</Button>
                </li>
            ))}
            {currentPage < pageCount && (
                <li className="page-item">
                    <Button variant="outline"  className="page-link !rounded-none" onClick={() => onPageChange(currentPage + 1)}>
                     <span className="flaticon-next" />
                    </Button>
                </li>
            )}
        </ul>
    
    </>
  );
};

export default Pagination;