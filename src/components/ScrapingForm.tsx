import { Form,Button } from "react-bootstrap";
import axios from 'axios';
import cheerio from 'cheerio';

export default function ScrapingForm(){
  const url = 'https://www.gov.br/anvisa/pt-br/assuntos/medicamentos/cmed/precos/anos-anteriores/anos-anteriores'; // URL we're scraping
  const AxiosInstance = axios.create(); // Create a new Axios Instance

// This is the structure of the player data we recieve
  interface PlayerData {
    rank: number; // 1 - 20 rank
    name: string;
    nationality: string;
    goals: number;
  }

// Send an async HTTP Get request to the url
AxiosInstance.get(url)
  .then( // Once we have data returned ...
    response => {
      const html = response.data; // Get the HTML from the HTTP request
      const $ = cheerio.load(html); // Load the HTML string into cheerio
      
      console.log($);
    }
  )
  .catch(console.error); // Error handling
    
  return (
      <Form>
        <Form.Group>
          <Form.Label>Mês</Form.Label>
          <Form.Select>
            <option>-</option>
            <option>Janeiro</option>
            <option>fevereiro</option>
            <option>Março</option>
            <option>Abril</option>
            <option>Maio</option>
            <option>Junho</option>
            <option>Julho</option>
            <option>Agosto</option>
            <option>Setembro</option>
            <option>Outubro</option>
            <option>Novembro</option>
            <option>Dezembro</option>
          </Form.Select>
          <Form.Label>Ano</Form.Label>
          <Form.Control type="Number" min="2003" value="2021"/>
        </Form.Group>
        <Form.Check label="XLS" />
        <Form.Check label="PDF" />
        <Button type="submit">Get</Button>
      </Form>
  )
}