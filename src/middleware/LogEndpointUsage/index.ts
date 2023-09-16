const logEndpointUsage =(req, res, next) => {
    const timestamp = new Date().toLocaleString('pt-BR', {
      timeZone: 'UTC',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  
    console.log(`${timestamp} - ${req.method} ${req.path}`);
  
    // Continue to the next middleware or route handler
    next();
  }
  

export default logEndpointUsage;