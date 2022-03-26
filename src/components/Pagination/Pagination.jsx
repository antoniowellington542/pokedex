import { usePagination } from "../../AppContext/PaginationContext";
import { ButtonController, ButtonPagination, ListItem, ListPagination, PaginationContainer } from "./Pagination.style";

const MAX_ITEMS = 9;
const MAX_LEFT = (MAX_ITEMS - 1)/2;
const TOTAL = 898;

const Pagination = () =>{

    const {index, LIMIT, onPageChange} = usePagination();
    
    const currentPage = index ? (index/LIMIT)+1 : 1;  
    const pages = Math.ceil(TOTAL/LIMIT);
    const first = Math.max(currentPage - MAX_LEFT, 1);



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