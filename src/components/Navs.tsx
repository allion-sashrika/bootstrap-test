import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const NavBar = () => {
    return (
        <Nav defaultActiveKey={'/'} className='flex-column'>
            <Nav.Item>
                <Nav.Link as={Link} to='/'>Home</Nav.Link>
                <Nav.Link as={Link} to='/alert'>Alert</Nav.Link>
                <Nav.Link as={Link} to='/button'>Button</Nav.Link>
                <Nav.Link as={Link} to='/button-group'>Button Group</Nav.Link>
                <Nav.Link as={Link} to='/badge'>Badge</Nav.Link>
                <Nav.Link as={Link} to='/progress-bar'>Progress Bar</Nav.Link>
                <Nav.Link as={Link} to='/spinner'>Spinner</Nav.Link>
                <Nav.Link as={Link} to='/scrollspy'>Scrollspy</Nav.Link>
                <Nav.Link as={Link} to='/list-group'>List Group</Nav.Link>
                <Nav.Link as={Link} to='/card'>Card</Nav.Link>
                <Nav.Link as={Link} to='/dropdown'>Dropdown</Nav.Link>
                <Nav.Link as={Link} to='/navbar'>Navbar</Nav.Link>
                <Nav.Link as={Link} to='/form'>Forms</Nav.Link>
                <Nav.Link as={Link} to='/input-group'>Input Groups</Nav.Link>
                <Nav.Link as={Link} to='/breadcrumb'>Breadcrumb</Nav.Link>
                <Nav.Link as={Link} to='/carousel'>Carousel</Nav.Link>
                <Nav.Link as={Link} to='/toast'>Toast</Nav.Link>
                <Nav.Link as={Link} to='/tooltip'>Tooltip</Nav.Link>
                <Nav.Link as={Link} to='/popover'>Popovers</Nav.Link>
                <Nav.Link as={Link} to='/collapse'>Collapse</Nav.Link>
                <Nav.Link as={Link} to='/modal'>Modal</Nav.Link>
                <Nav.Link as={Link} to='/pagination'>Pagination</Nav.Link>
                <Nav.Link as={Link} to='/media-object'>Media Object</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export default NavBar