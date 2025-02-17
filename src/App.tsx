import './App.scss'
import LottieComponent from "./components/lottie/LottieComponent.tsx";
import laptopFloating from './shared/lottie-files/laptopFloating.json'
import confetti from './shared/lottie-files/confetti.json'

function App() {
    return (
        <>
            <LottieComponent loop={true} animationData={laptopFloating} />
            <LottieComponent loop={true} animationData={confetti} containerWidth={700} containerHeight={500}/>
        </>
    )
}

export default App
