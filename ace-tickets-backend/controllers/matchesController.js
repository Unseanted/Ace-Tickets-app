const matches = [
  {
    id: 1,
    teams: ["Liverpool", "Chelsea"],
    date: "2021-01-01",
    venue: "Anfield",
    available: true,
  },
  {
    id: 2,
    teams: ["Manchester United", "Manchester City"],
    date: "2021-01-02",
    venue: "Old Trafford",
    available: false,
  },
];

exports.getMatches = async (req, res) => {
  res.status(200).json(matches);
};

exports.getMatchById = async (req, res) => {
  const match = matches.find((match) => match.id === parseInt(req.params.id));
  if (!match) {
    return res.status(404).json({ message: "Match not found" });
  }
  res.status(200).json(match);
};
