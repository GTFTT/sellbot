import { v4 } from "uuid";

export interface MainMenuItemBlockItem {
  id: string;
  label: string;
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
        label: 'Buy for home'
      },
      {
        id: v4(),
        label: 'Buy for factory'
      },
      {
        id: v4(),
        label: 'Buy for store'
      },
      {
        id: v4(),
        label: 'Buy for security'
      },
      {
        id: v4(),
        label: 'Buy for healthcare'
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