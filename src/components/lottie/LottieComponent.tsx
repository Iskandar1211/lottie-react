import styles from './Lottie.module.scss'
import Lottie, {LottieComponentProps} from "lottie-react";

type LottieProps = {
    animationData: unknown,
    loop: boolean,
    className?: string,
    containerWidth?: number,
    containerHeight?: number,
} & LottieComponentProps

const LottieComponent = (
    {
        animationData,
        loop,
        className,
        containerWidth,
        containerHeight,
        ...lottieComponentProps
    }: LottieProps) => {
    return (
        <div style={{width: containerWidth, height: containerHeight}} className={`${styles.container}`}>
            <Lottie {...lottieComponentProps} animationData={animationData} loop={loop} className={className} />
        </div>
    );
};

export default LottieComponent;