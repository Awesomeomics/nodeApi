/* Typeahead that uses the Bloodhound suggestion engine. */

h= {
  "TERM-A": ["GEN1", "GEN2", "GEN3"],
  "TERM-B": ["GEN1", "GEN2", "GEN3"],
  "TERM-C": ["BAC2", "AKJA4", "AKSFJL1", "ALKJ", "ALFKSD"]
};

// constructs the suggestion engine
var states = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  // `states` is an array of state names defined in "The Basics"
  local: $.map(h, function(obj, index) { return {value: index}; })
});

// kicks off the loading/processing of `local` and `prefetch`
states.initialize();
 
$('#bloodhound .typeahead').typeahead({
  hint: true,
  highlight: true,
  minLength: 1
},
{
  name: 'states',
  displayKey: 'value',
  // `ttAdapter` wraps the suggestion engine in an adapter that
  // is compatible with the typeahead jQuery plugin
  source: states.ttAdapter()
});

$('#bloodhound').bind('typeahead:selected', function(obj, datum, name) {
  console.log(datum.value);
  console.log(h[datum.value]);
});