
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
    id: '1',
    blockName: 'Buy',
    items: [
      {
        id: '1',
        label: 'Buy for home'
      },
      {
        id: '2',
        label: 'Buy for factory'
      },
      {
        id: '3',
        label: 'Buy for store'
      },
      {
        id: '4',
        label: 'Buy for security'
      },
    ]
  }
]