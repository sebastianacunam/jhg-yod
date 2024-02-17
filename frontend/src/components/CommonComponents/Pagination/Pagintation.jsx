import PropTypes from 'prop-types';
import '../../../assets/scss/layout/_pagination.scss'


export const Pagination = ({ items, itemsPerPage, setCurrentPage, currentPage }) => {
   const totalPages = Math.ceil(items.length / itemsPerPage);

   const next = () => {
      if (currentPage !== totalPages) setCurrentPage(currentPage + 1);
   };
   const prev = () => {
      if (currentPage !== 1) setCurrentPage(currentPage - 1);
   };

   return (
      <div className='conteinerPagination'>
         <button onClick={prev}>Atrás</button>
         <h3>{currentPage} / {totalPages}</h3>
         <button onClick={next}>Sigueinte</button>
      </div>

   );
};
Pagination.propTypes = {
   items: PropTypes.array.isRequired,
   itemsPerPage: PropTypes.number.isRequired,
   setCurrentPage: PropTypes.func.isRequired,
   currentPage: PropTypes.number.isRequired,
};
