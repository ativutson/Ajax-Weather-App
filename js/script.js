// state variable
let weatherData;

// cached element references - selected DOM elements
const $city = $('#city');
const $temp = $('#temp');
const $feel = $('#feel');
const $weather = $('#weather')
const $input = $('input[type="text"]');

// event listeners
$('form').on('submit', handleSubmit);

// functions
function handleSubmit(evt) {
    evt.preventDefault(); 
    const term = $input.val();
    $.ajax("https://api.openweathermap.org/data/2.5/weather?q=" + term + "&units=imperial&appid=7dc5b11d200572624088b292e55f5151")
    .then(function(data) {
        console.log('Weather Data ', data);
        weatherData = data;
        render();
    }, function(error) {
        console.log('Error ', error);
    });
}
function render() {
    $city.text(weatherData.name);
    $temp.text(Math.round(weatherData.main.temp));
    $feel.text(Math.round(weatherData.main.feels_like));
    $weather.text(weatherData.weather[0].description)
}