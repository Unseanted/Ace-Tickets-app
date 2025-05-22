const events = [
    {
        id: 1,
        name: "Rema Album tour", 
        type: "concert", 
        description: "Rema is coming to town", 
        date: "2021-01-01", 
        venue: "Eko Atlantic", 
        available: true
    },
    {
        id: 2,
        name: "Google Develper Conference", 
        type: "conference", 
        description: "I don't know", 
        date: "2021-01-02", 
        venue: "Tamarald Event Center", 
        available: false
}]

const getAllEvents = async (req, res) => {
    try {
        res.status(200).json(events)
    } catch (error) {
        res.status(500).json({Message: "Events not found"})
    }
}

const getOneEvent = async (req, res) => {
    try {
        const { id } = req.params
        const event = events.find(event => event.id === parseInt(id))
        if (!event) {
            return res.status(404).json({Message: "Event not found"})
        }
        res.status(200).json(event)
    } catch (error) {
        res.status(500).json({Message: "Event not found"})
    }
}

module.exports = {getAllEvents, getOneEvent};