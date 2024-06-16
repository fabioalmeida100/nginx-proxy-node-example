import express from 'express';
import { findAll, create } from '../repositories/peopleRepository.js';

const peopleRoute = express();

peopleRoute.get('/', async (req, res) => {
  const results = await findAll();

  const names = results.map((result) => {
    return `<li>${result.name}</li>`;
  });

  res.send('<h1>Full Cycle Rocks!</h1>'
    + '<ul>' + names.join('') + '</ul>'
  );
});

peopleRoute.post('/', async (req, res) => {
  await create(req.body.name);
  res.send('Person created');
});

export default peopleRoute;
