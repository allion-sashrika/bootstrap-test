import Dropdown from 'react-bootstrap/Dropdown';

export const DropdownExample = () => {
    return (
        <Dropdown>
            <Dropdown.Toggle variant='danger' id='dropdown-basic'>
                Dropdown Button
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item href='#'>Item 1</Dropdown.Item>
                <Dropdown.Item href='#'>Item 2</Dropdown.Item>
                <Dropdown.Item href='#'>Item 3</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}