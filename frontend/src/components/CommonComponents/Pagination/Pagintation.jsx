import PropTypes from 'prop-types';


export const Pagination = ({ items, itemsPerPage, setCurrentPage, currentPage }) => {
   const totalPages = Math.ceil(items.length / itemsPerPage);

   const next = () => {
      if (currentPage !== totalPages) setCurrentPage(currentPage + 1);
   };
   const prev = () => {
      if (currentPage !== 1) setCurrentPage(currentPage - 1);
   };

   return (
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
         <h3 onClick={prev}>Prev</h3>
         <h3>{currentPage} / {totalPages}</h3>
         <h3 onClick={next}>Next</h3>
      </div>

   );
};
Pagination.propTypes = {
   items: PropTypes.array.isRequired,
   itemsPerPage: PropTypes.number.isRequired,
   setCurrentPage: PropTypes.func.isRequired,
   currentPage: PropTypes.number.isRequired,
};
