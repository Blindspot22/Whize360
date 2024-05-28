const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB database
mongoose.connect('mongodb://localhost:27017/financial_wellness', {
    // Remove the useNewUrlParser and useUnifiedTopology options
});

// Create a schema for user data
const userSchema = new mongoose.Schema({
    riskTolerance: Number
});

const User = mongoose.model('User', userSchema);

// Middleware
app.use(bodyParser.json());

// Route to handle user data submission
app.post('/submit-risk-tolerance', (req, res) => {
    const { riskTolerance } = req.body;

    // Create a new user document and save it to the database
    const newUser = new User({ riskTolerance });
    newUser.save()
        .then(() => {
            res.status(200).json({ message: 'User data saved successfully.' });
        })
        .catch(err => {
            console.error('Error saving user data:', err);
            res.status(500).json({ error: 'An error occurred while saving user data.' });
        });
});

// Route to generate investment recommendations based on user's risk tolerance
app.get('/get-recommendations', (req, res) => {
    // Dummy recommendation generation based on risk tolerance (replace with actual algorithm)
    const riskTolerance = req.query.riskTolerance;
    let recommendation;

    if (riskTolerance >= 8) {
        recommendation = "Given your high risk tolerance, we recommend investing in a diversified portfolio with a mix of stocks, bonds, and alternative investments.";
    } else if (riskTolerance >= 5) {
        recommendation = "With a moderate risk tolerance, you may consider a balanced portfolio with a mix of stocks and bonds.";
    } else {
        recommendation = "Considering your low risk tolerance, a conservative investment strategy focusing on fixed-income securities might be suitable.";
    }

    res.status(200).json({ recommendation });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
