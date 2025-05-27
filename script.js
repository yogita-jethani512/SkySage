const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'daf2497053msh7678fe0485fbbebp1726d4jsn5436542f6c77',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city) => {
    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then(response => {

            console.log(response)
            cloud_pct.innerHTML = response.cloud_pct
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            humidity1.innerHTML = response.humidity
            max_temp.innerHTML = response.max_temp
            min_temp.innerHTML = response.min_temp
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset
            temp.innerHTML = response.temp
            temp1.innerHTML = response.temp
            wind_degrees.innerHTML = response.wind_degrees
            wind_speed.innerHTML = response.wind_speed
            wind_speed1.innerHTML = response.wind_speed
        })
        .catch(err => console.error(err))
}

submit.addEventListener("click", (e) => {
    e.preventDefault()
    getWeather(city.value)
})

// submit1.addEventListener("click", (e) => {
//     e.preventDefault()
//     getWeather(city1.value)
// })

getWeather("Jabalpur")

const mumbai = fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=mumbai', options)
    .then(response => response.json())
    .then(response => {
        mt.innerHTML = response.temp
        mc.innerHTML = response.cloud_pct
        mf.innerHTML = response.feels_like
        mh.innerHTML = response.humidity
        mmt.innerHTML = response.min_temp
        mmt1.innerHTML = response.max_temp
        msr.innerHTML = response.sunrise
        mss.innerHTML = response.sunset
        mwd.innerHTML = response.wind_degrees
        mws.innerHTML = response.wind_speed
    })

const dehli = fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Dehli', options)
    .then(response => response.json())
    .then(response => {
        dt.innerHTML = response.temp
        dc.innerHTML = response.cloud_pct
        df.innerHTML = response.feels_like
        dh.innerHTML = response.humidity
        dmt.innerHTML = response.min_temp
        dmt1.innerHTML = response.max_temp
        dsr.innerHTML = response.sunrise
        dss.innerHTML = response.sunset
        dwd.innerHTML = response.wind_degrees
        dws.innerHTML = response.wind_speed
    })

const lucknow = fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Lucknow', options)
    .then(response => response.json())
    .then(response => {
        lt.innerHTML = response.temp
        lc.innerHTML = response.cloud_pct
        lf.innerHTML = response.feels_like
        lh.innerHTML = response.humidity
        lmt.innerHTML = response.min_temp
        lmt1.innerHTML = response.max_temp
        lsr.innerHTML = response.sunrise
        lss.innerHTML = response.sunset
        lwd.innerHTML = response.wind_degrees
        lws.innerHTML = response.wind_speed
    })

const kolkata = fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata', options)
    .then(response => response.json())
    .then(response => {
        kt.innerHTML = response.temp
        kc.innerHTML = response.cloud_pct
        kf.innerHTML = response.feels_like
        kh.innerHTML = response.humidity
        kmt.innerHTML = response.min_temp
        kmt1.innerHTML = response.max_temp
        ksr.innerHTML = response.sunrise
        kss.innerHTML = response.sunset
        kwd.innerHTML = response.wind_degrees
        kws.innerHTML = response.wind_speed
    })

const bhopal = fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bhopal', options)
    .then(response => response.json())
    .then(response => {
        bt.innerHTML = response.temp
        bc.innerHTML = response.cloud_pct
        bf.innerHTML = response.feels_like
        bh.innerHTML = response.humidity
        bmt.innerHTML = response.min_temp
        bmt1.innerHTML = response.max_temp
        bsr.innerHTML = response.sunrise
        bss.innerHTML = response.sunset
        bwd.innerHTML = response.wind_degrees
        bws.innerHTML = response.wind_speed
    })

const indore = fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Indore', options)
    .then(response => response.json())
    .then(response => {
        It.innerHTML = response.temp
        Ic.innerHTML = response.cloud_pct
        If.innerHTML = response.feels_like
        Ih.innerHTML = response.humidity
        Imt.innerHTML = response.min_temp
        Imt1.innerHTML = response.max_temp
        Isr.innerHTML = response.sunrise
        Iss.innerHTML = response.sunset
        Iwd.innerHTML = response.wind_degrees
        Iws.innerHTML = response.wind_speed
    })