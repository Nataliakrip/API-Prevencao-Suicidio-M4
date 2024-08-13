import { Paciente } from './models/pacientes.model.js';  

const pacienteRouter = Router();

// eu criei o create
pacienteRouter.post('/pacientes', async (req, res) => {
    try {
        const paciente = await Paciente.create(req.body);
        res.status(201).json({ message: 'O paciente foi criado'});
    } catch (error) {
        res.status(400).json({ e: 'Não foi possivel criar o paciente' });
    }
});

// eu criei o read all
pacienteRouter.get('/pacientes', async (req, res) => {
    try {
        const pacientes = await Paciente.findAll();
        res.status(201).json({ message: 'O paciente foi encontrado' });
    } catch (error) {
        res.status(400).json({ e: 'Não foi possivel encontrar o paciente' });
    }
});

// eu criei o read by ID
pacienteRouter.get('/pacientes/:id', async (req, res) => {
    try {
        const paciente = await Paciente.findByPk(req.params.id);
        if (paciente) {
            res.status(201).json({ message: 'O paciente foi encontrado' });
        } 
    } catch (error) {
        res.status(400).json({ e:'Não foi possivel encontrar o paciente' });
    }
});

// eu criei o Update
pacienteRouter.put('/pacientes/:id', async (req, res) => {
    try {
        const paciente = await Paciente.findByPk(req.params.id);
        if (paciente) {
            await paciente.update(req.body);
            res.status(201).json({ message: 'O paciente foi encontrado' });
        } 
    } catch (error) {
        res.status(400).json({ e:'Não foi possivel encontrar o paciente' });
    }
});

// eu criei o delete
pacienteRouter.delete('/pacientes/:id', async (req, res) => {
    try {
        const paciente = await Paciente.findByPk(req.params.id);
        if (paciente) {
            await paciente.delete();
            res.status(201).json({ message: 'O paciente foi deletado' });
        } 
    } catch (error) {
        res.status(400).json({ e:'Não foi possivel deletar o paciente'});
    }
});

export {pacienteRouter};

