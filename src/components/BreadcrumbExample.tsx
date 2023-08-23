import Breadcrumb from 'react-bootstrap/Breadcrumb';

export const BreadcrumbExample = () => {
    return (
        <Breadcrumb>
            <Breadcrumb.Item href='#'>Home</Breadcrumb.Item>
            <Breadcrumb.Item active>BreadcrumbExample</Breadcrumb.Item>
        </Breadcrumb>
    )
}