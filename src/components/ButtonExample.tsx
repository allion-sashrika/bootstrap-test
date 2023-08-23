import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';

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
        <Button
            variant='primary'
            disabled={isLoading}
            onClick={handleClick}
        >
            {isLoading ? 'Loading...' : 'Click to load'}
        </Button>
    )
}