const github = new Github

const searchUser = document.getElementById('searchUser')

searchUser.addEventListener('keyup', event => {
  const userText = event.target.value

  if (userText !== '') {
    github.getUser(userText)
    .then(data => {
      if (data.profile.message === 'Not Found') {
        
      } else {
        
      }
    })
  } else {
    
  }
})