import * as jogosModel from '../models/jogosModel.js';


//get jogos


export const getJogos = (req, res) => {
    const jogos = jogosModel.getJogos();
    res.status(200).json(jogos);
}


//get jogo por id


export const getJogoId = (req, res) => {
    const id = parseInt(req.params.id);
    const jogo = jogosModel.getJogoId(id);
    
    if (jogo) {
        res.status(200).json(jogo);
    } else {
        res.status(404).json({ message: 'Jogo não encontrado' });
    }
}


//get jogo por fabricante


export const getJogoFabricante = (req, res) => {
    const fabricante = req.params.fabricante.trim();
    const jogosFabricante = jogosModel.getJogoFabricante(fabricante);
    
    if (jogosFabricante.length > 0) {
        res.status(200).json(jogosFabricante);
    } else {
        res.status(404).json({ message: 'Nenhum jogo encontrado para o fabricante especificado' });
    }
}


//get jogo por ano de lançamento  


export const getJogoaAno = (req, res) => {
    const anolanc = Number(req.params.anolanc);
    const jogo = jogosModel.getJogoAnoLanc(anolanc);
    
    if (jogo) {
        res.status(200).json(jogo);
    } else {
        res.status(404).json({ message: 'Jogo não encontrado' });
    }
}


export const postJogo = (req, res) => {
    const { idjogo, nomejogo, fabricante, idademin, anolanc } = req.body


    if (idjogo === undefined || !nomejogo || !fabricante || idademin === undefined || anolanc === undefined){
         return res.status(400).json({ mensagem: 'Todos os campos são obrigatórios' });
  }


  const novoJogo = jogosModel.postJogo({ idjogo, nomejogo, fabricante, idademin, anolanc });
    res.status(201).json(novoJogo);




}


export const putJogo = (req, res) => {
    const idjogo = Number(req.params.idjogo)
    const {nomejogo, fabricante, idademin, anolanc } = req.body;


      if (idjogo === undefined || !nomejogo || !fabricante || idademin === undefined || idademin === anolanc){
         return res.status(400).json({ mensagem: 'Todos os campos são obrigatórios' });
  }


  const jogoAtualizado = jogosModel.putJogo(idjogo, { nomejogo, fabricante, idademin, anolanc });


   if (!jogoAtualizado) {
        return res.status(404).json({
            mensagem: `jogo com id: ${idjogo} não existe`
        });
    }


    res.status(200).json(jogoAtualizado);
}


export const deleteJogo = (req, res) => {
     const idjogo = Number(req.params.idjogo);
    const jogoRemovido= jogosModel.deleteJogo(idjogo);


    if (jogoRemovido) {
        res.status(200).json({ mensagem: `jogo com id: ${idjogo} removido com sucesso.` });
    } else {
        res.status(404).json({ mensagem: `jogo com id: ${idjogo} não encontrado para remoção.` });
    }


    res.status(200).json({
        mensagem: `jogo com id: ${idjogo} removido com sucesso.`,
        jogo: jogoRemovido
    });
}