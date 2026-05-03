import styles from './Header.module.css';
import MenuActivateButton from "../buttons/MenuActivateButton/MenuActivateButton.tsx";
import ButtonsContainer from "./ButtonsContainer/ButtonsContainer.tsx";

type Props = {
  className?: string
};

export const Header = (props: Props) => {
  return (
    <header className={`${styles.header} ${props.className || ''}`}>
      <MenuActivateButton />
      <ButtonsContainer isExpanded={true} />
    </header>
  );
};