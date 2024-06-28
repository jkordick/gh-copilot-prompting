// enter high-level goal
// keep it simple and specific
// simplify with chat

/** create a simple javascript API for an ESC (eurovision song contest) voting
 * - Germany, Switzerland, Spain, UK, Netherlands are the countries
 * - Germany starts with 12 points,
 * - other countries start with 0 points
 *  the points need to be between 1-12
 *  the points can only be given once
 * - write a CLI that allows to give points to the countries
 * - write useful console logs for the user to follow the flow in the CLI
 */

function voteESC() {
  const voting = {
    Germany: 12,
    Switzerland: 0,
    Spain: 0,
    UK: 0,
    Netherlands: 0,
  };

  function vote(country, points) {
    if (!voting.hasOwnProperty(country)) {
      console.log(`${country} is not a valid country.`);
      return;
    }
    if (voting[country] === 0) {
      voting[country] = points;
      console.log(`Voted ${points} points for ${country}`);
    } else {
      console.log(`You already voted for ${country}`);
    }
  }
}