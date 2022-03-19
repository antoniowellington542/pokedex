import { ButtonController, ButtonPagination, ListItem, ListPagination, PaginationContainer } from "../../../styles/Pagination.style";

const MAX_ITEMS = 9;
const MAX_LEFT = (MAX_ITEMS - 1)/2;

const Pagination = ({total, offset, limit, setOffset}) =>{

    const currentPage = offset ? (offset/limit)+1 : 1;  
    const pages = Math.ceil(total/limit);
    const first = Math.max(currentPage - MAX_LEFT, 1);

    function onPageChange(page){
        setOffset((page-1) * limit);
    }


    return(
        <PaginationContainer>
             <ListPagination>
                <ListItem>
                    <ButtonController  
                        onClick={() => onPageChange(currentPage-1)}
                        disabled={currentPage === 1}
                    >
                        Anterior 
                    </ButtonController>
                </ListItem>
                {Array.from({length: Math.min(MAX_ITEMS, pages)})
                    .map((__, index) => index + first)
                    .map((page) =>(
                    <ListItem key={page}>
                        <ButtonPagination  
                            className={page === currentPage ? 'active' : null}
                            onClick={() => onPageChange(page)}
                        >
                            {page} 
                        </ButtonPagination>
                    </ListItem>
                ))}
                <ListItem>
                    <ButtonController  
                        onClick={() => onPageChange(currentPage+1)}
                        disabled={currentPage === pages}
                    >
                        Proximo 
                    </ButtonController>
                </ListItem>
            </ListPagination>
        </PaginationContainer>
    )
}


export default Pagination;