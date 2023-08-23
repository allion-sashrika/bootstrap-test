import Pagination from 'react-bootstrap/Pagination';

export const PaginationExample = () => {
    return (
        <div>
            <Pagination>
                <Pagination.Item href='/alert'>{1}</Pagination.Item>
                <Pagination.Item href='/button'>{2}</Pagination.Item>
                <Pagination.Item href='/button-group'>{3}</Pagination.Item>
                <Pagination.Item href='/badge'>{4}</Pagination.Item>
                <Pagination.Item href='/progress-bar'>{5}</Pagination.Item>
            </Pagination>
        </div>
    )
}