import comments from '../styles/comments.module.scss';

const Pagination = ({ dataLength, activePage, limit, handlePageChange } : PaginationProps) => {

    const allPages = Math.ceil(dataLength / limit);

    const before = () => {
        if (activePage === 1) return [];
        const index = activePage - 2;
        return Array(2).fill(undefined).map((p, i) => index + i).filter(p => p > 0);
    }

    const after = () => {
        if (activePage === allPages) return [];
        const index = activePage + 1;
        return Array(2).fill(undefined).map((p, i) => index + i).filter(p => p <= allPages);
    }

    return (
        <div className={comments.pagination}>
           { before().map(pageNumber => (
                <button 
                    type="button" 
                    key={pageNumber} 
                    className={comments.page_tile}
                    onClick={() => handlePageChange(pageNumber)}
                >
                    { pageNumber }
                </button>
           ))}
           <div className={`${comments.page_tile} ${comments.page_active}`}>{ activePage }</div>
           { after().map(pageNumber => (
                <button 
                    type="button" 
                    key={pageNumber} 
                    className={comments.page_tile}
                    onClick={() => handlePageChange(pageNumber)}
                >
                    { pageNumber }
                </button>
           ))}
           <span>...</span>
           <span>
                { allPages }
            </span>
        </div>
    )
}

interface PaginationProps {
    dataLength: number,
    activePage: number,
    limit: number
    handlePageChange: (pageNumber: number) => void
}

export default Pagination;