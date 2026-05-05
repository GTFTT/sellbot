import { v4 } from "uuid";
import {routes} from "./routes.ts";

export interface MainMenuItemBlockItem {
  id: string;
  label: string;
  route?: string;
}
export interface MainMenuItemBlock {
  id: string;
  blockName: string;
  items: MainMenuItemBlockItem[];
}

export const mainMenuItems: MainMenuItemBlock[] = [
  {
    id: v4(),
    blockName: 'Buy',
    items: [
      {
        id: v4(),
        label: 'Buy for home',
        route: routes.inProgress,
      },
      {
        id: v4(),
        label: 'Buy for factory',
        route: routes.inProgress,
      },
      {
        id: v4(),
        label: 'Buy for store',
        route: routes.inProgress,
      },
      {
        id: v4(),
        label: 'Buy for security',
        route: routes.inProgress,
      },
      {
        id: v4(),
        label: 'Buy for healthcare',
        route: routes.inProgress,
      },
    ]
  },
  {
    id: v4(),
    blockName: 'Other options',
    items: [
      {
        id: v4(),
        label: 'Home screen',
        route: routes.home,
      },
      {
        id: v4(),
        label: 'Constructor',
      },
      {
        id: v4(),
        label: 'Special options',
      }
    ]
  },
  {
    id: v4(),
    blockName: 'Account',
    items: [
      {
        id: v4(),
        label: 'Login',
      },
      {
        id: v4(),
        label: 'Register',
      }
    ]
  },
  {
    id: v4(),
    blockName: 'Data',
    items: [
      {
        id: v4(),
        label: 'About us',
      },
      {
        id: v4(),
        label: 'Contacts',
      }
    ]
  }
]