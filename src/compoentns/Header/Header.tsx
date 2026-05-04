import styles from './Header.module.css';
import MenuActivateButton from "../buttons/MenuActivateButton/MenuActivateButton.tsx";
import ButtonsContainer from "./ButtonsContainer/ButtonsContainer.tsx";
import {animate, createScope, Scope} from 'animejs'
import {useEffect, useRef, useState} from "react";
import RemainingSpaceContainer from "./RemainingSpaceContainer/RemainingSpaceContainer.tsx";

type Props = {
  className?: string
};

export const Header = (props: Props) => {
  const [headerActivated, setHeaderActivated] = useState<boolean>(false);
  const container = useRef(null);
  const scope = useRef<Scope>(null);
  const menuActivateButtonContainerRef = useRef(null);

  useEffect(() => {
    scope.current = createScope({ root: container });
    scope.current.add((self) => {
      if(!self) throw new Error(`Scope is not available yet.`);
      self.add('activateMenu', () => {
        if(!menuActivateButtonContainerRef.current) throw new Error(`Menu button reference is not available yet.`);
        animate(menuActivateButtonContainerRef.current, {
          opacity: 0,
          height: '0rem',
          ease: 'out(1)',
          duration: 350,
          delay: 0,
        });
      });
      self.add('deactivateMenu', () => {
        if(!menuActivateButtonContainerRef.current) throw new Error(`Menu button reference is not available yet.`);
        animate(menuActivateButtonContainerRef.current, {
          opacity: 1,
          height: '2rem',
          ease: 'out(1)',
          duration: 200,
          delay: 1000,
        });
      });
    });
  }, []);

  useEffect(() => {
    if(!scope.current) throw new Error(`Scope is not available yet.`);
    if(headerActivated) {
      scope.current.methods.activateMenu()
    } else {
      scope.current.methods.deactivateMenu()
    }
  }, [headerActivated]);

  const activateMenuClicked = () => {
    setHeaderActivated(true);
  }

  const deactivateMenuClicked = () => {
    setHeaderActivated(false);
  }

  return (
    <header
      ref={container}
      className={`${styles.header} ${props.className || ''}`}

    >
      <div
        ref={menuActivateButtonContainerRef}
        className={styles.activateButtonContainer}
      >
        <MenuActivateButton onClick={activateMenuClicked}/>
      </div>
      <div className={styles.contentContainer}>
        <ButtonsContainer isExpanded={headerActivated} />
        <RemainingSpaceContainer onClick={deactivateMenuClicked} isExpanded={headerActivated}/>
        {/*<div*/}
        {/*  className={`${styles.spaceContainer} ${headerActivated? styles.remainingSpaceContainer: styles.zeroSpaceContainer}`}*/}
        {/*  onClick={() => {*/}
        {/*    deactivateMenuClicked()*/}
        {/*  }}*/}
        {/*>*/}
        {/*  <span className={styles.highlightedText}>Click anywhere to exit menu</span>*/}
        {/*</div>*/}
      </div>
    </header>
  );
};