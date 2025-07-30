// Controller functions for handling business logic

const getHealth = (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
};

const getApiInfo = (req, res) => {
  res.json({
    message: 'Welcome to the Portfolio API',
    version: '1.0.0',
    endpoints: {
      health: '/health',
      api: '/api',
    },
  });
};

module.exports = {
  getHealth,
  getApiInfo,
};
