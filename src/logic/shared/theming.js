export const themes = {
    darkTheme: {
      'primary-color': '#fa5b0f',
      'background-color': '#151515',
      'text-color': '#302e4d',
      'secondary-color': 'fcc200',
      'tertiary-color': '00edff',
      'grayscale-color': '#8F92B2',
      'bg-black-900':'#151515',
      'bg-black-100':'#222222',
      'bg-black-50':'#393939',
      'text-black-900':'#ffffff',
      'text-black-700':'#e9e9e9',
    },
    lightTheme: {
      'primary-color': '#fa5b0f',
      'secondary-color': 'fcc200',
      'tertiary-color': '00edff',
      'background-color': '#f2f2fc',
      'text-color': '#504e70',
      'grayscale-color': '#8C8C8C',
      'bg-black-900':'#f2f2fc',
      'bg-black-100':'#fdf9ff',
      'bg-black-50':'#e8dfec',
      'text-black-900':'#302e4d',
      'text-black-700':'#504e70',
    },
    greenThem:{
      'skin-color':'#37b182',
    },
    orangeThem:{
      'skin-color':'#fa5b0f'
    },
    redThem:{
      'skin-color':'#ec1839'

    },
    blueThem:{
      'skin-color':'#1854b4'

    },
    pinkThem:{
      'skin-color':'#f021b2'
    }
  }
  
  const setTheme = (themeVal) => {
    Object.keys(themeVal).forEach((el) => {
      document.documentElement.style.setProperty(`--${el}`, themeVal[el])
    })
  }
  
  export const changeTheme = (themeVal) => {
      console.log(themeVal)
    setTheme(themes[themeVal])
  }


  const setgreen = (themeVal) => {
    Object.keys(themeVal).forEach((el) => {
      document.documentElement.style.setProperty(`--${el}`, themeVal[el])
    })
  }
  
  export const changecolor = (themeVal) => {
      console.log(themeVal)
    setgreen(themes[themeVal])
  }

  const setorange = (themeVal) => {
    Object.keys(themeVal).forEach((el) => {
      document.documentElement.style.setProperty(`--${el}`, themeVal[el])
    })
  }
  
  export const color2 = (themeVal) => {
      console.log(themeVal)
    setorange(themes[themeVal])
  }

  const setred = (themeVal) => {
    Object.keys(themeVal).forEach((el) => {
      document.documentElement.style.setProperty(`--${el}`, themeVal[el])
    })
  }
  
  export const color3 = (themeVal) => {
      console.log(themeVal)
    setred(themes[themeVal])
  }

  const setblue = (themeVal) => {
    Object.keys(themeVal).forEach((el) => {
      document.documentElement.style.setProperty(`--${el}`, themeVal[el])
    })
  }
  
  export const color4 = (themeVal) => {
      console.log(themeVal)
    setblue(themes[themeVal])
  }

  const setpink = (themeVal) => {
    Object.keys(themeVal).forEach((el) => {
      document.documentElement.style.setProperty(`--${el}`, themeVal[el])
    })
  }
  
  export const color5 = (themeVal) => {
      console.log(themeVal)
    setpink(themes[themeVal])
  }