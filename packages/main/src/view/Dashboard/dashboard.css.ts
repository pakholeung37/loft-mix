import { style } from '@vanilla-extract/css'
import { vars } from '../../style/index.css'

export const r = `.parent {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);
  grid-column-gap: 4px;
  grid-row-gap: 4px;
  }

  .div1 { grid-area: 1 / 1 / 2 / 7; }
  .div2 { grid-area: 2 / 5 / 3 / 7; }
  .div3 { grid-area: 3 / 5 / 4 / 7; }
  .div4 { grid-area: 4 / 5 / 5 / 7; }
  .div5 { grid-area: 2 / 1 / 5 / 5; }
  .div6 { grid-area: 5 / 1 / 6 / 3; }
  .div7 { grid-area: 6 / 1 / 9 / 3; }
  .div8 { grid-area: 5 / 3 / 9 / 7; }
  .div9 { grid-area: 1 / 7 / 9 / 9; }
  `

export const content_layout = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(8, 1fr)',
  gridAutoRows: `${vars.space[4]}`,
  columnGap: vars.space[4],
  rowGap: vars.space[4],
  padding: vars.space[4],
})

export const card_container = style({
  width: '100%',
  height: '100%',
  overflow: 'hidden',
})
