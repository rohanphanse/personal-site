import { useState, cloneElement, useEffect, useRef } from "react" 

const ImageModal = ({ children }) => {
    const imgRef = useRef(null)
    const [isOpen, setIsOpen] = useState(false)
    const [isClosing, setIsClosing] = useState(false)
    const closeModal = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsOpen(false)
            setIsClosing(false)
        }, 200)
    }
    const clonedChild = cloneElement(children, {
        onClick: () => setIsOpen(true),
        ref: imgRef,
        style: { ...children.props.style, cursor: "pointer" }
    })
    const [size, setSize] = useState({ width: 0, height: 0 })
    useEffect(() => {
        const img = imgRef.current
        if (!img) return
        const handleLoad = () => {
            const { width, height } = img.getBoundingClientRect()
            setSize({ width, height })
        }
        if (img.complete) {
            handleLoad()
        } else {
            img.addEventListener("load", handleLoad)
            return () => img.removeEventListener("load", handleLoad)
        }
    }, [])
    const { src, alt } = children.props
    return (
        <>
            {clonedChild}
            {isOpen && (
                <div
                    className={`modal-overlay ${isOpen ? "show" : ""} ${isClosing ? "closing" : ""}`} onClick={closeModal}>
                    <img src={src} alt={alt} className={`modal-image ${isOpen ? "show" : ""} ${isClosing ? "closing" : ""}`}
                    />
                </div>
            )}
            <style jsx>{`
                .modal-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: var(--background);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 1000;
                    pointer-events: none;
                    animation: modalFadeIn 0.3s ease forwards;
                    cursor: pointer;
                }

                .modal-overlay.show {
                    pointer-events: auto;
                    opacity: 0.5;
                }

                .modal-overlay.closing {
                    animation: modalFadeOut 0.2s ease forwards;
                }

                @keyframes modalFadeIn {
                    0% {
                        opacity: 0.5;
                    }
                    100% {
                        opacity: 1;
                    }
                }

                @keyframes modalFadeOut {
                    0% {
                        opacity: 0.5;
                    }
                    100% {
                        opacity: 0;
                    }
                }

                @keyframes modalGrow {
                    0% {
                        transform: scale(0.5);
                    }
                    100% {
                        transform: scale(1);
                    }
                }

                .modal-image {
                    height: 100%;
                    width: auto !important;
                    transition: transform 0.2s ease;
                    animation: modalGrow 0.2s ease forwards;
                    cursor: pointer;
                    height: 100%;
                    width: auto !important;
                }   
                
                @media (max-width: ${750 * size.width / size.height}px) {
                    .modal-image {
                        width: 100% !important;
                        height: auto;
                    }
                }

                .modal-image.show {
                    animation: modalGrow 0.2s ease forwards;
                }
            `}</style>
        </>
    )
}

export default ImageModal