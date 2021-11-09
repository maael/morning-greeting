import * as React from 'react'
import { Textfit } from 'react-textfit'
import Head from 'next/head'
import format from 'date-fns/format'
import stc from 'string-to-color'
import tc from 'tinycolor2'

const words = {
  f: [
    'fantastic',
    'first-class',
    'favourable',
    'fanciful',
    'far-out',
    'fantastical',
    'fab',
    'flamboyant',
    'flashy',
    'fancy',
    'fashionable',
    'friendly',
    'fine and dandy',
    'fair',
    'fascinating',
    'fun',
    'five-star',
    'festive',
    'frolicsome',
  ],
  m: [
    'magnificent',
    'marvelous',
    'masterful',
    'mythical',
    'motivating',
    'memorable',
    'majestic',
    'merry',
    'mirthful',
    'magical',
    'mainstay of a',
    'masterpiece of a',
    'momentous',
  ],
  t: [
    'terrific',
    'truly great',
    'tiptop',
    'top',
    'trendy',
    "to one's liking",
    'thrilling',
    'top-notch',
    'triumphant',
    'top tier',
    'treat of a',
    'take-charge',
    'timeless',
    'transcendent',
    'transformational',
    'treasure of a',
  ],
  w: [
    'welcome',
    'wonderful',
    'worthwhile',
    'wicked',
    'wholesome',
    'wacky',
    'whimsical',
    'way-out',
    'wild',
    'winner',
    'witty',
    'winning',
    'waggish',
  ],
}

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min) //The maximum is exclusive and the minimum is inclusive
}

function getPrefix(day: string) {
  const options = words[day.toLowerCase().slice(0, 1)]
  if (!options) return ''
  const idx = getRandomInt(0, options.length)
  return options[idx]
}

export default function Index() {
  const day = format(new Date(), 'EEEE')
  const color = stc(day)
  const textColor = tc(color).triad()[2].toString()
  const [prefix, setPrefix] = React.useState(() => getPrefix(day))
  return (
    <>
      <style jsx global>{`
        :root {
          --color-background: ${color};
          --color-text: ${textColor};
        }
      `}</style>
      <Head>
        <meta name="theme-color" content={color} />
      </Head>
      <Textfit forceSingleModeWidth={true} mode="single" max={500}>
        Have a {prefix} {day}
      </Textfit>
      <div
        style={{ userSelect: 'none', position: 'absolute', top: 5, right: 10, cursor: 'pointer' }}
        onClick={() => setPrefix(getPrefix(day))}
      >
        ↻
      </div>
    </>
  )
}
