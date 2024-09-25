import '../button/arrow-button.css'
import arrowLeft from '../../assets/icons/arrow-left.svg';

interface ArrowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  disabled: boolean;
}

const ArrowButton: React.FC<ArrowButtonProps> = ({ onClick, disabled, className }) => {
  return (
    <button onClick={onClick} className={`arrow-button ${className}`} disabled={disabled}>
      <img src={arrowLeft} alt="arrow" />
    </button>
  );
};

export default ArrowButton;
