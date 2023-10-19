function status(request, response) {
  response.status(200).json({ status: "All services online." });
}

export default status;
