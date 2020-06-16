exports.handler = async (event, context) => {
  // Log the event argument for debugging and for use in local development.
  console.log(JSON.stringify(event, undefined, 2));
console.log('look mamma its working')
  return {
    statusCode:200,
    body:'im testing deploying a stackery environment'
  };
};
