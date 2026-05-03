import styles from './Header.module.css';
import MenuActivateButton from "../buttons/MenuActivateButton/MenuActivateButton.tsx";

type Props = {
  className?: string
};

export const Header = (props: Props) => {
  return (
    <div className={`${styles.header} ${props.className || ''}`}>
      <MenuActivateButton />
    </div>
  );
};