import './Lottie.scss'
import Lottie from "lottie-react";
import laptopFloating from '../../shared/lottie-files/laptopFloating.json'

const LottieComponent = () => {
    return (
        <div className={'container'}>
            <Lottie animationData={laptopFloating} loop={true} />
        </div>
    );
};

export default LottieComponent;