let getWeatherData = async(city) => { 
  const apiKey = process.env.REACT_APP_API_KEY;
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
      const resp = fetch(url, {method : 'GET'}).then(res => {return res.json()})
      return resp
      
    } catch (error) {
      console.error(error);
    }
  }


  let getCondtionImage = (condition) => {
    let myImages = {
      clear: "/image/clear.png",
      cloud: "/image/cloud.png",
      drizzle: "/image/drizzle.png",
      snow: "/image/snow.png",
      wind: "/image/wind.png",
      rain: "/image/rain.png",
    };

    if (condition.includes("drizzle")) {
      return myImages.drizzle;
    } else if (condition.includes("rain")) {
      return myImages.rain
    } else if (condition.includes("snow")) {
      return myImages.snow;
    } else if (condition.includes("clear")) {
      return myImages.clear;
    } else {
      return myImages.cloud;
    }
  }


  export {getWeatherData, getCondtionImage}

