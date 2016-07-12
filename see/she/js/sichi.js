var app = angular.module('app', []);

app.controller('SichiCtrl', function($scope) {
   $scope.getAgeStr = function() {
      var now = new Date();
      var today = new Date(now.getYear(),now.getMonth(),now.getDate());
      var s_bday = '03/16/2015';

      var yearNow = now.getYear();
      var monthNow = now.getMonth();
      var dateNow = now.getDate();

      var dob = new Date(
         s_bday.substring(6,10),
         s_bday.substring(0,2)-1,                   
         s_bday.substring(3,5)                  
      );

      var yearDob = dob.getYear();
      var monthDob = dob.getMonth();
      var dateDob = dob.getDate();
      var age = {};
      var ageString = "";
      var yearString = "";
      var monthString = "";
      var dayString = "";

      yearAge = yearNow - yearDob;

      if (monthNow >= monthDob)
         var monthAge = monthNow - monthDob;
      else {
         yearAge--;
         var monthAge = 12 + monthNow -monthDob;
      }

      if (dateNow >= dateDob)
         var dateAge = dateNow - dateDob;
      else {
         monthAge--;
         var dateAge = 31 + dateNow - dateDob;

         if (monthAge < 0) {
            monthAge = 11;
            yearAge--;
         }
      }

      age = {
         years: yearAge,
         months: monthAge,
         days: dateAge
      };

      /*
      if ( age.years > 1 ) yearString = " years";
      else yearString = " year";
      if ( age.months> 1 ) monthString = " months";
      else monthString = " month";
      if ( age.days > 1 ) dayString = " days";
      else dayString = " day";

      if ( (age.years > 0) && (age.months > 0) && (age.days > 0) )
         ageString = age.years + yearString + ", " + age.months + monthString + ", and " + age.days + dayString + " old.";
      else if ( (age.years == 0) && (age.months == 0) && (age.days > 0) )
         ageString = "Only " + age.days + dayString + " old!";
      else if ( (age.years > 0) && (age.months == 0) && (age.days == 0) )
         ageString = age.years + yearString + " old. Happy Birthday!!";
      else if ( (age.years > 0) && (age.months > 0) && (age.days == 0) )
         ageString = age.years + yearString + " and " + age.months + monthString + " old.";
      else if ( (age.years == 0) && (age.months > 0) && (age.days > 0) )
         ageString = age.months + monthString + " and " + age.days + dayString + " old.";
      else if ( (age.years > 0) && (age.months == 0) && (age.days > 0) )
         ageString = age.years + yearString + " and " + age.days + dayString + " old.";
      else if ( (age.years == 0) && (age.months > 0) && (age.days == 0) )
         ageString = age.months + monthString + " old.";
      else ageString = "Oops! Could not calculate age!";
      */
      yearString = 'Y', monthString = 'M', dayString = 'D';
      if(age.years > 0) ageString += age.years + yearString;
      if(age.months > 0) ageString += age.months + monthString;
      if(age.days > 0) ageString += age.days + dayString;
      if( (age.years > 0) && (age.months == 0) && (age.days == 0) )
         ageString += '. Happy Birthday!';

      return ageString;
   };
});
