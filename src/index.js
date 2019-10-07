/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
    focus = 'family', 
    knowsProgramming = true,
    config = {family: 4}
    ) {

      let hoursToLearnBasics = 500;
      let hoursToMaster = 800;
      let hoursToLearnFromScratch = hoursToLearnBasics + hoursToMaster;
      
      let numberOfWeeks;

      let numberOfHoursPerWeekAccordingFocus = config[focus]; //number of hours student can spend on learning based on its focus
      
      if (knowsProgramming == true) {

        numberOfWeeks = (hoursToLearnFromScratch - hoursToLearnBasics) / numberOfHoursPerWeekAccordingFocus;
 
      } else {

        numberOfWeeks = hoursToLearnFromScratch / numberOfHoursPerWeekAccordingFocus;

      }

      return Math.ceil(numberOfWeeks);

      
  };
  