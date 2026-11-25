import { Router } from 'express';


import{
    getJogos,
    getJogoId,
    getJogoFabricante,
    getJogoaAno,
    postJogo,
    putJogo,
    deleteJogo
} from '../controllers/jogosController.js';




const router = Router();
router.get('/', getJogos);
router.get('/:id', getJogoId);
router.get('/fabricante/:fabricante', getJogoFabricante);
router.get('/ano/:anolanc', getJogoaAno);
router.post('/', postJogo);
router.put('/:idjogo', putJogo);
router.delete('/:idjogo', deleteJogo);


export default router;