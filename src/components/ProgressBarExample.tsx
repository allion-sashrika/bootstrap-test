import ProgressBar from 'react-bootstrap/ProgressBar';

export const ProgressBarExample = () => {
    return (
        <ProgressBar>
            <ProgressBar animated variant='danger' now={30} key={1} />
            <ProgressBar animated variant='warning' now={20} key={2} />
            <ProgressBar animated variant='primary' now={10} key={3} />
        </ProgressBar>
    )
}