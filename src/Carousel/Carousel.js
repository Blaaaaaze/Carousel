import { useEffect, useState, Children, cloneElement, useRef } from 'react'
import './Carousel.css'

const PAGE_WIDTH = 700



export const Carousel = ({children}) => {

    const INTERVAL_REF = useRef(null)
    

    const [pages, setPages] = useState([])
    const [offset, setOffset] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false);
    const handleBackClick = () => {
        setOffset((currentOffset) => {
            
            const newOffset = currentOffset + PAGE_WIDTH
            const maxWidth = -(PAGE_WIDTH * (pages.length - 1))

            return (newOffset <= 0) ? newOffset : maxWidth
        })
    }

    const handlePlayClick = () => {
        if (INTERVAL_REF.current) return

        INTERVAL_REF.current = setInterval(() => {handleForwardClick();}, 5000)
        setIsPlaying(true)
    }

    const handleStopClick = () => {
        if (INTERVAL_REF.current) {
            clearInterval(INTERVAL_REF.current)
            INTERVAL_REF.current = null
            setIsPlaying(false)
        }
    }

    const handleForwardClick = () => {
        setOffset((currentOffset) => {

            const newOffset = currentOffset - PAGE_WIDTH
            const maxWidth = -(PAGE_WIDTH * (pages.length - 1))
            
            return (newOffset >= maxWidth) ? newOffset : 0
        })
    }

    useEffect(() => {
        setPages(
            Children.map(children, child => {
                return cloneElement(child, {
                    style: {
                        height: '100%',
                        minWidth: `${PAGE_WIDTH}px`,
                        maxWidth: `${PAGE_WIDTH}px`,
                    }
                })
            })
        )
    }, [])


    return (
        
            <div className="main-container">
                <div className="window">
                    <div className="all-pages-container" 
                    style={{
                        transform: `translateX(${offset}px)`
                    }}
                    >
                        {pages}
                    </div>
                </div>

                <div className='btn-container'>
                    <button className='btn' onClick={handleBackClick} disabled={isPlaying}>Назад</button>
                    <button className='btn' onClick={handlePlayClick} disabled={isPlaying}>Начать</button>
                    <button className='btn' onClick={handleStopClick} disabled={!isPlaying}>Стоп</button>
                    <button className='btn' onClick={handleForwardClick} disabled={isPlaying}>Вперед</button>
                </div>
            </div>
        
    )
}