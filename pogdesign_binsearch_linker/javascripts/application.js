// http://www.newzbin.com/m/i/i/download.png
/* Example of a data cell:
   -----------------------
    <a id="j_21803" href="/cat/day/3-12-2010#r_0200_543_21803" class="eplink ">
      The Vampire Diaries
    </a>
    <br>
    <span class="seasep">
      'The Sacrifice'
    </span>
    <br>
    <span class="seasep">
      S: 2 - Ep: 10 (2:00am)
    </span>
   ------------------------ */


jQuery(function($) {
  var dataCells = $('table#month_box td.day .seasep, table#month_box td.today .seasep');
  
  // Create binsearch links for all tv shows in the calendar
  dataCells.each(function(i) {
    // Extract the name of the series
    var name = $('li:nth-child(1)', this).text();
    
    // Extract the season and episode number
    var container = $('li:nth-child(3)', this).text();
    var episode_parts = /S: (\d+) - Ep: (\d+)/.exec(container);
    var season = episode_parts[1];
    var episode = episode_parts[2];
    
    // Add link to page
    $(this).append(
      $('<a>').
        attr({ 'href': "http://www.binsearch.info/?q="+name+" s"+format_number(season)+"e"+format_number(episode)}).
        text('» search binsearch').
        addClass('binsearch-link')
    );
  });
  
  // Little helper method to make numbers two digits long
  function format_number(number) {
    return (parseInt(number) < 10) ? "0" + number : number;
  }
});