import express from 'express';
import Team from '../models/Team.js'
import User from '../models/User.js'

const router = express.Router();

router.get('/teams', async (req, res) => {
  try {
    const teams = await Team.find();

    await Promise.all(teams.map(async (team) => {
      const playerCount = await User.countDocuments({ team: team.name });
      
      team._doc.playerCount = playerCount; 
    }));

    res.json({ teams });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



router.post('/teams', async (req, res) => {
  const { name, type, teamPhoto } = req.body;

  try {
    const existingTeam = await Team.findOne({ name });
    if (existingTeam) {
      return res.status(400).json({ error: 'Team with this name already exists' });
    }

    const newTeam = new Team({ name, type, teamPhoto });
    const savedTeam = await newTeam.save();

    res.json({ team: savedTeam });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.delete('/teams/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedTeam = await Team.findByIdAndDelete(id);
    if (!deletedTeam) {
      return res.status(404).json({ error: 'Team not found' });
    }

    res.json({ message: 'Team deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.put('/teams/:id', async (req, res) => {
  const { id } = req.params;
  const { name, type, teamPhoto } = req.body;

  try {
    const updatedTeam = await Team.findByIdAndUpdate(id, { name, type, teamPhoto }, { new: true });
    if (!updatedTeam) {
      return res.status(404).json({ error: 'Team not found' });
    }

    res.json({ team: updatedTeam });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/teams/getTeamById', async (req, res) => {
  const { id } = req.body;

  try {
    const team = await Team.findById(id);
    if (!team) {
      return res.status(404).json({ error: 'Team not found' });
    }

    res.json({ team });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


router.post('/teamsByGender', async (req, res) => {
  const { gender } = req.body;

  try {
    const teams = await Team.find({ gender });
    res.json({ teams });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


router.get('/teams/:teamName/list', async (req, res) => {
  try {
    const teamName = req.params.teamName;

    let usersList = await User.find( { team: teamName } );
    res.status(200).json(usersList)
  } catch(err) {

  }
})

export default router;
