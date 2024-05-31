const asyncHandler = require('express-async-handler')

const Goal = require('../models/goalsModel')

//@desc: get  goals
//@route: GET /api/goals
//@access: private

const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find()
    res.status(200).json(goals);
})

//@desc: set  goals
//@route: post /api/goals
//@access: private

const setGoals = asyncHandler(async (req, res) => {
    if (!req.body.text){
        res.status(400)
    throw new Error('Please enter text field')
    }

    const goal = await Goal.create({
        text: req.body.text,
    })
    
    res.status(200).json(goal);

    
})

//@desc: update goals
//@route: put /api/goals/:id
//@access: private

const updateGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id);

    if(!goal){
        res.status(404)
        throw new Error('goal not found');

    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })
    res.status(200).json(updatedGoal);
})

//@desc: delete goals
//@route: delete /api/goals/:id
//@access: private
const deleteGoal = asyncHandler(async (req, res) => {
    if(!goal){
        res.status(404)
        throw new Error('goal not found');

    }

    await goal.remove()
    
    
    res.status(200).json({id: req.params.id, message: 'goal removed'});
})



module.exports = {
    getGoals,
    setGoals,   
    updateGoal,
    deleteGoal
}
