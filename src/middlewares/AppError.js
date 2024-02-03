class AppError extends Error {
  statusCode;
  status;
  constructor(statusCode, message) {
    super(message);
    this.statusCode = statusCode;
    this.status = `failure`;
  }
}
export default AppError;
 