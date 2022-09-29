const block_for_fork = async (req, res) => {
  // health check
  if (req.params["health"] === "health") {
    res.write(JSON.stringify({ success: true, msg: "Health check success" }));
    res.end();
  }

  // This is a test
  // Add your code here
  res.write(JSON.stringify({ success: true, msg: `Hello block_for_fork` }));
  res.end();
};

export default block_for_fork;
