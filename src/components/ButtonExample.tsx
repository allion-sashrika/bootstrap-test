import logo from './logo.svg'
import { useEffect, useState } from 'react';
import styled from 'styled-components'

const StyledButton = styled.button`
    background-color: ${(props) => props.variant === 'outline' ?  '#FFF' : 'red'};
    color: ${(props) => props.variant === 'outline' ?  'red' : '#FFF'};
    &:hover {
        background-color: ${(props) => props.variant !== 'outline' ?  '#FFF' : 'red'};
        color: ${(props) => props.variant !== 'outline' ?  'red' : '#FFF'};
    }
`;

const FancyButton = styled(StyledButton)`
    background-image: linear-gradient(to right, #f6d365 0%, #fda085 100%)
`

export const ButtonExample = () => {
    const [isLoading , setLoading] = useState(false)

    useEffect(() => {
        function simulateNetworkRequest() {
            return new Promise ((resolve) => setTimeout(resolve , 3000))
        }

        if (isLoading) {
            simulateNetworkRequest().then(() => {
                setLoading(false)
            })
        }
    }, [isLoading])

    const handleClick = () => setLoading(true)

    return (
        <>
            <img src={logo} className='App-logo' alt='logo' />
            <StyledButton
                variant="outline"
                disabled={isLoading}
                onClick={handleClick}
            >
                {isLoading ? 'Loading...' : 'Click to load'}
            </StyledButton>
            <StyledButton
                disabled={isLoading}
                onClick={handleClick}
            >
                {isLoading ? 'Loading...' : 'Click to load'}
            </StyledButton>
            <FancyButton>Fancy Button</FancyButton>
        </>
    )
}