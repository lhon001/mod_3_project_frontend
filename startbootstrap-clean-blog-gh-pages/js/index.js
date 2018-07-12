document.addEventListener("DOMContentLoaded", function(){


  Adapter.getEntries()
    .then(r => {JournalEntries.showAllEntries(r)})

  // Adapter.createEntry({title: "TEST THING", content: "IKR", user_id: 1})
  //   .then(r => {console.log(r);})

  // JournalEntries.createEntry({title: "Val Hart", content: "What a long day", user_id: 1})
  JournalEntries.createEntry();



})

// console.log('index.js running');
