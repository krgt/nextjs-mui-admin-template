import Head from 'next/head'
import Slider from '@material-ui/core/Slider'

const Home: React.FC = () => {
  const marks = [
    {
      value: 0,
      label: '0°C'
    },
    {
      value: 20,
      label: '20°C'
    },
    {
      value: 37,
      label: '37°C'
    },
    {
      value: 100,
      label: '100°C'
    }
  ]

  function valuetext(value) {
    return `${value}°C`
  }

  return (
    <div>
      <Head>
        <title>NextJS Mui Admin Template</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Slider
        defaultValue={20}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-custom"
        step={10}
        valueLabelDisplay="auto"
        marks={marks}
      />
      </main>
    </div>
  )
}

export default Home
