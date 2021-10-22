// Tipo de Padrao: camelCase, PascalCase, snake_case
const LinksSocialMedia = {
  github: 'JoaoKolling',
  youtube: 'channel/UCEHC5pYpn0rrk-Xs1y1pCQg',
  facebook: 'JoaoEduardo01',
  instagram: 'joao_kolling',
  twitter: 'Indioziin_01'
}
//trocar nome pelo dom= document.getElementbyid('userName').textContent = 'Joao Kolling'
//userName.textContent = 'Joao Kolling'
//for(let i =0; i <= 10; i++)
// i = 1 + 1
// i++

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`

    //alert(li.children[0].href)
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })

  //alert(url)
}
getGitHubProfileInfos()

//Arrow Functions
//function nomeDaFuncao(){
//code
//}
// argumento => {}
