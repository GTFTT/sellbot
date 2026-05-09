import styles from './Header.module.css';
import MenuActivateButton from "../buttons/MenuActivateButton/MenuActivateButton.tsx";
import ButtonsContainer from "./ButtonsContainer/ButtonsContainer.tsx";
import {animate, createScope, Scope} from 'animejs'
import {useEffect, useRef, useState} from "react";
import RemainingSpaceContainer from "./RemainingSpaceContainer/RemainingSpaceContainer.tsx";
import {useAppDispatch, useAppSelector} from "../../reduxStore/hooks.ts";
import {closeMenuAction, openMenuAction, selectIsMenuOpened} from "./headerSlice.ts";

type Props = {
  className?: string
};

export const Header = (props: Props) => {
  const containerRef = useRef(null);
  const scopeRef = useRef<Scope>(null);
  const menuActivateButtonContainerRef = useRef(null);
  const [headerMounted, setHeaderMounted] = useState(false);
  const headerActivated = useAppSelector(selectIsMenuOpened);
  const dispatch = useAppDispatch();

  useEffect(() => {
    scopeRef.current = createScope({ root: containerRef });
    scopeRef.current.add((self) => {
      if(!self) throw new Error(`Scope is not available yet.`);
      self.add('activateMenu', () => {
        if(!menuActivateButtonContainerRef.current) throw new Error(`Menu button reference is not available yet.`);
        animate(menuActivateButtonContainerRef.current, {
          opacity: 0,
          height: '0rem',
          ease: 'out(1)',
          duration: 1000,
          delay: 0,
          onBegin: () => {
            setHeaderMounted(true);
          }
        });
      });
      self.add('deactivateMenu', () => {
        if(!menuActivateButtonContainerRef.current) throw new Error(`Menu button reference is not available yet.`);
        animate(menuActivateButtonContainerRef.current, {
          opacity: 1,
          height: '2rem',
          ease: 'out(1)',
          duration: 1000,
          delay: 500,
          onComplete: () => {
            setHeaderMounted(false)
          }
        });
      });
    });
    // setHeaderMounted(false)
  }, []);

  useEffect(() => {
    if(!scopeRef.current) throw new Error(`Scope is not available yet.`);
    if(headerActivated) {
      scopeRef.current.methods.activateMenu()
    } else {
      scopeRef.current.methods.deactivateMenu()
    }
  }, [headerActivated]);

  const activateMenuClicked = () => {
    dispatch(openMenuAction());
  }

  const deactivateMenuClicked = () => {
    dispatch(closeMenuAction());
  }

  return (
    <header
      ref={containerRef}
      className={`${headerMounted? styles.header: styles.headerUnmounted } ${props.className || ''}`}

    >
      <div
        ref={menuActivateButtonContainerRef}
        className={styles.activateButtonContainer}
      >
        <MenuActivateButton className={headerMounted? styles.unmountedButton: ' '} onClick={activateMenuClicked}/>
      </div>
      {headerMounted && (
        <div className={styles.contentContainer}>
          <ButtonsContainer isExpanded={headerActivated} onMenuItemClick={() => deactivateMenuClicked()} />
          <RemainingSpaceContainer onClick={deactivateMenuClicked} isExpanded={headerActivated}/>
        </div>
      )}
    </header>
  );
};