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
    blockName: 'Other options',
    items: [
      {
        id: v4(),
        label: 'Home screen',
        route: routes.home,
      }
    ],
  },
  {
    id: v4(),
    blockName: 'Account',
    items: [
      {
        id: v4(),
        label: 'Login',
        route: routes.login,
      },
      {
        id: v4(),
        label: 'Register',
        route: routes.register,
      },
    ]
  },
  {
    id: v4(),
    blockName: 'Data',
    items: [
      {
        id: v4(),
        label: 'About',
        route: routes.about,
      },
    ]
  }
]