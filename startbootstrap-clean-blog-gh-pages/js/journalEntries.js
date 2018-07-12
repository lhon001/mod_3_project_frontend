class JournalEntries{
  constructor(entryObj){
    this.title = entryObj.title
    this.content = entryObj.content
    this.user_id = entryObj.user_id
  }

  // puts all journal entries on the page
  static showAllEntries(entries){
    // console.log(entries)
    entries.forEach((entry) => {
      // let entryPostPreview = document.createElement('')
      // let entryTitle = document.getElementById('entry-title')
      // entryTitle.innerText = entry.title
      // console.log(entries);
    })
  }


  static createEntry(){
    let createEntryButton = document.getElementById('create-entry')
    createEntryButton.addEventListener('click', function(e){
      // console.log("creating a mutherfinn entry");
      

    })
    // Adapter.createEntry(entryObj)
    //   .then(r => {console.log(r)})
  }



}

// console.log('journalEntries.js running');
