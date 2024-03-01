import { useEffect, useState } from 'react';
import './App.css';
import Ships from './routes/ships/index';
import Ship from './components/Ship';

function App() {
    const [forecasts, setForecasts] = useState();
    const [ships, setShips] = useState([]);

    useEffect(() => {
        populateWeatherData();

        fetch("/api/Ships")
            .then(resp => resp.json())
            .then(data => {
                console.log(data);
                setShips(data);
            })
            .catch(e => console.log(e))
            

    }, []);

    const contents = forecasts === undefined
        ? <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
        : <table className="table table-striped" aria-labelledby="tabelLabel">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Temp. (C)</th>
                    <th>Temp. (F)</th>
                    <th>Summary</th>
                </tr>
            </thead>
            <tbody>
                {forecasts.map(forecast =>
                    <tr key={forecast.date}>
                        <td>{forecast.date}</td>
                        <td>{forecast.temperatureC}</td>
                        <td>{forecast.temperatureF}</td>
                        <td>{forecast.summary}</td>
                    </tr>
                )}
            </tbody>
        </table>;

    return (
        <div>
            <h1 id="tabelLabel">Weather forecast</h1>
            <h1 id="tabelLabel"><a href="/ships">Ships</a></h1>
            <p>This component demonstrates fetching data from the server.</p>
            {contents}
            {
                ships.map(s => <Ship obj={s} />)
            }
            <br />
            <h2>Some other ship:</h2>
            <Ship />
        </div>
    );
    
    async function populateWeatherData() {
        const response = await fetch('weatherforecast');
        const data = await response.json();
        setForecasts(data);
    }
}

export default App;