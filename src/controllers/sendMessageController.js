const sendMessageController = (req, res, next) => {
  try {
    const { message, destiny } = req.body;
    const { io } = require('../app');
    if (!message || !destiny) {
      return next({ message: 'Message and destiny are required', status: 400 });
    }
    io.emit(`${destiny}`, { message });
    return res.status(200).json({ message: 'Message sent', destiny });
  } catch (error) {
    console.log(error.message);
    return next({ message: error.message, status: 500 });
  }
};

const sendTestMessageController = (req, res, next) => {
  try {
    const { id } = req.params;
    const { io } = require('../app');
    io.emit(`test-connection-${id}`, { message: 'Test message from server!' });
    return res.status(200).json({ message: 'Message test sent', id });
  } catch (error) {
    console.log(error.message);
    return next({ message: error.message, status: 500 });
  }
};

module.exports = { sendMessageController, sendTestMessageController };
