import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';


function Planets() {
  const [planetName, setPlanetName] = useState('');
  const [planetData, setPlanetData] = useState(null);
  const [error, setError] = useState(null);

  const apiKey = 'MhFh94tiG6B/IUpc54zgUw==iuQvSSWugIutIDlR';

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://api.api-ninjas.com/v1/planets?name=${planetName}`, {
        headers: { 'X-Api-Key': apiKey }
      });
      if (planetName === ''){
        setPlanetData('');
        setError('Por favor digite o nome de um planeta.')
      }
      else if (response.data.length === 0) {
        setPlanetData('');
        setError('Planeta não encontrado, por favor tente outro nome');
      } 
    } catch (error) {
      setError(error);
    }
  };


  const handleInputChange = (event) => {
    setPlanetName(event.target.value);
  };

  return (
    <div className='main'>
        <div className='pesquisa'>
            <div className='Input'>
              <input className='moderustic' type="text" value={planetName} onChange={handleInputChange} placeholder="Digite o nome do planeta..." />
            </div>
            <button className='moderustic' onClick={fetchData}>Pesquisar</button>
        </div>
        <div className='principal'>
            {error && <p>{error}</p>}
            {planetData && (
                <pre>
                {<ul>
                    <li className='new-amsterdam-regular'><strong>Nome:</strong> {planetData[0].name}</li>
                    <li className='new-amsterdam-regular'><strong>Massa:</strong> {planetData[0].mass}</li>
                    <li className='new-amsterdam-regular'><strong>Raio:</strong> {planetData[0].radius}</li>
                    <li className='new-amsterdam-regular'><strong>Periodo:</strong> {planetData[0].period}</li>
                    <li className='new-amsterdam-regular'><strong>Eixo Maior:</strong> {planetData[0].semi_major_axis}</li>
                    <li className='new-amsterdam-regular'><strong>Temperatura:</strong> {planetData[0].temperature}</li>
                    <li className='new-amsterdam-regular'><strong>Distância em anos luz:</strong> {planetData[0].distance_light_year}</li>
                    <li className='new-amsterdam-regular'><strong>Massa da estrala hospedeira:</strong> {planetData[0].host_star_mass}</li>
                    <li className='new-amsterdam-regular'><strong>Temperatura da estrela hospedeira:</strong> {planetData[0].host_star_temperature}</li>
                </ul>}
                </pre>
            )}
        </div>
    </div>
  );
}

export default Planets;
